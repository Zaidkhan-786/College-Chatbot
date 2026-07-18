import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatBox({ messages }) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [messages]);

    return (

        <div className="flex-1 overflow-y-auto px-8 py-6">

            <div className="max-w-4xl mx-auto">

                {

                    messages.map((msg, index) => (

                        <MessageBubble
                            key={index}
                            sender={msg.sender}
                            text={msg.text}
                        />

                    ))

                }

                <div ref={bottomRef}></div>

            </div>

        </div>

    );

}

export default ChatBox;