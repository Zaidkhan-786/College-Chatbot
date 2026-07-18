import { useState } from "react";

import api from "../services/api";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import ChatBox from "../components/chat/ChatBox";
import ChatInput from "../components/chat/ChatInput";
import PromptSuggestions from "../components/chat/PromptSuggestions";
import TypingIndicator from "../components/chat/TypingIndicator";

function ChatHome() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    // ==========================
    // Start New Chat
    // ==========================

    function handleNewChat() {

        if (messages.length === 0) return;

        const confirmNewChat = window.confirm(
            "Start a new conversation?\n\nCurrent conversation will be cleared."
        );

        if (confirmNewChat) {

            setMessages([]);

        }

    }

    // ==========================
    // Send Message
    // ==========================

    async function handleSend(message) {

        // Add user message immediately

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: message
            }
        ]);

        setLoading(true);

        try {

            const response = await api.post("/chat/", {
                message: message
            });

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: response.data.response
                }
            ]);

        }

        catch (error) {

            console.error(error);

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: "⚠️ Unable to connect to the server."
                }
            ]);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="h-screen bg-slate-950 flex overflow-hidden">

            {/* Sidebar */}

            <Sidebar
                onNewChat={handleNewChat}
            />

            {/* Main Content */}

            <div className="flex-1 flex flex-col">

                <Header />

                {

                    messages.length === 0 ?

                        (

                            <div className="flex-1 flex flex-col justify-center items-center px-10">

                                <h1 className="text-5xl font-bold text-white">

                                    Hello 👋

                                </h1>

                                <p className="text-gray-400 text-xl mt-4">

                                    Ask anything about the IT Department

                                </p>

                                <PromptSuggestions
                                    onPromptClick={handleSend}
                                />

                            </div>

                        )

                        :

                        (

                            <ChatBox
                                messages={messages}
                            />

                        )

                }

                {

                    loading &&

                    <TypingIndicator />

                }

                <ChatInput
                    onSend={handleSend}
                />

            </div>

        </div>

    );

}

export default ChatHome;