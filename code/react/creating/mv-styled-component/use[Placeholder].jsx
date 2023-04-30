import React, { useState } from "react";

export default function usePlaceholder() {
   const [text, setText] = useState("placeholder component work!");
   return { text };
}
