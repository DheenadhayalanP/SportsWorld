import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Sports Shop</h1>
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/my-orders">My Orders</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}
