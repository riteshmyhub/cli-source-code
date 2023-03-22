import React from "react";
import { usePlaceholder } from "./use[Placeholder]";

export default function Placeholder() {
   const { text } = usePlaceholder();
   return <div>{text} page work!</div>;
}
