import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faAward, faTicket, faCreditCard } from '@fortawesome/free-solid-svg-icons';
export default function Features() {
    return (
        /* our features ui design */
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Features</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <FontAwesomeIcon className='h-7 w-7' icon={faTruck} style={{ color: "#ffffff", }} />
                                </div>
                                FREE DELIVERY
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <FontAwesomeIcon className='h-7 w-7' icon={faAward} style={{ color: "#ffffff", }} />

                                </div>
                                QUALITY GUARANTEE
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <FontAwesomeIcon className='h-7 w-7' icon={faTicket} style={{ color: "#ffffff", }} />

                                </div>
                                DAILY OFFERS
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <FontAwesomeIcon className='h-7 w-7' icon={faCreditCard} style={{ color: "#ffffff", }} />
                                </div>
                                100% SECURE PAYMENT
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    );
}