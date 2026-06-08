import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  maxHeight?: string;
}

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={() => zoomIn(0.5)}
        className="w-8 h-8 rounded bg-white/90 shadow border border-gray-200 hover:bg-white text-gray-700 text-lg font-bold flex items-center justify-center"
      >
        +
      </button>
      <button
        onClick={() => zoomOut(0.5)}
        className="w-8 h-8 rounded bg-white/90 shadow border border-gray-200 hover:bg-white text-gray-700 text-lg font-bold flex items-center justify-center"
      >
        −
      </button>
      <button
        onClick={() => resetTransform()}
        className="h-8 px-2 rounded bg-white/90 shadow border border-gray-200 hover:bg-white text-gray-700 text-xs font-medium flex items-center justify-center"
      >
        Reset
      </button>
    </div>
  );
}

export default function ZoomableImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  maxHeight = "700px",
}: ZoomableImageProps) {
  return (
    <div className={`relative group ${containerClassName}`} style={{ maxHeight, overflow: "hidden" }}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={50}
        centerOnInit={true}
        limitToBounds={false}
        wheel={{ step: 0.12 }}
        pinch={{ step: 5 }}
        doubleClick={{ step: 2.5, mode: "zoomIn" }}
        panning={{ velocityDisabled: true }}
      >
        <Controls />
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            maxHeight: maxHeight,
            overflow: "hidden",
          }}
          contentStyle={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className={`w-full h-auto object-contain select-none ${className}`}
            style={{ maxHeight }}
          />
        </TransformComponent>
      </TransformWrapper>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 px-2 py-0.5 rounded">
        Scroll / pinch to zoom · Drag to pan
      </div>
    </div>
  );
}
