import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../actions/cart_actions";
import { useNavigate } from "react-router-dom";
function ProductOverview(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const data = props.productdata;
    /* function to dispatch an action to add product to cart */
    function addtobag(productid) {
        if (user.isAuthenticated) {
            const info = {
                user_Id: user.userId,
                product_Id: productid
            }
            dispatch(addtocart(info));
            navigate('/cart')
        } else {
            alert('login to add produt to cart');
        }
    }
    return (
        /* ui to show product details */
        <div className="bg-white">
            <div className="pt-6">
                {/* <!-- Image gallery --> */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl  lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-1 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src={data.imageUrl} alt="product image" className="h-[50%] w-full object-cover object-center" />
                    </div>
                </div>

                {/* <!-- Product info --> */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.name}</h1>
                    </div>
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">Rs-{data.price}</p>
                        <button type="submit" onClick={() => addtobag(data._id)} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* <!-- Description and details --> */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{data.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    <li className="text-gray-400"><span className="text-gray-600">In stock - {data.countInStock}</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Catogery - {data.catogery}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductOverview;