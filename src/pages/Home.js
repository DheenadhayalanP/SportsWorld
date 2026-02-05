import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => { 
        axios
            .get("http://localhost:5000/get-product")
            .then(res => setProducts(res.data.products || []))
            .catch(() => setProducts([]));
    }, []);

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-6">
                Sports Products
            </h2>

            {products.length === 0 && (
                <p className="text-center text-gray-500">No products found</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map(p => (
                    <div key={p.id}
                        className="border rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white" >
                        {/* IMAGE SECTION (MORE SPACE) */}
                        {p.coverImage && (
                            <div className="h-56 overflow-hidden">
                                <img src={`http://localhost:5000${p.coverImage}`} alt={p.product}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:-translate-y-2"/>
                            </div>
                        )}

                        {/* COMPACT CONTENT */}
                        <div className="p-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg truncate"> {p.product} </h3>

                                <Link to={`/product/${p.id}`}
                                    className="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700 transition" >
                                    View
                                </Link>
                            </div>

                            <p className="text-gray-700 text-sm mt-1"> ₹ {p.price} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
