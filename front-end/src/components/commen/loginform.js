import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/auth_actions";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
function LoginForm() {
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Auth = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (Auth) {
            alert('Login Success');
            navigate('/');
        }
    }, [dispatch, Auth, load]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        /* dispatch action when user click login */
        await dispatch(login(userData));
        setLoad(!load);
    }

    return (
        /* Login form UI */
        <div className="flex h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex flex-shrink-0 items-center justify-center">
                <div className='flex gap-1 items-center bg-gray-800 px-10 py-4'>
                    <div className=' font-medium text-xl text-white '><span className=' text-yellow-500'>F</span>ashion</div>
                    <div>
                        <FontAwesomeIcon className='h-6 w-6' icon={faBagShopping} style={{ color: "#ffffff", }} />
                    </div>
                    <div className=' font-medium text-xl text-white '><span className=' text-yellow-500'>H</span>ub</div>
                </div>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handlelogin}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    <Link to={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Not a member?
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;