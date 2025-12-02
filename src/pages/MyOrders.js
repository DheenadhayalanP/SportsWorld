import { useEffect, useState } from "react";
import axios from "axios";

export default function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/my-orders", { withCredentials: true })
            .then(res => setOrders(res.data.orders || []))
            .catch(err => {
                console.error("Fetch my-orders error:", err);
                setOrders([]);
            });
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-4">My Orders</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orders.length === 0 && <p className="text-center col-span-full">No orders yet.</p>}

                {orders.map(o => {
                    const productName = o.productName || (o.productId && (o.productId.product || o.productId.name)) || "Product";
                    return (
                        <div key={o._id} className="border p-4 rounded shadow">
                            <h3 className="font-bold text-xl">{productName}</h3>
                            <p>Quantity: {o.quantity}</p>
                            <p>Price: ₹ {o.totalPrice}</p>
                            <p className="text-sm text-gray-500">Ordered: {new Date(o.createdAt).toLocaleString()}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
