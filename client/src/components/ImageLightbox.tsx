import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

function ZoomControls({ onClose }: { onClose: () => void }) {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div
      className="absolute top-4 right-4 z-[60] flex items-center gap-1.5"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => zoomOut(0.5)}
        className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm font-mono transition-colors"
      >
        −
      </button>
      <button
        onClick={() => zoomIn(0.5)}
        className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm font-mono transition-colors"
      >
        +
      </button>
      <button
        onClick={() => resetTransform()}
        className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm font-mono transition-colors"
      >
        Reset
      </button>
      <button
        onClick={onClose}
        className="px-3 py-1.5 rounded bg-red-700 hover:bg-red-600 text-white text-sm transition-colors ml-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function ImageLightbox({ src, alt, children, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={`cursor-zoom-in relative group ${className || ""}`}>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50"
            style={{ background: "#f5f5f5" }}
          >
            <TransformWrapper
              initialScale={0.9}
              minScale={0.3}
              maxScale={80}
              centerOnInit={true}
              limitToBounds={false}
              wheel={{ step: 0.08 }}
              pinch={{ step: 3 }}
              doubleClick={{ step: 2.5, mode: "zoomIn" }}
              panning={{ velocityDisabled: true }}
            >
              <ZoomControls onClose={() => setIsOpen(false)} />
              <TransformComponent
                wrapperStyle={{
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  style={{
                    display: "block",
                    width: "auto",
                    height: "auto",
                    maxWidth: "none",
                    maxHeight: "none",
                    userSelect: "none",
                  }}
                  onLoad={(e) => {
                    // Log native size for debugging
                    const img = e.currentTarget;
                    console.log(`Lightbox image loaded: ${img.naturalWidth}x${img.naturalHeight}`);
                  }}
                />
              </TransformComponent>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[60] text-gray-500 text-xs bg-white/90 px-3 py-1 rounded shadow-sm">
                Scroll to zoom · Drag to pan · Double-click to zoom in · Esc to close
              </div>
            </TransformWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
