"use client";

import { ScheduleSection } from "@/components/ScheduleSection";
import { ScheduleCarousel } from "@/components/ScheduleCarousel";

export default function Schedule() {
  return (
    <>
      <ScheduleCarousel />
      <ScheduleSection />
    </>
  );
}
