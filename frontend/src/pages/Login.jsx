import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [loading, setLoading] = useState(false);

    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    async function handleLogin() {

        setNameError("");
        setPhoneError("");

        const trimmedName = name.trim();

        let valid = true;

        if (!nameRegex.test(trimmedName)) {
            setNameError("Name should contain only alphabets and spaces.");
            valid = false;
        }

        if (!phoneRegex.test(phone)) {
            setPhoneError("Enter a valid 10-digit Indian mobile number.");
            valid = false;
        }

        if (!valid) return;

        try {

            setLoading(true);

            await axios.post("http://127.0.0.1:8000/students/", {
                full_name: trimmedName,
                phone_number: phone
            });

            navigate("/dashboard");

        } catch (err) {

            if (err.response) {
                alert(err.response.data.detail);
            } else {
                alert("Unable to connect to the server.");
            }

            console.log(err);

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="min-h-screen bg-slate-950 flex justify-center items-center">

            <div className="bg-slate-900 p-10 rounded-2xl shadow-xl w-[420px]">

                <h2 className="text-white text-4xl font-bold mb-8 text-center">
                    Welcome
                </h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setNameError("");
                    }}
                    className={`w-full p-4 rounded-xl border ${
                        nameError
                            ? "border-red-500"
                            : "border-transparent"
                    }`}
                />

                {nameError && (
                    <p className="text-red-400 text-sm mt-2 mb-4">
                        {nameError}
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Phone Number"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {

                        const value = e.target.value.replace(/\D/g, "");

                        setPhone(value);
                        setPhoneError("");

                    }}
                    className={`w-full p-4 rounded-xl border mt-2 ${
                        phoneError
                            ? "border-red-500"
                            : "border-transparent"
                    }`}
                />

                {phoneError && (
                    <p className="text-red-400 text-sm mt-2 mb-6">
                        {phoneError}
                    </p>
                )}

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className={`w-full p-4 rounded-xl text-white transition-all duration-300 ${
                        loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-cyan-500 hover:bg-cyan-600"
                    }`}
                >
                    {loading ? "Entering..." : "Enter AI Portal →"}
                </button>

            </div>

        </div>
    );
}

export default Login;