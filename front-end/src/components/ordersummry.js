import { useSelector, useDispatch } from "react-redux";
import { placeneworder } from "../actions/order_actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Placeorder(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let total = 0;
    const user = useSelector((state) => state.auth.userId);
    const cart = useSelector((state) => state.cart.cartitems);

    /* function to dispatch an action to place order */

    function handleplaceorder() {
        const user_Id = user;
        const totalAmount = total;
        const shippingAddress = props.deliveryaddress;
        const paymentMethod = props.payment;
        const products = cart.map((item => {
            return ({
                product_Id: item.productDetails._id,
                quantity: item.quantity,
                price: item.productDetails.price
            })
        }));
        const data = { user_Id, products, totalAmount, shippingAddress, paymentMethod };
        dispatch(placeneworder(data));
        alert('Order Placed');
        navigate('/userprofile');
    }

    return (
        /* ui for showing the order summery before placeing the order */
        <>
            <div className=" h-[40vh] px-10 py-[50px] text-[30px] text-white bg-[url('https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-bottom">
                Order <span className="text-yellow-500">Summery</span>
            </div>
            <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                        <div className="bg-white shadow">
                            {cart.length === 0 ?
                                <div className="text-center py-5">No Product Found</div>
                                :
                                <div className="px-4 py-6 sm:px-8 sm:py-10">
                                    <div className="flow-root">
                                        <ul className="-my-8">
                                            {cart.map((item) => {
                                                total += item.productDetails.price * item.quantity;
                                                return (
                                                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0" key={item.cartItemId}>
                                                        <div className="shrink-0">
                                                            <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={item.productDetails.imageUrl} alt="product image" />
                                                        </div>

                                                        <div className="relative flex flex-1 flex-col justify-between">
                                                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                                <div className="pr-8 sm:pr-5">
                                                                    <p className="text-base font-semibold text-gray-900">{item.productDetails.name}</p>
                                                                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">catogery - {item.productDetails.catogery}</p>
                                                                    <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">Discription - {item.productDetails.description}</p>
                                                                </div>

                                                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                    <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">Rs-{item.productDetails.price}</p>

                                                                    <div className="sm:order-1">
                                                                        <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity}</div>                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );

                                            })}

                                        </ul>
                                    </div>
                                    <div className="mt-6 border-t border-b py-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Subtotal</p>
                                            <p className="text-lg font-semibold text-gray-900">Rs-{total}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm text-gray-400">Shipping Address</p>
                                            <p className="text-lg font-semibold text-gray-900">{props.deliveryaddress}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm text-gray-400">Payment Method</p>
                                            <p className="text-lg font-semibold text-gray-900">{props.payment}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Total</p>
                                        <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">Rs</span>{total}</p>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <button type="button" onClick={handleplaceorder} className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                            Place Order
                                            <FontAwesomeIcon className='ml-2 h-6 w-6' icon={faArrowRight} style={{ color: "#ffffff", }} />
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}