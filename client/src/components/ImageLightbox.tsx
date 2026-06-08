import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

function Controls({ onClose }: { onClose: () => void }) {
  const { zoomIn, zoomOut, resetTransform, centerView } = useControls();

  return (
    <div className="absolute top-4 right-4 z-[60] flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => zoomOut(0.5)}
        className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
        title="Zoom Out (-)"
      >
        <ZoomOut className="w-5 h-5" />
      </button>
      <button
        onClick={() => zoomIn(0.5)}
        className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
        title="Zoom In (+)"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      <button
        onClick={() => centerView(3)}
        className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
        title="Fit to Screen (F)"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
      <button
        onClick={() => resetTransform()}
        className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
        title="Reset (0)"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
      <button
        onClick={onClose}
        className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm ml-2"
        title="Close (Esc)"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

export default function ImageLightbox({ src, alt, children, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} className={`cursor-zoom-in relative group ${className || ""}`}>
        {children || (
          <>
            <img loading="lazy" src={src} alt={alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={backdropRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white"
            style={{ isolation: "isolate" }}
          >
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={50}
              centerOnInit={true}
              wheel={{ step: 0.15, smoothStep: 0.004 }}
              pinch={{ step: 5 }}
              doubleClick={{ step: 3, mode: "zoomIn" }}
              panning={{ velocityDisabled: false }}
              limitToBounds={false}
            >
              <Controls onClose={handleClose} />
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: "95vw",
                    maxHeight: "95vh",
                    objectFit: "contain",
                    userSelect: "none",
                  }}
                  draggable={false}
                />
              </TransformComponent>

              {/* Instructions */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[60] text-gray-400 text-xs font-mono bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                Scroll / Pinch to zoom (up to 50x) · Drag to pan · Double-click to zoom in · Esc to close
              </div>
            </TransformWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
