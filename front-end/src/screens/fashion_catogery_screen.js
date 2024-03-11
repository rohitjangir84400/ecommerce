import ProductsList from "../components/commen/productlist";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getproductsbycatogery } from "../actions/produt_action";

export default function Fashion() {
    const dispatch = useDispatch();
    /* get products by catogery for fashion on first render */
    useEffect(() => {
        const pcatogery = 'fashion';
        dispatch(getproductsbycatogery(pcatogery));
    }, [dispatch]);
    const data = useSelector((state) => state.products.productsdata);
    return (
        /* ui for products list  */

        <>
            <div className=" h-[40vh] px-10 py-[50px] text-[30px] text-white bg-[url('https://images.unsplash.com/photo-1511892549826-a48122d9b258?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                Fashion <span className="text-yellow-500">Category</span>
            </div>
            <ProductsList data={data} key={1}/>
        </>
    );
}