"use client";

import { ScheduleSection } from "@/components/ScheduleSection";
import { ScheduleCarousel } from "@/components/ScheduleCarousel";

export default function Schedule() {
  return (
    <div className="min-w-fit">
      <ScheduleCarousel />
      <ScheduleSection />
    </div>
  );
}
