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
      className="fixed top-4 right-4 flex items-center gap-2"
      style={{ zIndex: 10001 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => zoomOut(0.5)}
        className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 text-gray-800 text-xl font-bold flex items-center justify-center transition-colors"
      >
        −
      </button>
      <button
        onClick={() => zoomIn(0.5)}
        className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 text-gray-800 text-xl font-bold flex items-center justify-center transition-colors"
      >
        +
      </button>
      <button
        onClick={() => resetTransform()}
        className="h-10 px-4 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 text-gray-800 text-sm font-medium flex items-center justify-center transition-colors"
      >
        Fit
      </button>
      <button
        onClick={onClose}
        className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors shadow-lg"
      >
        <X className="w-5 h-5" />
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
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
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
            className="fixed inset-0"
            style={{ zIndex: 10000, background: "#ffffff" }}
          >
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={80}
              centerOnInit={true}
              limitToBounds={false}
              wheel={{ step: 0.15, smoothStep: 0.004 }}
              pinch={{ step: 5 }}
              doubleClick={{ step: 3, mode: "zoomIn" }}
              panning={{ velocityDisabled: false }}
            >
              <ZoomControls onClose={() => setIsOpen(false)} />
              <TransformComponent
                wrapperStyle={{
                  width: "100vw",
                  height: "100vh",
                  overflow: "hidden",
                }}
                contentStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  style={{
                    display: "block",
                    maxWidth: "95vw",
                    maxHeight: "95vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    userSelect: "none",
                  }}
                />
              </TransformComponent>
              <div
                className="fixed bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-xs bg-white/90 px-4 py-2 rounded-full shadow-sm border border-gray-100"
                style={{ zIndex: 10001 }}
              >
                Scroll / pinch to zoom · Drag to pan · Double-click to zoom in · Esc to close
              </div>
            </TransformWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
