import { useEffect, useState } from "react";
import axios from "axios";

export default function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get("http://localhost:5000/my-orders", { withCredentials: true })
            .then(res => {
                console.log("my-orders response:", res.data);
                setOrders(res.data.orders || []);
            })
            .catch(err => {
                console.error("Fetch my-orders error:", err);
                if (err.response) setError(`Server ${err.response.status}: ${JSON.stringify(err.response.data)}`);
                else setError("Network error fetching orders.");
                setOrders([]);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-center mt-6">Loading orders...</p>;
    if (error) return <div className="text-center text-red-600 mt-6">Error: {error}</div>;

    const totalAmount = orders.reduce((sum, o) => sum + (o.totalPrice || 0), 0);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-4">My Orders</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orders.length === 0 && <p className="text-center col-span-full">No orders yet.</p>}

                {orders.map(o => {
                    const productName =
                        o.productName ||
                        (o.productId && (o.productId.product || o.productId.name || o.productId.productName)) ||
                        "Product";

                    return (
                        <div key={o._id ?? Math.random()} className="border p-4 rounded shadow">
                            <h3 className="font-bold text-xl">{productName}</h3>
                            <p>Quantity: {o.quantity ?? "N/A"}</p>
                            <p>Price: ₹ {o.totalPrice ?? "N/A"}</p>
                        </div>
                    );
                })}
            </div>
            
            
            {orders.length > 0 && (
                <div className="mt-6 text-center border-t pt-4 text-xl font-bold">
                    Total Amount Spent: ₹ {totalAmount}
                </div>
            )}
        </div>
    );
}
