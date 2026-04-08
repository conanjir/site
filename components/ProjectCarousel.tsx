"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent, PointerEvent } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pointerSide, setPointerSide] = useState<"prev" | "next">("next");

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
        onKeyDown={handleKeyDown}
        aria-label={`${project.title} image carousel`}
      >
        <div className="project-carousel__viewport">
          <div className="project-carousel__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="project-carousel__slide" aria-hidden={slide !== slides[currentIndex]}>
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
      </div>
    </section>
  );
}
