import { useRef, useState, useCallback, useEffect } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  maxHeight?: string;
}

/**
 * Inline zoomable image.
 * Default: image is centered and fit inside the container (object-fit: contain).
 * Pinch (two-finger trackpad) or buttons to zoom. Drag to pan when zoomed.
 * Normal scroll passes through to the page.
 */
export default function ZoomableImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  maxHeight = "700px",
}: ZoomableImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Use refs for the wheel handler to avoid re-attaching
  const scaleRef = useRef(scale);
  const translateRef = useRef(translate);
  useEffect(() => { scaleRef.current = scale; }, [scale]);
  useEffect(() => { translateRef.current = translate; }, [translate]);

  // Only intercept pinch gesture (ctrlKey set by browser for trackpad pinch)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return; // Normal scroll passes through

      e.preventDefault();
      e.stopPropagation();

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const currentScale = scaleRef.current;
      const currentTranslate = translateRef.current;
      const delta = e.deltaY > 0 ? -0.03 : 0.03;
      const newScale = Math.min(Math.max(0.5, currentScale + delta * currentScale), 80);

      // Zoom toward mouse position
      const scaleRatio = newScale / currentScale;
      const newTranslateX = mouseX - (mouseX - currentTranslate.x) * scaleRatio;
      const newTranslateY = mouseY - (mouseY - currentTranslate.y) * scaleRatio;

      setScale(newScale);
      setTranslate({ x: newTranslateX, y: newTranslateY });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1.05) return;
    e.preventDefault();
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
  }, [scale, translate]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    setTranslate({
      x: translateStart.current.x + dx,
      y: translateStart.current.y + dy,
    });
  }, [isPanning]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    if (scale > 1.5) {
      // Reset
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      // Zoom to 3x at click point
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const newScale = 3;
      const scaleRatio = newScale / scale;
      const newTranslateX = mouseX - (mouseX - translate.x) * scaleRatio;
      const newTranslateY = mouseY - (mouseY - translate.y) * scaleRatio;
      setScale(newScale);
      setTranslate({ x: newTranslateX, y: newTranslateY });
    }
  }, [scale, translate]);

  // Touch pinch-to-zoom
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchCenter = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDist.current = Math.sqrt(dx * dx + dy * dy);
      lastTouchCenter.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1 && scale > 1.05) {
      setIsPanning(true);
      panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      translateStart.current = { ...translate };
    }
  }, [scale, translate]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const scaleChange = dist / lastTouchDist.current;

      const container = containerRef.current;
      if (!container || !lastTouchCenter.current) return;
      const rect = container.getBoundingClientRect();
      const centerX = lastTouchCenter.current.x - rect.left;
      const centerY = lastTouchCenter.current.y - rect.top;

      const newScale = Math.min(Math.max(0.5, scale * scaleChange), 80);
      const scaleRatio = newScale / scale;
      const newTranslateX = centerX - (centerX - translate.x) * scaleRatio;
      const newTranslateY = centerY - (centerY - translate.y) * scaleRatio;

      setScale(newScale);
      setTranslate({ x: newTranslateX, y: newTranslateY });
      lastTouchDist.current = dist;
      lastTouchCenter.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1 && isPanning) {
      const dx = e.touches[0].clientX - panStart.current.x;
      const dy = e.touches[0].clientY - panStart.current.y;
      setTranslate({
        x: translateStart.current.x + dx,
        y: translateStart.current.y + dy,
      });
    }
  }, [scale, translate, isPanning]);

  const handleTouchEnd = useCallback(() => {
    lastTouchDist.current = null;
    lastTouchCenter.current = null;
    setIsPanning(false);
  }, []);

  const reset = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const newScale = Math.min(scale * 1.4, 80);
    const scaleRatio = newScale / scale;
    const newTranslateX = centerX - (centerX - translate.x) * scaleRatio;
    const newTranslateY = centerY - (centerY - translate.y) * scaleRatio;
    setScale(newScale);
    setTranslate({ x: newTranslateX, y: newTranslateY });
  }, [scale, translate]);

  const zoomOut = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const newScale = Math.max(scale / 1.4, 0.5);
    const scaleRatio = newScale / scale;
    const newTranslateX = centerX - (centerX - translate.x) * scaleRatio;
    const newTranslateY = centerY - (centerY - translate.y) * scaleRatio;
    setScale(newScale);
    setTranslate({ x: newTranslateX, y: newTranslateY });
  }, [scale, translate]);

  const isZoomed = scale > 1.05 || Math.abs(translate.x) > 2 || Math.abs(translate.y) > 2;

  return (
    <div
      ref={containerRef}
      className={`relative group overflow-hidden ${containerClassName}`}
      style={{ height: maxHeight, cursor: isZoomed ? (isPanning ? "grabbing" : "grab") : "default" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={handleDoubleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Default view: simple centered image using object-fit contain */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`select-none w-full h-full ${className}`}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          transformOrigin: "center center",
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transition: isPanning ? "none" : "transform 0.15s ease-out",
        }}
      />

      {/* Zoom controls */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => { e.stopPropagation(); zoomIn(); }}
          className="w-8 h-8 rounded bg-white/90 shadow border border-gray-200 hover:bg-white text-gray-700 text-lg font-bold flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); zoomOut(); }}
          className="w-8 h-8 rounded bg-white/90 shadow border border-gray-200 hover:bg-white text-gray-700 text-lg font-bold flex items-center justify-center"
        >
          −
        </button>
        {isZoomed && (
          <button
            onClick={(e) => { e.stopPropagation(); reset(); }}
            className="h-8 px-2 rounded bg-white/90 shadow border border-gray-200 hover:bg-white text-gray-700 text-xs font-medium flex items-center justify-center"
          >
            Fit
          </button>
        )}
      </div>

      {/* Zoom indicator */}
      {scale > 1.05 && (
        <div className="absolute top-3 left-3 z-10 text-[10px] text-gray-500 bg-white/90 px-2 py-1 rounded shadow border border-gray-100">
          {scale.toFixed(1)}x
        </div>
      )}

      {/* Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 px-2 py-0.5 rounded pointer-events-none">
        Pinch to zoom · Drag to pan · Double-click to zoom/reset
      </div>
    </div>
  );
}
