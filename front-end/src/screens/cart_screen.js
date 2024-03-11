import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getcartitems, removeitemfromcart, IncreaseQuantity, DecreaseQuantity } from "../actions/cart_actions";
import EmptyCart from "../components/commen/emptycart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CartScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    let total = 0;
    const user = useSelector((state) => state.auth.userId);
    const cart = useSelector((state) => state.cart.cartitems);
    useEffect(() => {
        dispatch(getcartitems(user));
    }, [dispatch, user, load]);

    /* fuction to move to checkout steps */
    function handelclick() {
        navigate('/placeorder')
    }
    /* function to dispatch increse quantity action */
    async function handleincrese(id) {
        await dispatch(IncreaseQuantity(id));
        setLoad(!load);
    }
    /* function to dispatch decrese quantity action */
    async function handledecrese(id) {
        await dispatch(DecreaseQuantity(id));
        setLoad(!load);
    }
    /* function to dispatch remove item from cart action */
    async function removehandler(id) {
        await dispatch(removeitemfromcart(id));
        setLoad(!load);
    }
    return (
        /* ui for cart items */
        <>
            <div className=" h-[40vh] px-10 py-[50px] text-[30px] text-white bg-[url('https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-bottom">
                Your <span className="text-yellow-500">Cart</span>
            </div>
            <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                        <div className="bg-white shadow">
                            {cart.length === 0 ?
                                <EmptyCart />
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
                                                                </div>

                                                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                                    <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">Rs-{item.productDetails.price}</p>

                                                                    <div className="sm:order-1">
                                                                        <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                            <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={() => { handledecrese(item.cartItemId) }}>-</button>
                                                                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{item.quantity}</div>
                                                                            <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={() => { handleincrese(item.cartItemId) }}>+</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                                <button type="button" onClick={() => removehandler(item.cartItemId)} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                                    <FontAwesomeIcon className='h-5 w-5' icon={faXmark} style={{ color: "#000000", }} />
                                                                </button>
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
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Shipping</p>
                                            <p className="text-lg font-semibold text-gray-900">Free</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Total</p>
                                        <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">Rs</span>{total}</p>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <button type="button" onClick={handelclick} className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                            Checkout
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