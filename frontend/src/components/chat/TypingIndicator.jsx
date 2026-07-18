function TypingIndicator() {

    return (

        <div className="px-8 py-4">

            <div className="bg-slate-800 rounded-2xl px-6 py-4 w-fit">

                <div className="flex gap-2">

                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>

                    <span
                        className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                    ></span>

                    <span
                        className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                    ></span>

                </div>

            </div>

        </div>

    );

}

export default TypingIndicator;