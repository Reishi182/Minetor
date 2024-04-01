import React from "react";
import EventSection1 from "../ui/EventSection1";
import FifthSection from "../ui/FifthSection";
import EventSection2 from "../ui/EventSection2";

export default function Events() {
  return (
    <div className="relative flex flex-col">
      <EventSection1 />
      <EventSection2 />
    </div>
  );
}
