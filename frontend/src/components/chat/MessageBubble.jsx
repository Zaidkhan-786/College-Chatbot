import { FaRobot, FaUserCircle } from "react-icons/fa";

function MessageBubble({ sender, text }) {

    const isUser = sender === "user";

    return (

        <div
            className={`flex mb-6 ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            {

                !isUser &&

                <FaRobot
                    className="text-cyan-400 text-3xl mr-3 mt-1"
                />

            }

            <div
                className={`max-w-2xl px-5 py-4 rounded-2xl text-white leading-7 ${
                    isUser
                        ? "bg-cyan-600 rounded-br-md"
                        : "bg-slate-800 rounded-bl-md"
                }`}
            >

                {text}

            </div>

            {

                isUser &&

                <FaUserCircle
                    className="text-cyan-400 text-3xl ml-3 mt-1"
                />

            }

        </div>

    );

}

export default MessageBubble;