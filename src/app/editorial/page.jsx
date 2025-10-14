"use client";  // Enable client-side rendering

import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast';

export default function Home() {

    // const [file1, setfile1] = useState(null);
    // const [file2, setfile2] = useState(null);
    // const [file3, setfile3] = useState(null);
    // const [file4, setfile4] = useState(null);
    // const [file5, setfile5] = useState(null);
    // const [title1, settitle1] = useState('');
    // const [title2, settitle2] = useState('');
    // const [title3, settitle3] = useState('');
    // const [title4, settitle4] = useState('');
    // const [title5, settitle5] = useState('');
    // const [description1, setdescription1] = useState('');
    // const [description2, setdescription2] = useState('');
    // const [description3, setdescription3] = useState('');
    // const [description4, setdescription4] = useState('');
    // const [description5, setdescription5] = useState('');




    // const [slidesData, setSlidesData] = useState([]);
    // const [opens, sopen] = useState(false);
    // const sliderRef = useRef(null);


    // useEffect(() => {
    //     async function getdataa() {

    //         const taaa = toast.loading('fetching editorial data')
    //         const ress = await fetch("/api/ssget", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(),
    //         });
    //         const ressjson = await ress.json();
    //         setSlidesData(ressjson);
    //         toast.dismiss(taaa);
    //         toast.success('data fetched');
    //     }
    //     getdataa();
    // }, []);


    // const submitdata = async ({ slideno, file, title, description }) => {
    //     // const postReqData = new FormData();
    //     // postReqData.append('slideno', slideno)
    //     // postReqData.append('file', file);
    //     // postReqData.append('title', title);
    //     // postReqData.append('description', description);
    //     const taap = toast.loading('please wait, dont refresh or close')
    //     const postReqData = {
    //         imageurl: file,
    //         slideno: slideno,
    //         title: title,
    //         description: description,
    //     }

    //     const ress = await fetch('/api/ssupdate',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(postReqData),
    //         }
    //     );
    //     toast.dismiss(taap);
    //     toast.success('data fetched');
    //     sopen(false);
    //     window.location.href = '/editorial';
    // }

    // // Custom arrow components
    // const NextArrow = ({ onClick }) => {
    //     return (
    //         <button
    //             className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 bg-opacity-10 text-white shadow-lg cursor-pointer rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center"
    //             onClick={onClick}
    //             aria-label="Next"
    //         >
    //             &#x276F;
    //         </button>
    //     );
    // };

    // const PrevArrow = ({ onClick }) => {
    //     return (
    //         <button
    //             className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 bg-opacity-10 text-white shadow-lg cursor-pointer rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center"
    //             onClick={onClick}
    //             aria-label="Previous"
    //         >
    //             &#x276E;
    //         </button>
    //     );
    // };


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     swipe: true, // Enable swipe gestures
    // };


    return (
        // <div className="container mx-auto p-5">
        //     <Popup open={opens} closeOnDocumentClick={false}>
        //         <div className='w-[80vw] h-[50vh] bg-gray-500 p-5 overflow-y-scroll max-w-2xl scrollbar-cute scrollbar-cute rounded-xl'>

        //             <div className='flex flex-col space-x-6 border rounded-lg p-5 mt-5 space-y-3'>
        //                 <h1>{slidesData[0]?.slideno}:</h1>
        //                 <input type="file" onChange={(e) => setfile1(e.target.files[0])} />

        //                 <h2>url :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[0]?.imageurl}
        //                     onChange={(e) => setfile1(e.target.value)} />

        //                 <h2>title :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[0]?.title}
        //                     onChange={(e) => settitle1(e.target.value)} />
        //                 <h2>description</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[0]?.description}
        //                     onChange={(e) => setdescription1(e.target.value)} />
        //                 <button className='bg-yellow-500 border px-5 rounded-lg' onClick={() => submitdata({ slideno: `${slidesData[0]?.slideno}`, file: file1, title: title1, description: description1 })}>submit</button>
        //             </div>
        //             <div className='flex flex-col space-x-6 border rounded-lg p-5 mt-5 space-y-3'>
        //                 <h1>{slidesData[1]?.slideno}:</h1>
        //                 <input type="file" onChange={(e) => setfile2(e.target.files[0])} />

        //                 <h2>url :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[1]?.imageurl}
        //                     onChange={(e) => setfile2(e.target.value)} />


        //                 <h2>title :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[1]?.title}
        //                     onChange={(e) => settitle2(e.target.value)} />
        //                 <h2>description</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[1]?.description}
        //                     onChange={(e) => setdescription2(e.target.value)} />
        //                 <button className='bg-yellow-500 border px-5 rounded-lg' onClick={() => submitdata({ slideno: `${slidesData[1]?.slideno}`, file: file2, title: title2, description: description2 })}>submit</button>
        //             </div>
        //             <div className='flex flex-col space-x-6 border rounded-lg p-5 mt-5 space-y-3'>
        //                 <h1>{slidesData[2]?.slideno}:</h1>
        //                 <input type="file" onChange={(e) => setfile3(e.target.files[0])} />

        //                 <h2>url :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[2]?.imageurl}
        //                     onChange={(e) => setfile3(e.target.value)} />


        //                 <h2>title :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[2]?.title}
        //                     onChange={(e) => settitle3(e.target.value)} />
        //                 <h2>description</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[2]?.description}
        //                     onChange={(e) => setdescription3(e.target.value)} />
        //                 <button className='bg-yellow-500 border px-5 rounded-lg' onClick={() => submitdata({ slideno: `${slidesData[2]?.slideno}`, file: file3, title: title3, description: description3 })}>submit</button>
        //             </div>
        //             <div className='flex flex-col space-x-6 border rounded-lg p-5 mt-5 space-y-3'>
        //                 <h1>{slidesData[3]?.slideno}:</h1>
        //                 <input type="file" onChange={(e) => setfile4(e.target.files[0])} />

        //                 <h2>url :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[3]?.imageurl}
        //                     onChange={(e) => setfile4(e.target.value)} />


        //                 <h2>title :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[3]?.title}
        //                     onChange={(e) => settitle4(e.target.value)} />
        //                 <h2>description</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[3]?.description}
        //                     onChange={(e) => setdescription4(e.target.value)} />
        //                 <button className='bg-yellow-500 border px-5 rounded-lg' onClick={() => submitdata({ slideno: `${slidesData[3]?.slideno}`, file: file4, title: title4, description: description4 })}>submit</button>
        //             </div>
        //             <div className='flex flex-col space-x-6 border rounded-lg p-5 mt-5 space-y-3'>
        //                 <h1>{slidesData[4]?.slideno}:</h1>
        //                 <input type="file" onChange={(e) => setfile5(e.target.files[0])} />

        //                 <h2>url :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[4]?.imageurl}
        //                     onChange={(e) => setfile5(e.target.value)} />


        //                 <h2>title :</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[4]?.title}
        //                     onChange={(e) => settitle5(e.target.value)} />
        //                 <h2>description</h2>
        //                 <input type="text" className='border'
        //                     placeholder={slidesData[4]?.description}
        //                     onChange={(e) => setdescription5(e.target.value)} />
        //                 <button className='bg-yellow-500 border px-5 rounded-lg' onClick={() => submitdata({ slideno: `${slidesData[4]?.slideno}`, file: file5, title: title5, description: description5 })}>submit</button>
        //             </div>

        //         </div>
        //         <button onClick={() => { sopen(false) }} className='bg-yellow-500 h-10 border px-5 rounded-lg'>close</button>
        //     </Popup>
        //     <h1 className="text-4xl font-bold text-center mb-4">Editorial Page</h1>
        //     <div className="slideshow-container max-w-6xl mx-auto relative pb-5">
        //         <Slider ref={sliderRef} {...settings}>
        //             {slidesData.map((slide) => (
        //                 <div key={slide.slideno} className="relative w-[75vw] h-[30vh] lg:h-[60vh]">
        //                     <img src={slide.imgurl} alt={slide.title} className="object-center object-contain h-full w-full overflow-hidden cover" />
        //                     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white px-4 py-1 m lg:py-4">
        //                         <h3 className="text-white text-md lg:text-5xl font-bold">{slide.title}</h3>
        //                         <p className='text-white text-sm lg:text-lg'>{slide.description}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </Slider>
        //         <NextArrow onClick={() => sliderRef.current.slickNext()} />
        //         <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        //     </div>
        //     <button onClick={() => { sopen(true) }} className='bg-blue-500 p-6 rounded-lg'>change-info</button>

        // </div>
        <div className='p-10  '>
            <label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg ">WILL BE ACTIVATED <br /> <hr /> <br />ONCE THE COMPETITION STARTS</label>
            <img src="editorial/e1.jpg" alt="headlines" className='object-cover w-[100%] lg:w-[70%] mx-auto rounded-xl p-2' />            
            <img src="editorial/e2.jpg" alt="headlines" className='object-cover w-[100%] lg:w-[70%] mx-auto rounded-xl p-2' />
            <img src="editorial/e3.jpg" alt="headlines" className='object-cover w-[100%] lg:w-[70%] mx-auto rounded-xl p-2' />


        </div>
    );
}
