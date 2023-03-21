import React, { useState } from "react";

export default function usePlaceHolder() {
   const [test, setTest] = useState("PlaceHolder");
   return { test };
}
