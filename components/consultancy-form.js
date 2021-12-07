import React from "react";

export default function ConsultancyForm({ voice, video, voip }) {
  let availability = "";
  if (voice) {
    availability = "صوتی";
  }
  if (video) {
    availability = availability.length > 0 ? `/ تصویری` : "";
  }
  if (voip) {
    availability = availability.length > 0 ? "/ اینترنتی" : "";
  }

  console.log(availability);
  return <div className="text-xs">{availability}</div>;
}
