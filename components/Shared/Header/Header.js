import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <nav className='bg-black py-5 text-xl text-white'>
            <ul className='container mx-auto flex gap-4 cursor-pointer'>
                <Link href={"http://localhost:3000/"} passHref={true}>
                    <li className='hover:text-bold hover:text-red-500'>Home</li>
                </Link>

                <Link href={"http://localhost:3000/app/users"} passHref={true}>
                    <li className='hover:text-bold hover:text-red-500'>Users</li>
                </Link>

                <li className='hover:text-bold hover:text-red-500'>Posts</li>
            </ul>
        </nav>
    );
};

export default Header;