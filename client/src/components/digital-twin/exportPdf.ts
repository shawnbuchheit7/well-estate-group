import jsPDF from "jspdf";

interface OrganData {
  name: string;
  age: number;
  status: string;
  findings?: string;
  recommendations?: string;
}

interface ExportOptions {
  userName: string;
  biologicalAge: number;
  chronologicalAge: number;
  organs: OrganData[];
  cancerScreening?: { status: string; lastDate: string; method: string };
  genomics?: { markers: { name: string; status: string; risk: string }[] };
}

/**
 * Draw the Fountain Life molecular logo icon as circles in the PDF.
 * The icon is a 6-armed molecular shape made of connected circles.
 */
function drawMolecularIcon(doc: jsPDF, cx: number, cy: number, size: number) {
  const r = size * 0.12; // node radius
  const armLen = size * 0.38; // arm length from center
  const tipR = r * 0.7; // tip node radius

  // 6 arms at 60° intervals, rotated -90° so first arm points up
  const arms = [0, 1, 2, 3, 4, 5].map(i => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    return {
      x: cx + Math.cos(angle) * armLen,
      y: cy + Math.sin(angle) * armLen,
    };
  });

  // Draw arm lines (connecting center to tips)
  doc.setDrawColor(0, 180, 220);
  doc.setLineWidth(size * 0.06);
  arms.forEach(arm => {
    doc.line(cx, cy, arm.x, arm.y);
  });

  // Draw center node
  doc.setFillColor(0, 200, 230);
  doc.circle(cx, cy, r * 1.1, "F");

  // Draw tip nodes with gradient-like color variation
  const colors: [number, number, number][] = [
    [0, 220, 180],   // top - teal
    [0, 200, 230],   // top-right - cyan
    [0, 180, 240],   // bottom-right - blue
    [0, 120, 255],   // bottom - deep blue
    [0, 160, 230],   // bottom-left - blue
    [0, 200, 210],   // top-left - teal
  ];

  arms.forEach((arm, i) => {
    doc.setFillColor(...colors[i]);
    doc.circle(arm.x, arm.y, tipR, "F");
  });
}

export function exportHealthTwinPdf(options: ExportOptions) {
  const { userName, biologicalAge, chronologicalAge, organs, cancerScreening, genomics } = options;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  // ─── Header ───
  doc.setFillColor(10, 22, 40); // #0A1628
  doc.rect(0, 0, pageWidth, 55, "F");

  // Subtle accent line
  doc.setFillColor(0, 180, 220);
  doc.rect(0, 55, pageWidth, 0.5, "F");
  doc.setFillColor(10, 22, 40);
  doc.rect(0, 55.5, pageWidth, 1.5, "F");

  // Draw molecular logo icon
  drawMolecularIcon(doc, margin + 7, y + 9, 14);

  // Brand name next to icon
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("FOUNTAIN LIFE", margin + 17, y + 8);

  // Subtitle
  doc.setFontSize(10);
  doc.setTextColor(0, 200, 230); // cyan
  doc.setFont("helvetica", "normal");
  doc.text("Digital Health Twin Report", margin + 17, y + 14);

  // Date & prepared for (right side)
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  doc.text(dateStr, pageWidth - margin, y + 8, { align: "right" });
  doc.text(`Prepared for: ${userName}`, pageWidth - margin, y + 14, { align: "right" });

  // Bio Age hero card
  doc.setFillColor(15, 30, 50);
  doc.roundedRect(margin, y + 22, contentWidth, 20, 3, 3, "F");

  // Accent border on left of bio age card
  doc.setFillColor(0, 200, 230);
  doc.rect(margin, y + 22, 1.2, 20, "F");

  doc.setFontSize(10);
  doc.setTextColor(0, 200, 230);
  doc.setFont("helvetica", "bold");
  doc.text("BIOLOGICAL AGE", margin + 8, y + 33);

  doc.setFontSize(26);
  doc.setTextColor(34, 211, 238);
  doc.text(String(biologicalAge), margin + 55, y + 35);

  const diff = chronologicalAge - biologicalAge;
  doc.setFontSize(11);
  doc.setTextColor(52, 211, 153); // emerald-400
  doc.text(`${diff > 0 ? diff : 0}y younger`, margin + 72, y + 33);
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`than chronological age ${chronologicalAge}`, margin + 72, y + 38);

  y = 78;

  // ─── Organ Ages Section ───
  doc.setTextColor(34, 211, 238);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Organ Age Assessment", margin, y);
  y += 3;

  doc.setDrawColor(34, 211, 238);
  doc.setLineWidth(0.3);
  doc.line(margin, y, margin + contentWidth, y);
  y += 8;

  // Table header
  doc.setFillColor(15, 23, 42);
  doc.rect(margin, y - 4, contentWidth, 8, "F");
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.setFont("helvetica", "bold");
  doc.text("ORGAN", margin + 4, y);
  doc.text("AGE", margin + 50, y);
  doc.text("VS CHRONO", margin + 70, y);
  doc.text("STATUS", margin + 100, y);
  doc.text("KEY FINDINGS", margin + 125, y);
  y += 8;

  organs.forEach((organ, i) => {
    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    // Alternating row bg
    if (i % 2 === 0) {
      doc.setFillColor(12, 20, 35);
      doc.rect(margin, y - 4, contentWidth, 10, "F");
    }

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(organ.name, margin + 4, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(34, 211, 238);
    doc.text(String(organ.age), margin + 50, y);

    const organDiff = chronologicalAge - organ.age;
    if (organDiff > 0) {
      doc.setTextColor(52, 211, 153);
      doc.text(`${organDiff}y younger`, margin + 70, y);
    } else if (organDiff < 0) {
      doc.setTextColor(248, 113, 113);
      doc.text(`${Math.abs(organDiff)}y older`, margin + 70, y);
    } else {
      doc.setTextColor(148, 163, 184);
      doc.text("Same", margin + 70, y);
    }

    // Status badge
    const statusColors: Record<string, [number, number, number]> = {
      excellent: [52, 211, 153],
      good: [52, 211, 153],
      fair: [250, 204, 21],
      attention_needed: [248, 113, 113],
      critical: [239, 68, 68],
    };
    const sColor = statusColors[organ.status] || [148, 163, 184];
    doc.setTextColor(...sColor);
    doc.text(organ.status.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase()), margin + 100, y);

    // Findings (truncated)
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(7);
    const findingText = organ.findings ? organ.findings.substring(0, 30) + (organ.findings.length > 30 ? "..." : "") : "—";
    doc.text(findingText, margin + 125, y);

    y += 10;
  });

  y += 5;

  // ─── Cancer Screening ───
  if (cancerScreening) {
    if (y > 240) { doc.addPage(); y = 20; }

    doc.setTextColor(16, 185, 129); // emerald-500
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Cancer Screening", margin, y);
    y += 3;
    doc.setDrawColor(16, 185, 129);
    doc.line(margin, y, margin + contentWidth, y);
    y += 8;

    doc.setFillColor(15, 30, 30);
    doc.roundedRect(margin, y - 4, contentWidth, 22, 3, 3, "F");

    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(`Status: ${cancerScreening.status}`, margin + 6, y + 2);
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(9);
    doc.text(`Last Screening: ${cancerScreening.lastDate}`, margin + 6, y + 10);
    doc.text(`Method: ${cancerScreening.method}`, margin + 6, y + 16);
    y += 28;
  }

  // ─── Genomics ───
  if (genomics && genomics.markers.length > 0) {
    if (y > 230) { doc.addPage(); y = 20; }

    doc.setTextColor(139, 92, 246); // violet-500
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Genomics & DNA Analysis", margin, y);
    y += 3;
    doc.setDrawColor(139, 92, 246);
    doc.line(margin, y, margin + contentWidth, y);
    y += 8;

    genomics.markers.forEach((marker, i) => {
      if (y > 270) { doc.addPage(); y = 20; }

      if (i % 2 === 0) {
        doc.setFillColor(15, 15, 30);
        doc.rect(margin, y - 4, contentWidth, 8, "F");
      }

      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255);
      doc.text(marker.name, margin + 4, y);

      doc.setFont("helvetica", "normal");
      const riskColors: Record<string, [number, number, number]> = {
        "Low": [52, 211, 153],
        "Normal": [52, 211, 153],
        "Moderate": [250, 204, 21],
        "Elevated": [248, 113, 113],
      };
      const rColor = riskColors[marker.risk] || [148, 163, 184];
      doc.setTextColor(...rColor);
      doc.text(marker.risk, margin + 60, y);

      doc.setTextColor(148, 163, 184);
      doc.text(marker.status, margin + 90, y);

      y += 8;
    });
    y += 5;
  }

  // ─── Recommendations ───
  const allRecs = organs.filter(o => o.recommendations).map(o => ({ organ: o.name, rec: o.recommendations! }));
  if (allRecs.length > 0) {
    if (y > 230) { doc.addPage(); y = 20; }

    doc.setTextColor(250, 204, 21); // yellow-400
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Personalized Recommendations", margin, y);
    y += 3;
    doc.setDrawColor(250, 204, 21);
    doc.line(margin, y, margin + contentWidth, y);
    y += 8;

    allRecs.forEach((rec) => {
      if (y > 260) { doc.addPage(); y = 20; }

      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(34, 211, 238);
      doc.text(`${rec.organ}:`, margin + 4, y);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(200, 200, 200);
      const lines = doc.splitTextToSize(rec.rec, contentWidth - 40);
      doc.text(lines, margin + 30, y);
      y += lines.length * 4.5 + 4;
    });
  }

  // ─── Footer on all pages ───
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    const pageH = doc.internal.pageSize.getHeight();

    // Footer line
    doc.setDrawColor(30, 41, 59);
    doc.line(margin, pageH - 14, pageWidth - margin, pageH - 14);

    // Footer text
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(
      `Fountain Life  ·  Digital Health Twin Report  ·  Page ${p} of ${totalPages}  ·  Generated ${dateStr}`,
      pageWidth / 2,
      pageH - 8,
      { align: "center" }
    );

    // Small molecular icon in footer
    drawMolecularIcon(doc, margin + 3, pageH - 10, 5);
  }

  // Save
  doc.save(`Fountain-Life-Health-Twin-${userName.replace(/\s+/g, "-")}-${new Date().toISOString().split("T")[0]}.pdf`);
}
