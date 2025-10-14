'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaUserCircle, FaEnvelope, FaPencilAlt } from 'react-icons/fa';
import Link from "next/link";
import { toast } from "react-hot-toast";
import Signintosee from "../components/Signintosee";

const profile = () => {
    const { status, data: session } = useSession();


    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [bioo, setBioo] = useState('');
    const [mobile, setMobile] = useState('');
    const [college, setCollege] = useState('');
    const [country, setCountry] = useState('');
    const [comtee, setComtee] = useState('');
    const [statuss, setStatus] = useState('');

    const getUdata = async () => {

        const toa52 = toast.loading("fetching data");

        const res = await fetch("/api/clicked", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: session?.user?.email }),
        });
        const resjson = await res.json();
        console.log(resjson);

        setId(resjson?.id);
        setEmail(resjson?.email);
        setName(resjson?.name);
        setRole(resjson?.role);
        setBioo(resjson?.bioo)
        setMobile(resjson?.mobile);
        setCollege(resjson?.college);
        setCountry(resjson?.country)
        setComtee(resjson?.comt);
        setStatus(resjson?.status);
        toast.dismiss(toa52);

        if (resjson?.college === 'your college' || resjson?.mobile === '0000000000') {
            toast.error("Change your college/school name and phone number to continue");
        }
        else { toast.success('data fetched', { autoClose: 2000 }); }
    };

    useEffect(() => {
        if (session?.user) {
            getUdata(session?.user);
        }
    }, [session?.user]);


    if (status === 'authenticated' && id !== '') {
        return (
            <div className="max-w-[90%] lg:max-w-2xl mx-auto p-6 border rounded-lg shadow-md m-8  bg-gray-400 bg-opacity-50 backdrop-blur-4xl">

                <Signintosee />
                <div className="flex space-x-2 justify-center items-center">
                    <div className="border border-[#F2B705] rounded-lg flex justify-center items-center px-5 py-2 gap-4 bg-[#F2B705] bg-opacity-20 ">
                        <FaUserCircle className=" h-10 w-10 text-gray-500" />
                        <h1 className="text-2xl font-bold text-center lg:text-4xl text-gray-600">Your Profile</h1>
                    </div>
                    <Link className="bg-green-300 text-black rounded-lg hover:bg-red-300 flex gap-1 justify-center items-center p-2 px-5 text-center m-5" href='/editt' >
                        <FaPencilAlt />
                        edit </Link>
                </div>

                <div className="flex flex-col items-center  gap-x-5 mx-auto p-6 pb-0">
                    <div className=" flex flex-col justify-center items-center">
                        <div className="border flex  flex-col  p-5 rounded-xl border-black mb-0 bg-gray-600 bg-opacity-50 backdrop-blur-4xl">
                            <Image src={session?.user?.image} width={150} height={150} alt="google profile pic" className="mx-auto rounded-full p-5" />

                            <h2 className="text-sm font-semibold flex items-center lg:text-xl md:text-sm w-full text-white">
                                <FaUserCircle className="mr-2" />
                                {name}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-400 lg:text-xl md:text-sm">
                                <FaEnvelope className="mr-2" />
                                {email}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-400 lg:text-xl md:text-sm">
                                ID : {id}
                            </h2>
                        </div>
                        <div className="p-5 w-[70%] ">
                            <h2 className="text-sm font-semibold flex items-center text-gray-700 lg:text-xl md:text-sm">
                                Mobile : {mobile}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-700 lg:text-xl md:text-sm">
                                College : {college}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-700 lg:text-xl md:text-sm">
                                Role : {role}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-700 lg:text-xl md:text-sm">
                                Country : {country}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-700 lg:text-xl md:text-sm">
                                Committee : {comtee}
                            </h2>
                            <h2 className="text-sm font-semibold flex items-center text-gray-700 lg:text-xl md:text-sm">
                                Status : {statuss}
                            </h2>
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 text-center border text-lg rounded-lg border-gray-300 w-[80%] mx-auto p-4">Bio : {bioo}</p>

            </div>

        )
    }
    return (
        <Signintosee />
    )

}
export default profile
