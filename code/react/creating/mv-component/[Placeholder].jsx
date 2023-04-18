import React from "react";
import usePlaceholder from "./usePlaceholder";

export default function Placeholder() {
   const { text } = usePlaceholder();
   return <div>{text} component work!</div>;
}
