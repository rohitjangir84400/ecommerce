import { Link } from "react-router-dom";

function ShopByCatogery() {
    /* ui for shop by catogery section */
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Shop By Catogery</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <Link className="mt-6 text-sm text-gray-500" to={'/catogery/fashion'}>
                                    <span className="absolute inset-0"></span>
                                    Fashion
                                </Link>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Latest Fashion Products</p>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnR8ZW58MHx8MHx8fDA%3D" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center" />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <Link className="mt-6 text-sm text-gray-500" to={'/catogery/sports'}>
                                    <span className="absolute inset-0"></span>
                                    Sports
                                </Link>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Latest Sports Products</p>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3MlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
                            </div>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <Link className="mt-6 text-sm text-gray-500" to={'/catogery/electronics'}>
                                    <span className="absolute inset-0"></span>
                                    Electronics
                                </Link>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Latest Tech Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopByCatogery;