import React from "react";
import { usePlaceHolder } from "./hook/use[PlaceHolder]";

export default function PlaceHolder() {
   const { text } = usePlaceHolder();
   return <div>{text} page work</div>;
}
