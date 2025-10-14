'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import connectDB from '../lib/mongo';
import mongoose from 'mongoose';
import * as XLSX from 'xlsx';
import toast from 'react-hot-toast';
import { FaDownload } from 'react-icons/fa';
import Signintosee from '../components/Signintosee';

export default function Home() {

    const [data, setData] = useState([]);
    const [role, setRole] = useState('')

    const { status, data: session } = useSession();

    const getData = async () => {
        if (role === 'admin') {

            console.log('user getuser')

            const toa52 = toast.loading("fetching data");

            const res = await fetch("/api/findall", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const resjson = await res.json();
            const _idremoved = resjson.map(({ _id, ...rest }) => rest);
            setData(_idremoved)


            toast.dismiss(toa52);
            toast.success('data fetched', { autoClose: 2000 });
        }
    };

    useEffect(() => {
        console.log('user session?.user came')
        getData();
    }, [role]);


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
        setRole(resjson.role)

        setRole(resjson?.role);
    };
    useEffect(() => {
        if (session?.user) {
            getUdata(session?.user);
        }
    }, [session?.user]);
    const fetchData = async () => {
        try {
            await connectDB(); // Ensure database is connected
            console.log('Connected to MongoDB');

            console.log('Fetched Data:', data);

            // Return the data without the _id field
            return data.map((doc) => {
                const { _id, ...rest } = doc.toObject(); // Convert Mongoose Document to plain JavaScript object
                return rest;
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Data fetch failed');
        }
    };

    const generateExcel = (data) => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'user_data');

        const file = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

        const blob = new Blob([file], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'user_data.xlsx';
        link.click();
    };


    useEffect(() => {
        const fetchDataAndSet = async () => {
            try {
                const fetchedData = await fetchData();
                console.log('Fetched Data in useEffect:', fetchedData);
                setData(fetchedData);
            } catch (error) {
                console.error('Error in fetching data:', error);
            }
        };

        fetchDataAndSet();
    }, []);

    return (<div className="p-6  flex  items-center justify-center">
        <Signintosee />
        {role === 'admin' ?
            (<div className="bg-white bg-opacity-50  p-6 rounded-lg shadow-lg max-w-[90vw] ">
                <h1 className="text-2xl font-bold mb-6 mx-auto text-center rounded-lg border border-black bg-gray-700 text-white bg-opacity-50">You are admin</h1>
                <h1 className="text-3xl font-bold mb-6 text-center">User Data</h1>


                {/* Button to trigger Excel download */}
                <div className="text-center p-5">
                    <button
                        onClick={() => generateExcel(data)}

                        className="bg-green-500 flex mx-auto gap-5 text-black font-bold bg-opacity-80 border-black border backdrop-blur-lb px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        <FaDownload />
                        Download Excel
                    </button>
                </div>

                {/* Table to display the user data */}
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                {data.length > 0 &&
                                    Object.keys(data[0]).map((key) => (
                                        <th key={key} className="px-4 py-2 border-b">{key}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((row, index) => (
                                    <tr key={index} className="bg-white hover:bg-gray-50">
                                        {Object.values(row).map((value, i) => (
                                            <td key={i} className="px-4 py-2 border-b">{value}</td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="100%" className="text-center px-4 py-2 border-b">
                                        No data found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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
}
