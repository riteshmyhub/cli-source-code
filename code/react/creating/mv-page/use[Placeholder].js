import React, { useState } from "react";

export default function usePlaceholder() {
   const [text, setText] = useState("Placeholder page work!");
   return { text };
}
