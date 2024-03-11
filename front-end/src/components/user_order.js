import NoOrder from "./no_order";


function UserOrder({ orderdetails, cancelorder }) {
    /* funnction to handle cancel order */
    function handlecancelorder(id) {
        cancelorder(id);
    }
    return (
        <div>
            {orderdetails.length === 0 ?
                /* if no order found render this component */
                <NoOrder />
                :
                <div>
                    {orderdetails.map((item) => (
                        <div className="m-5" key={item.orderId}>
                            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2"><div>Order-Id #<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> {item.orderId} </span> </div></div>
                            {item.products.map((pro) => (
                                <div className="group mx-2 mt-10 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
                                    <a href="#" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                                        <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                            <img src={pro.imageUrl} alt="" className="h-full w-full object-cover text-gray-700" />
                                        </div>
                                    </a>
                                    <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
                                        <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> {pro.name} </a>
                                        <p className="overflow-hidden pr-7 text-sm">Product Price: Rs-{pro.price}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                <div>Payment Method:<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> {item.paymentMethod} </span></div>
                                <div>Payment Status:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900"> {item.paymentStatus} </span></div>
                                <div>Total Amount:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900"> Rs-{item.totalAmount} </span></div>
                            </div>
                            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                <div>Shipping Address:<br /><br /><span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900"> {item.shippingAddress} </span></div>
                            </div>
                            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                <div>Shipping Status:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900"> {item.Shippingstatus} </span></div>
                            </div>
                            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                <button className=" text-red-700 underline" onClick={() => handlecancelorder(item.orderId)}>Cancel Order</button>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
}

export default UserOrder;