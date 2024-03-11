import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function NoOrder() {
    const navigate = useNavigate();
    return (
        /* ui for no order placed yet */
        <div className="flex justify-center py-24">
            <div className="text-center space-y-9">
                <div className="flex justify-center">
                    <FontAwesomeIcon className=' h-20 w-20' icon={faCartShopping} />
                </div>
                <p className=" font-bold text-gray-700 text-3xl">No Order Found</p>
                <p className=" text-gray-500 text-xl ">Order something you want to buy</p>
                <button className=" bg-blue-700 py-3 text-xl px-3 text-white rounded-2xl " onClick={() => navigate('/')} >Go To Home</button>
            </div>
        </div>
    );
}
export default NoOrder;