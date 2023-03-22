import React, { useState } from "react";

export default function usePlaceholder() {
   const [test, setTest] = useState("Placeholder");
   return { test };
}
