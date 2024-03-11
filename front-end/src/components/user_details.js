
function UserDetails({ user }) {
    return (
        /* ui to show user details  */
        <div className="flex justify-center py-10">
            <div className="m-10 max-w-sm">
                <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
                    <div className="relative mx-auto w-36 rounded-full">
                        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                        <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">{user.Fullname}</h1>
                    <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                        <li className="py-3 text-sm">
                            <div className="flex flex-col gap-y-4">
                                <div>User Name</div>
                                <div><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{user.Username}</span></div>
                            </div>
                        </li>
                        <li className="py-3 text-sm">
                            <div className="flex flex-col gap-y-4">
                                <div>User Email</div>
                                <div><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">{user.Email}</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;