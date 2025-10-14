'use client'

import Link from "next/link";
import { FaUserCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { getSession, signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {

  const { status, data: session } = useSession();

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bioo, setBioo] = useState('');
  const [mobile, setMobile] = useState('');
  const [college, setCollege] = useState('');

  const getUdata = async () => {
    if (!session) {
      alert("You must be logged in to click a button");
      return;
    }
    const res = await fetch("/api/clicked", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session.user.email }),
    });
    const resjson = await res.json();
    console.log(resjson);

    setId(resjson.id);
    setEmail(resjson.email);
    setName(resjson.name);
    setRole(resjson.role);
    setBioo(resjson.bioo)
    setMobile(resjson.mobile);
    setCollege(resjson.college);
  };



  return (
    <nav className="bg-[#023059] text-[#F2B705] shadow-lg sticky top-0 z-10" >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center hidden lg:flex">
        <Link href='/'>
          <div className="flex items-center space-x-3 border-2 border-[#F2B705] px-5 rounded-xl"  >
            <div className="bg-white rounded-full p-2">
              <img
                src="https://th.bing.com/th?id=OSK.c5a6fc3c3538a23ea1dec6f59d199690&w=102&h=102&c=7&o=6&dpr=2&pid=SANGAM" // Replace with your logo path
                alt="IIST MUN Logo"
                className="h-8 w-8"
              />
            </div>
            <h1 className="text-xl font-bold">IIST MUN</h1>
          </div></Link>
        <div className="flex space-x-10 ">
          <Link href="/" className="bbtn text-lg lg:text-md">HOME</Link>
          <Link href="/#committee" className="bbtn text-lg lg:text-md">COMMITTEES</Link>
          <Link href="/editorial" className="bbtn text-lg lg:text-md">EDITORIAL</Link>
        </div>
        {status === 'authenticated' ? (
          <div className="flex space-x-4">
            <Link
              href="/profile"
              onClick={getUdata}
              className="flex items-center px-4 py-2 bg-[#F2B705] text-blue-800 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <FaUserCircle className="mr-2" /> Profile
            </Link>
            <Link
              href="#"
              className="flex items-center px-4 py-2 bg-red-300 text-blue-800 rounded-lg shadow hover:bg-red-600 transition "
              onClick={() => {
                const isconf = window.confirm('Are you sure you want to log out?');
                if (isconf) { signOut() }
              }}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        ) : (
          <Link
            href="#"
            className="flex items-center px-4 py-2 bg-[#F2B705] text-blue-800 rounded-lg shadow hover:bg-gray-200 transition"
            onClick={() => signIn('google')}
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
        )}



      </div>


      <div className="flex flex-col lg:hidden justify-center items-center z-10">
        <div className="container mx-auto px-2 py-4 flex justify-between items-center lg:hidden">
          <Link href='/'>
            <div className="flex items-center space-x-3 border-2 border-[#F2B705] px-3 rounded-xl"  >
              <div className="bg-white rounded-full p-2">
                <img
                  src="https://th.bing.com/th?id=OSK.c5a6fc3c3538a23ea1dec6f59d199690&w=102&h=102&c=7&o=6&dpr=2&pid=SANGAM" // Replace with your logo path
                  alt="IIST MUN Logo"
                  className="h-8 w-8"
                />
              </div>
              <h1 className="text-lg font-bold">IIST MUN</h1>
            </div></Link>

          {status === 'authenticated' ? (
            <div className="flex space-x-2">
              <Link
                href="/profile"
                onClick={getUdata}
                className="flex items-center px-3 py-2 bg-[#F2B705] text-blue-800 rounded-lg shadow hover:bg-gray-200 transition"
              >
                <FaUserCircle className="mr-2" /> Profile
              </Link>
              <Link
                href="#"
                className="flex items-center px-3 py-2 bg-red-300 text-blue-800 rounded-lg shadow hover:bg-red-600 transition "
                onClick={() => {

                  const isconf = window.confirm('Are you sure you want to log out?');
                  if (isconf) { signOut() }
                }}

              >
                <FaSignOutAlt className="mr-2" /> Logout
              </Link>
            </div>
          ) : (
            <Link
              href="#"
              className="flex items-center px-4 py-2 bg-[#F2B705] text-blue-800 rounded-lg shadow hover:bg-gray-200 transition"
              onClick={() => signIn('google')}
            >
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          )}



        </div>
        <div className="flex space-x-10 p-5 pt-2">
          <Link href="/" className="bbtn text-md lg:text-md">HOME</Link>
          <Link href="/#committee" className="bbtn text-md lg:text-md">COMMITTEES</Link>
          <Link href="/editorial" className="bbtn text-md lg:text-md">EDITORIAL</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
