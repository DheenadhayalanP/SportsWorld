import { useEffect, useState } from "react";
import api from "../components/API";

export default function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [removingId, setRemovingId] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);  

        api.get("/my-orders") // ✅ JWT automatically attached
            .then(res => {
                console.log("my-orders response:", res.data);
                setOrders(res.data.orders || []);
            })
            .catch(err => {
                console.error("Fetch my-orders error:", err);

                if (err.response?.status === 401) {
                    alert("Please login first");
                    window.location.href = "/login";
                    return;
                }

                if (err.response) {
                    setError(`Server ${err.response.status}: ${JSON.stringify(err.response.data)}`);
                } else {
                    setError("Network error fetching orders.");
                }

                setOrders([]);
            })
            .finally(() => setLoading(false));
    }, []);

    // ❌ REMOVE ORDER
    async function removeOrder(orderId) {
        if (!window.confirm("Remove this order?")) return;

        try {
            setRemovingId(orderId);

            await api.delete(`/delete-order/${orderId}`);

            // 🔥 instantly update UI
            setOrders(prev => prev.filter(o => o._id !== orderId));
        } catch (err) {
            alert("Failed to remove order");
            console.error(err);
        } finally {
            setRemovingId(null);
        }
    }


    // 🟢 BUY SINGLE ORDER
    function buyOrder(order) {
        console.log("Buying product:", {
            product: order.productName,
            quantity: order.quantity,
            price: order.totalPrice
        });
        alert(`Buying ${order.productName}`);
    }

    // 🟢 BUY ALL ORDERS
    function buyAllOrders() {
        console.log("Buying all products:", orders);
        alert("Buying all products (check console)");
    }


    if (loading) return <p className="text-center mt-6">Loading orders...</p>;
    if (error) return <div className="text-center text-red-600 mt-6">Error: {error}</div>;

    const totalAmount = orders.reduce((sum, o) => sum + (o.totalPrice || 0), 0);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-4">My Orders</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {orders.length === 0 && (
                    <p className="text-center col-span-full">No orders yet.</p>
                )}

                {orders.map(o => {
                    const productName =
                        o.productName ||
                        (o.productId && (o.productId.product || o.productId.name || o.productId.productName)) ||
                        "Product";

                    return (
                        <div
                            key={o._id}
                            className="border p-4 rounded shadow flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-bold text-xl">{productName}</h3>
                                <p>Quantity: {o.quantity ?? "N/A"}</p>
                                <p>Price: ₹ {o.totalPrice ?? "N/A"}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                            {/* ❌ REMOVE BUTTON */}
                            <button
                                onClick={() => removeOrder(o._id)}
                                disabled={removingId === o._id}
                                className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                            >
                                {removingId === o._id ? "Removing..." : "Remove"}
                            </button>

                            <button
                                onClick={() => buyOrder(o)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Buy
                            </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {orders.length > 0 && (
                <div className="mt-6 text-center border-t pt-4 text-xl font-bold">
                    Total Amount Spent: ₹ {totalAmount}
                </div>
            )} <br></br>
            {orders.length > 0 && (
                <div className="text-center mb-4">
                    <button onClick={buyAllOrders}
                        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800" >
                        {/* Buy All (₹ {totalAmount}) */}
                        Buy All
                    </button>
                </div>
            )}
        </div>
    );
}
