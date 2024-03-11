import ProductOverview from "../components/commen/productoverview";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getproductsbyproductid } from "../actions/produt_action";

export default function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    /* get product details by id */
    useEffect(() => {
        dispatch(getproductsbyproductid(productId));
    }, [dispatch]);
    const data = useSelector((state) => state.products.productdata);
    return (
        /* ui for product overview */
        <div>
            <ProductOverview productdata={data} />
        </div>
    );
}