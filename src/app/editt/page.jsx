'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaUserCircle, FaEnvelope } from 'react-icons/fa';
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-hot-toast";


const editt = () => {

    const { status, data: session } = useSession();
    const updateuserInfo = async () => {
        const k = toast.loading("Updating info, please wait");
        const postReqData = {
            id: id,
            name: name,
            mobile: mobile,
            bioo: bioo,
            college: college,
        }
        try {
            const reso = await fetch("/api/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postReqData),
            });
            const resjson = await reso.json();
            if (reso.status === 200) {
                toast.dismiss(k);
                toast.success("Details updated.")
            } else if (reso.status === 201) {
                toast.dismiss(k);
                toast.error("Could not update, please try again.");
            } else {
                toast.error("Something went wrong.")
            }
        } catch (error) {
            console.error("Error:", error);
        }
        window.location.href = '/profile';
    }

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [bioo, setBioo] = useState('');
    const [mobile, setMobile] = useState('');
    const [college, setCollege] = useState('');

    const [nn, snn] = useState('');
    const [bb, sbb] = useState('');
    const [mm, smm] = useState('');
    const [cc, scc] = useState('');



    const getUdata = async () => {
        console.log('lksdjf')
        const res = await fetch("/api/clicked", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: session?.user?.email }),
        });
        const resjson = await res.json();

        setId(resjson?.id);
        setEmail(resjson?.email);
        setName(resjson?.name);
        setRole(resjson?.role);
        setBioo(resjson?.bioo)
        setMobile(resjson?.mobile);
        setCollege(resjson?.college);
        snn(resjson?.name);
        smm(resjson?.mobile);
        sbb(resjson?.bioo);
        scc(resjson?.college);
    };

    useEffect(() => {
        if (session?.user) {
            getUdata();
        }
    }, [session?.user]);



    return (
        <div className="max-w-lg mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-bold mb-2">Mobile</label>
                <input
                    type="number"
                    id="name"
                    name="name"
                    onPaste={(e) => {
                        if (e.target.value.length>10) {e.target.value = e.target.value.slice(0,10)}
                        if(parseInt(e.target.value)>9999999999){e.target.value=0}
                        setMobile(e.target.value)}}
                    onInput={(e) => {
                        if (e.target.value.length>10) {e.target.value = e.target.value.slice(0,10)}
                        if(parseInt(e.target.value)>9999999999){e.target.value=0}
                        setMobile(e.target.value)
                    }}
                    placeholder={mobile}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-bold mb-2">College</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder={college}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="bio" className="block text-lg font-bold mb-2">Bio</label>
                <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    onChange={(e) => setBioo(e.target.value)}
                    value={bioo}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <Link className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={updateuserInfo} href='#' > Submit </Link>
            <h2 className="text-sm font-semibold flex items-center text-gray-400 lg:text-lg md:text-xsm p-8">
                Previous Name : {nn} <br />  Previous Mobile : {mm} <br /> Previous Mobile : {cc} <br /> Previous Bio : {bb}
            </h2>
        </div>

    )


}
export default editt
