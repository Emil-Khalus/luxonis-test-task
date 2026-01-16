"use client";

import { Box, Dialog, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Slide = { src: StaticImageData; alt: string };

const Carousel = ({ slides }: { slides: Slide[] }) => {
  const theme = useTheme();
  const [ready, setReady] = useState(false);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState<Slide | null>(null);

  const handleOpen = (slide: Slide) => {
    setActiveSlide(slide);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveSlide(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: 320, sm: 420, md: 600 },
            borderRadius: theme.shape.radius.sm,
            overflow: "hidden",
          }}
        >
          <Swiper
            loop
            speed={900}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides
            onInit={() => setReady(true)}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            style={{
              opacity: ready ? 1 : 0,
              transition: "opacity 150ms ease",
              ["--swiper-pagination-bullet-inactive-color" as string]:
                theme.palette.grey[100],
              ["--swiper-pagination-color" as string]:
                theme.palette.primary.main,
            }}
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <Box
                  onClick={() => handleOpen(s)}
                  sx={{
                    position: "relative",
                    height: { xs: 220, sm: 280, md: 420 },
                    width: "100%",
                    overflow: "hidden",
                    border: "1px solid",
                    cursor: "zoom-in",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        {activeSlide && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "60vh", md: "80vh" },
              borderRadius: theme.shape.radius.md,
              overflow: "hidden",
            }}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default Carousel;
