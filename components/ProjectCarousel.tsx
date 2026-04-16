"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent, PointerEvent, TouchEvent } from "react";

import { MediaPlate } from "@/components/MediaPlate";
import type { Project } from "@/data/site";

type Slide = {
  id: string;
  label: string;
  media: Project["heroMedia"];
};

function getCarouselMedia(media: Slide["media"]): Slide["media"] {
  if (media.kind === "video" && media.fit === "cover") {
    return { ...media, fit: "contain" };
  }

  return media;
}

function getSlides(project: Project): Slide[] {
  return [
    ...(project.carouselIntro
      ? [
          {
            id: `${project.slug}-intro`,
            label: project.carouselIntro.label,
            media: getCarouselMedia(project.carouselIntro.media)
          }
        ]
      : []),
    {
      id: `${project.slug}-hero`,
      label: project.heroLabel,
      media: getCarouselMedia(project.heroMedia)
    },
    ...project.media.map((item, index) => ({
      id: `${project.slug}-${index}`,
      label: item.label,
      media: getCarouselMedia(item.media)
    }))
  ];
}

export function ProjectCarousel({ project }: { project: Project }) {
  const slides = getSlides(project);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pointerSide, setPointerSide] = useState<"prev" | "next">("next");
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateViewportHeight = () => {
      if (typeof window === "undefined" || !window.matchMedia("(max-width: 640px)").matches) {
        setViewportHeight(null);
        return;
      }

      const slide = slideRefs.current[currentIndex];

      if (!slide) {
        return;
      }

      setViewportHeight(slide.offsetHeight);
    };

    const frame = window.requestAnimationFrame(updateViewportHeight);

    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, [currentIndex, slides.length]);

  const updatePointer = (event: PointerEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const rect = viewport.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nextSide = x < rect.width / 2 ? "prev" : "next";

    viewport.style.setProperty("--carousel-cursor-x", `${x}px`);
    viewport.style.setProperty("--carousel-cursor-y", `${y}px`);

    if (nextSide !== pointerSide) {
      setPointerSide(nextSide);
    }
  };

  const goPrev = () => {
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentIndex((index) => (index + 1) % slides.length);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    updatePointer(event);

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const rect = viewport.getBoundingClientRect();
    const isPrevSide = event.clientX - rect.left < rect.width / 2;

    if (isPrevSide) {
      goPrev();
      return;
    }

    goNext();
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touchStart = touchStartRef.current;

    if (!touchStart) {
      return;
    }

    touchStartRef.current = null;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0) {
      goPrev();
      return;
    }

    goNext();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section className="shell section-gap">
      <div
        ref={viewportRef}
        className="project-carousel"
        tabIndex={0}
        onPointerMove={updatePointer}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartRef.current = null;
        }}
        onKeyDown={handleKeyDown}
        aria-label={`${project.title} image carousel`}
      >
        <div className="project-carousel__viewport" style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}>
          <div className="project-carousel__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className="project-carousel__slide"
                aria-hidden={slide !== slides[currentIndex]}
              >
                <MediaPlate
                  tone={project.heroTone}
                  label={slide.label}
                  media={slide.media}
                  className="project-carousel__media"
                />
              </div>
            ))}
          </div>
        </div>
        <span className="project-carousel__cursor" aria-hidden="true">
          {pointerSide === "prev" ? "\u2190" : "\u2192"}
        </span>
        <div className="project-carousel__swipe-hint" aria-hidden="true">
          <span className="project-carousel__swipe-arrow">\u2190</span>
          <span className="project-carousel__swipe-arrow">\u2192</span>
        </div>
      </div>
    </section>
  );
}
