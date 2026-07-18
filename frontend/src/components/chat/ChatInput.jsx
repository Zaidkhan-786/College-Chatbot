import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="border-t border-slate-800 p-5 bg-slate-950">
      <div className="flex gap-3">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Ask anything about the department..."
          className="flex-1 bg-slate-900 text-white rounded-xl px-5 py-4 outline-none"
        />

        <button
          onClick={handleSend}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 rounded-xl text-white"
        >
          <FaPaperPlane />
        </button>

      </div>
    </div>
  );
}

export default ChatInput;