// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function ProductDetail() {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [qty, setQty] = useState(1);

//     useEffect(() => {
//         axios.get(`http://localhost:5000/get-product/${id}`)
//             .then(res => setProduct(res.data.products));
//     }, [id]);

//     async function orderNow() {
//         const res = await axios.post("http://localhost:5000/create-order", {
//             productId: product._id,
//             quantity: qty
//         });
//         alert(res.data.message);
//     }

//     if (!product) return <p>Loading...</p>;

//     return (
//         <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow">
//             <h2 className="text-2xl font-bold">{product.product}</h2>
//             <p className="mt-2">Price: ₹ {product.price}</p>

//             <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} className="border p-2 mt-4 w-20" />

//             <button onClick={orderNow} className="bg-green-600 text-white p-2 px-4 rounded mt-4 block" >
//                 Order Now
//             </button>
//         </div>
//     );
// }





import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(false);
    const [ordering, setOrdering] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("No product id in route");
            return;
        }
        setLoading(true);
        setError(null);

        const url = `http://localhost:5000/get-product/${id}`;
        console.log("Fetching product from:", url);

        axios.get(url)
            .then(res => {
                const got = res.data?.products ?? res.data?.product ?? res.data;
                setProduct(got);
            })
            .catch(err => {
                console.error("Fetch product error:", err);
                if (err.response) {
                    setError(`Server ${err.response.status}: ${JSON.stringify(err.response.data)}`);
                } else if (err.request) {
                    setError("No response from server while fetching product.");
                } else {
                    setError(err.message);
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    async function orderNow() {
        if (!product) {
            alert("No product loaded.");
            return;
        }

        const productId = product._id || product.id;
        if (!productId) {
            console.error("Product object missing id:", product);
            alert("Product id missing. Check product object in console.");
            return;
        }

        const quantity = Number(qty);
        if (!Number.isInteger(quantity) || quantity < 1) {
            alert("Enter a valid quantity (1 or more).");
            return;
        }

        const url = "http://localhost:5000/create-order";
        const payload = { productId, quantity };

        console.log("Creating order ->", url, payload);
        setOrdering(true);

        try {
            const res = await axios.post(url, payload, { timeout: 15000 });
            console.log("Order success:", res.status, res.data);
            alert(res.data?.message || "Order created");
        } catch (err) {
            console.error("Order error (axios):", err);
            if (err.response) {
                console.error("Server status:", err.response.status);
                console.error("Server body:", err.response.data);
                alert(`Server ${err.response.status}: ${JSON.stringify(err.response.data)}`);
            } else if (err.request) {
                console.error("No response received:", err.request);
                alert("No response from server. Is backend running?");
            } else {
                console.error("Axios setup error:", err.message);
                alert("Request error: " + err.message);
            }
        } finally {
            setOrdering(false);
        }
    }

    if (loading) return <p>Loading product...</p>;
    if (error) return <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow"><p className="text-red-600">Error: {error}</p></div>;
    if (!product) return <p>No product available.</p>;

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow">
            <h2 className="text-2xl font-bold">{product.product || product.name}</h2>
            <p className="mt-2">Price: ₹ {product.price}</p>

            <input type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} className="border p-2 mt-4 w-20" />

            <button onClick={orderNow} className="bg-green-600 text-white p-2 px-4 rounded mt-4 block" disabled={ordering} >
                {ordering ? "Ordering..." : "Order Now"}
            </button>
        </div>
    );
}
