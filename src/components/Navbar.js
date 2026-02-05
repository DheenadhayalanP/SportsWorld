import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    
    function loadUser() {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser ? JSON.parse(storedUser) : null);
    }

    // 🔐 Load on mount + listen to login/logout changes
    // 🔐 Read login state from localStorage
    useEffect(() => {
        loadUser();

        window.addEventListener("authChange", loadUser);

        return () => {
            window.removeEventListener("authChange", loadUser);
        };
    }, []);

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // 🔥 UPDATE NAVBAR INSTANTLY
        window.dispatchEvent(new Event("authChange"));

        navigate("/login");
    }

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Sports Shop</h1>

            <div className="flex gap-4 items-center">
                <Link to="/">Home</Link>

                {/* ✅ ONLY WHEN LOGGED IN */}
                {user && (
                    <>
                        <Link to="/my-orders">My Orders</Link>
                        <span className="font-semibold">👋 {user.name}</span>
                        <button
                            onClick={logout}
                            className="px-3 py-1 rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </>
                )}

                {/* ❌ ONLY WHEN LOGGED OUT */}
                {!user && (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
