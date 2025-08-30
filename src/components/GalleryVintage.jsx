import React, { useCallback, useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD = 50; // px

const GalleryVintage = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const modalRef = useRef(null);

  const openAt = (idx) => {
    setCurrent(idx);
    setIsOpen(true);
  };

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  // Close on backdrop click (but not when clicking inside the modal/image container)
  const onBackdropClick = (e) => {
    // If click is outside the modalRef container, close
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  };

  // Touch handlers for swipe on the image
  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) {
        // left swipe -> next
        next();
      } else {
        // right swipe -> prev
        prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-[#FAF3E0]">
      <h2 className="text-4xl font-vintageText mb-8 text-center">Nosotros</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openAt(index)}
            className="w-64 h-64 bg-white border-4 border-gold p-2 shadow-lg transform hover:rotate-1 transition-transform focus:outline-none focus:ring-4 focus:ring-gold/40"
            style={{ boxShadow: "2px 2px 10px rgba(0,0,0,0.2)" }}
            aria-label={`Abrir imagen ${index + 1}`}
          >
            <img
              src={img.img}
              alt={`Vintage ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isOpen}
        onClick={onBackdropClick}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Image container */}
        <div
          ref={modalRef}
          className={`relative h-full w-full flex items-center justify-center p-4 transition-transform duration-300 ease-out ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 md:top-6 md:right-6 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur px-4 py-2 text-2xl"
            aria-label="Cerrar"
          >
            X
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={prev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur"
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={next}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Image with swipe support */}
          <img
            src={images[current]?.img}
            alt={`Imagen ${current + 1} de ${images.length}`}
            className="max-h-[80vh] max-w-[92vw] object-contain select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            draggable={false}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/30 px-3 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryVintage;