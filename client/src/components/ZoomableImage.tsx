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
 * Default: image centered and fit inside container.
 * Pinch zooms toward the point you're pinching on.
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
  const imgRef = useRef<HTMLImageElement>(null);

  // Transform state: scale and translate relative to the "fit" position
  const [scale, setScale] = useState(1);
  const [originX, setOriginX] = useState("50%");
  const [originY, setOriginY] = useState("50%");
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const txStart = useRef(0);
  const tyStart = useRef(0);

  // Refs for wheel handler
  const stateRef = useRef({ scale: 1, translateX: 0, translateY: 0 });
  useEffect(() => {
    stateRef.current = { scale, translateX, translateY };
  }, [scale, translateX, translateY]);

  // Pinch-to-zoom via trackpad (ctrlKey). Normal scroll passes through.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      e.stopPropagation();

      const img = imgRef.current;
      if (!img) return;

      const rect = img.getBoundingClientRect();
      // Mouse position as percentage of the displayed image
      const pctX = ((e.clientX - rect.left) / rect.width) * 100;
      const pctY = ((e.clientY - rect.top) / rect.height) * 100;

      const { scale: curScale, translateX: curTx, translateY: curTy } = stateRef.current;
      const delta = e.deltaY > 0 ? -0.04 : 0.04;
      const newScale = Math.min(Math.max(1, curScale + delta * curScale), 60);

      // When zooming in from scale=1, set origin to cursor point
      if (curScale <= 1.01) {
        setOriginX(`${pctX}%`);
        setOriginY(`${pctY}%`);
        setTranslateX(0);
        setTranslateY(0);
      }

      setScale(newScale);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Mouse pan when zoomed
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1.05) return;
    e.preventDefault();
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY };
    txStart.current = translateX;
    tyStart.current = translateY;
  }, [scale, translateX, translateY]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    setTranslateX(txStart.current + (e.clientX - panStart.current.x));
    setTranslateY(tyStart.current + (e.clientY - panStart.current.y));
  }, [isPanning]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  // Double-click: zoom to 3x at that point, or reset
  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    const img = imgRef.current;
    if (!img) return;

    if (scale > 1.5) {
      setScale(1);
      setTranslateX(0);
      setTranslateY(0);
      setOriginX("50%");
      setOriginY("50%");
    } else {
      const rect = img.getBoundingClientRect();
      const pctX = ((e.clientX - rect.left) / rect.width) * 100;
      const pctY = ((e.clientY - rect.top) / rect.height) * 100;
      setOriginX(`${pctX}%`);
      setOriginY(`${pctY}%`);
      setTranslateX(0);
      setTranslateY(0);
      setScale(3);
    }
  }, [scale]);

  // Touch pinch-to-zoom
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchCenter = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDist.current = Math.sqrt(dx * dx + dy * dy);

      // Set origin to midpoint of the two fingers
      const img = imgRef.current;
      if (img) {
        const rect = img.getBoundingClientRect();
        const cx = ((e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left) / rect.width * 100;
        const cy = ((e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top) / rect.height * 100;
        if (scale <= 1.01) {
          setOriginX(`${cx}%`);
          setOriginY(`${cy}%`);
          setTranslateX(0);
          setTranslateY(0);
        }
      }
    } else if (e.touches.length === 1 && scale > 1.05) {
      setIsPanning(true);
      panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      txStart.current = translateX;
      tyStart.current = translateY;
    }
  }, [scale, translateX, translateY]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const scaleChange = dist / lastTouchDist.current;
      const newScale = Math.min(Math.max(1, scale * scaleChange), 60);
      setScale(newScale);
      lastTouchDist.current = dist;
    } else if (e.touches.length === 1 && isPanning) {
      setTranslateX(txStart.current + (e.touches[0].clientX - panStart.current.x));
      setTranslateY(tyStart.current + (e.touches[0].clientY - panStart.current.y));
    }
  }, [scale, isPanning]);

  const handleTouchEnd = useCallback(() => {
    lastTouchDist.current = null;
    lastTouchCenter.current = null;
    setIsPanning(false);
  }, []);

  const reset = useCallback(() => {
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
    setOriginX("50%");
    setOriginY("50%");
  }, []);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(s * 1.4, 60));
  }, []);

  const zoomOut = useCallback(() => {
    const newScale = Math.max(scale / 1.4, 1);
    setScale(newScale);
    if (newScale <= 1.01) {
      setTranslateX(0);
      setTranslateY(0);
    }
  }, [scale]);

  const isZoomed = scale > 1.05;

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
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        className={`select-none w-full h-full ${className}`}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          transformOrigin: `${originX} ${originY}`,
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
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
      {isZoomed && (
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
