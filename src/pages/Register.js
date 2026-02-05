import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const url = "http://localhost:5000/register-user";
 
        try {
            const res = await axios.post(url, form, { timeout: 10000 });
            alert(res.data?.message || "Registered successfully");
        } catch (err) {
            console.error("Register error:", err);
            if (err.response) {
                alert(`Server ${err.response.status}: ${JSON.stringify(err.response.data)}`);
            } else if (err.request) {
                alert("No response from server. Is backend running?");
            } else {
                alert("Request error: " + err.message);
            }
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input name="name" placeholder="Enter name" className="p-2 border rounded" onChange={handleChange} />
                <input name="email" placeholder="Enter email" className="p-2 border rounded" onChange={handleChange} />
                <input name="password" type="password" placeholder="Password" className="p-2 border rounded" onChange={handleChange} />
                <button className="bg-blue-600 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
}
