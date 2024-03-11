import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping  , faBars , faXmark} from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profiledropdown, setProfileDropdown] = useState(false);
    const [menu, setMenu] = useState(false);
    const user = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart.cartitems);

    async function handlelogout() {
        await dispatch(logout());
        setProfileDropdown(!profiledropdown);
        navigate('/');
    }

    function handleprofilelinkclick(desti) {
        navigate(`${desti}`);
        setProfileDropdown(!profiledropdown);
    }
    function handlemenulinkclick(desti) {
        navigate(`${desti}`);
        setMenu(!menu);
    }

    return (
        <nav className="bg-gray-800 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" onClick={() => setMenu(!menu)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {! menu ? <FontAwesomeIcon className="h-6 w-6" icon={faBars} style={{color: "#ffffff",}} />:<FontAwesomeIcon className="h-6 w-6" icon={faXmark} style={{color: "#ffffff",}} />}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <div className='flex gap-1 items-center'>
                                <div className=' font-medium text-xl text-white '><span className=' text-yellow-500'>F</span>ashion</div>
                                <div>
                                    <FontAwesomeIcon className='h-6 w-6' icon={faBagShopping} beatFade style={{ color: "#ffffff", }} />
                                </div>
                                <div className=' font-medium text-xl text-white '><span className=' text-yellow-500'>H</span>ub</div>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <Link to={'/'} className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                                <Link to={'/catogery/fashion'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Fashion</Link>
                                <Link to={'/catogery/sports'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sports</Link>
                                <Link to={'/catogery/electronics'} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Electronics</Link>


                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {user.isAuthenticated ?
                            <Link className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to={'/cart'} >
                                {cart.length === 0 ? <FontAwesomeIcon className='h-7 w-7' icon={faCartShopping} /> : <FontAwesomeIcon className='h-7 w-7' icon={faCartShopping} beat />}
                            </Link> : ""
                        }

                        {/* <!-- Profile dropdown --> */}
                        {user.isAuthenticated ?
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" onClick={() => setProfileDropdown(!profiledropdown)} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                                    </button>
                                </div>

                                {/* <!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                                {profiledropdown ?
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                        <button onClick={() => handleprofilelinkclick('/userprofile')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</button>
                                        <button onClick={handlelogout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Sign out</button>
                                    </div> : ''
                                }
                            </div> : <Link className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to={'/login'} >Sign in</Link>
                        }
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            {
                menu ?
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <button onClick={() => handlemenulinkclick('/')} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</button>
                            <button onClick={() => handlemenulinkclick('/catogery/fashion')} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Fashion</button>
                            <button onClick={() => handlemenulinkclick('/catogery/sports')} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sports</button>
                            <button onClick={() => handlemenulinkclick('/catogery/electronics')} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Electronics</button>
                        </div>
                    </div> : ''
            }
        </nav>

    );
}

export default Navbar;