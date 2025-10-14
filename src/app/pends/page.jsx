'use client'
// components/ItemList.jsx
import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import Signintosee from '../components/Signintosee';




const pends = () => {


    const { status, data: session } = useSession();



    const [role, setRole] = useState('');

    const getUdata = async () => {

        const res = await fetch("/api/clicked", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: session?.user?.email }),
        });
        const resjson = await res.json();
        console.log(resjson);

        setRole(resjson?.role);
    };
    useEffect(() => {
        if (session?.user) {
            getUdata(session?.user);
        }
    }, [session?.user]);




    const [Clist, setClist] = useState([]);
    const [CSlist, setCSlist] = useState([]);

    const getComitlist = async () => {

        const ress = await fetch("/api/pending", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 'pending' }),
        });
        const ressjson = await ress.json();
        console.log(ressjson);
        setClist(ressjson);
    };
    useEffect(() => {
        if (session?.user) {
            getComitlist();
        }
    }, [session?.user]);


    const getsuss = async () => {

        const ressoo = await fetch("/api/pending", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 'success' }),
        });
        const ressoojson = await ressoo.json();
        console.log(ressoojson);
        setCSlist(ressoojson);
    };
    useEffect(() => {
        if (session?.user) {
            getsuss();
        }
    }, [session?.user]);


    const updateStatus = async (id, sat) => {
        const isConfirmed = window.confirm('Confirm?');
        if (isConfirmed) {
            const k = toast.loading("Updating info, please wait");
            const postReqData = {
                id: id,
                status: sat,
            }
            setClist(Clist.filter(Clister => Clister.id !== id));
            try {
                const reso = await fetch("/api/pending_update", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postReqData),
                });
                const resjson = await reso.json();
                if (reso.status === 200) {
                    toast.dismiss(k);
                    if(sat==='none'){toast.success("Kicked out");}
                    if(sat==='success'){toast.success("Accepted")}
                } else if (reso.status === 201) {
                    toast.dismiss(k);
                    toast.error("Could not update, please try again.");
                } else {
                    toast.error("Something went wrong.");
                }
            } catch (error) {
                console.error("Error:", error);
            }

        }
        else{toast.error('no changes done');}
    }

    return (

        <div className="p-6 bg-gray-100 flex  items-center justify-center">
            <Signintosee />
            {role === 'admin' ?
                (<div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-6">You are admin</h1>
                    <div className="max-w-lg mx-auto p-4">
                        <h2 className="text-sm font-bold mb-4 text-gray-500">You can either kick out or allow users here</h2>
                        <div className="list-none">
                            {Clist.map((Clister, index) => (
                                <div key={index} className="flex justify-between items-center mb-2 p-2 border rounded-lg flex-col space-y-6">
                                    <span className='text-center'>{Clister.name} --- {Clister.email} <br /> {Clister.comtee} [{Clister.country}]</span>
                                    <div className="flex space-x-5">
                                        <button onClick={() => updateStatus(Clister.id, 'success')} className="bg-green-500 text-white rounded-lg p-8 flex items-center ">
                                            <FaCheck /> Accept
                                        </button>
                                        <button onClick={() => updateStatus(Clister.id, 'none')} className="bg-red-500 text-white rounded-lg p-8 flex items-center ">
                                            <FaTimes /> Kickout
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="list-none border-2 rounded-lg">
                            <h2 className="text-sm font-semibold flex items-center text-gray-400 lg:text-xl md:text-lg ">
                                Success list :
                            </h2>
                            {CSlist.map((CSlister, index) => (
                                <div key={index} className="flex justify-between items-center mb-2 p-2  rounded-lg flex-col space-y-6">
                                    <h2 className="text-sm font-semibold flex items-center text-gray-400 lg:text-xl md:text-sm border-b-2 rounded-b-lg px-2 shadow-lg">
                                        {CSlister.name} -- {CSlister.email} <br />
                                        {CSlister.comtee} -- [{CSlister.country}]
                                        
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)
                : <div className="list-none border-2 rounded-lg">
                    <h2 className="text-sm font-semibold flex items-center text-gray-400 lg:text-xl md:text-lg ">
                        Bro, you aren't admin, but how do you know abt this page????
                    </h2>
                </div>
            }
        </div>
    );
};

export default pends;
