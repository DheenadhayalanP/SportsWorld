import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
 
    function change(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function submit(e) {
        e.preventDefault();

        const res = await axios.post("http://localhost:5000/login", form);

        alert(res.data.message);

        if (res.data.success) {
            // 🔐 STORE JWT
            localStorage.setItem("token", res.data.token);

            // (optional) store user
            localStorage.setItem("user", JSON.stringify(res.data.datas));

            // 🔥 FORCE NAVBAR TO UPDATE
            window.dispatchEvent(new Event("authChange"));
            
            navigate("/");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <form onSubmit={submit} className="flex flex-col gap-4">
                <input name="email" placeholder="Email" className="p-2 border rounded" onChange={change} />
                <input name="password" type="password" placeholder="Password" className="p-2 border rounded" onChange={change} />
                <button className="bg-blue-600 text-white p-2 rounded">Login</button>
            </form>
        </div>
    );
}

