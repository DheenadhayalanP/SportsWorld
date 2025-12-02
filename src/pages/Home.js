import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/get-product")
            .then(res => setProducts(res.data.products));
    }, []);

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-4">Sports Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(p => (
                    <div key={p.id} className="border p-4 rounded shadow">
                        <h3 className="font-bold text-xl">{p.product}</h3>
                        <p className="text-gray-600">₹ {p.price}</p>

                        <Link to={`/product/${p.id}`}
                            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded" > View </Link>
                            
                    </div>
                ))}
            </div>
        </div>
    );
}
