import { useEffect, useState } from "react";
import { getorders, canceluserorder } from "../actions/order_actions";
import { UserAllDetails } from "../actions/auth_actions";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "../components/user_details";
import UserOrder from "../components/user_order";

function UserProfile() {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('account');
    const [load, setLoad] = useState(false);
    const user = useSelector((state) => state.auth.userId);
    /* get user order and user details on first render */
    useEffect(() => {
        dispatch(getorders(user));
        dispatch(UserAllDetails(user));
    }, [dispatch, user, load]);
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const orders = useSelector((state) => state.orders.orderitems);
    const userdetail = useSelector((state) => state.auth.user);
    /* function to cancle order */
    async function handlecancel(id) {
        await dispatch(canceluserorder(id));
        setLoad(!load);
    }
    /* ui for user profile */
    return (
        <div className="py-10">
            <div className="max-w-screen-md mx-auto">
                <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">
                    <nav className="flex flex-wrap gap-4">
                        <button onClick={() => handleTabChange('account')} className={activeTab === 'account' ? 'whitespace-nowrap inline-flex rounded-lg bg-gray-200 py-2 px-3 text-sm font-medium text-gray-900 transition-all duration-200 ease-in-out' : 'whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900'}> Account </button>
                        <button onClick={() => handleTabChange('userorder')} className={activeTab === 'userorder' ? 'whitespace-nowrap inline-flex rounded-lg bg-gray-200 py-2 px-3 text-sm font-medium text-gray-900 transition-all duration-200 ease-in-out' : 'whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900'}> Your Orders </button>
                    </nav>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto h-[100vh] overflow-y-scroll">
                {activeTab === 'account' && (
                    /* passing data to components */
                    <UserDetails user={userdetail} />
                )}

                {activeTab === 'userorder' && (
                    /* passing data to components */
                    <UserOrder orderdetails={orders} cancelorder={handlecancel} />
                )}
            </div>
        </div>
    );
}

export default UserProfile;