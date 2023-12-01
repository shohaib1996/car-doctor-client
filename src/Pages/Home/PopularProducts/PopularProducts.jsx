import { useEffect, useState } from "react";
import ProductCards from "./ProductCards/ProductCards";


const PopularProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    return (
        <div>
            <h1 className="text-xl text-center text-[#FF3811] font-bold py-6">Popular Products</h1>
            <div className="w-3/5 mx-auto space-y-5">
                <p className="text-5xl font-bold text-center">Browse Our Products</p>
                <p className="text-center text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="mb-12 flex flex-col items-center justify-center">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 pb-12 mt-12">
                    {
                       products.map(product => <ProductCards key={product.id} product={product}></ProductCards>) 
                    }
                </div>
                <div>
                    <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-none hover:text-white">More Products</button>
                </div>

            </div>

        </div>
    );
};

export default PopularProducts;