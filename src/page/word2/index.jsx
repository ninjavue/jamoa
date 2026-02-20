import { useState } from "react";

export default function WordTwo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-xl overflow-hidden">
      <div class="chat-background">
        <div class="chat-background-item is-pattern is-visible">
          <canvas
            width="50"
            height="50"
            data-colors="#dbddbb,#6ba587,#d5d88d,#88b884"
            class="chat-background-item-canvas chat-background-item-color-canvas chat-background-item-scalable"
          ></canvas>
          <canvas
            data-original-height="961"
            width="1007"
            height="961"
            class="chat-background-item-canvas chat-background-item-pattern-canvas"
          ></canvas>
        </div>
      </div>
    </div>
  );
}
