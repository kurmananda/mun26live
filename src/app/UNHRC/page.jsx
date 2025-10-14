'use client'// src/app/countries/page.jsx
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Signintosee from '../components/Signintosee';

const UNHRC = () => {


  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria', 'Cambodia', 'Canada',
    'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
    'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Ethiopia', 'Fiji',
    'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Haiti', 'Hungary', 'Iceland', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
    'Kuwait', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Madagascar', 'Malaysia', 'Maldives', 'Mali', 'Mauritius', 'Mexico', 'Mongolia', 'Morocco', 'Myanmar',
    'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman',
    'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Republic of Korea',
    'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia',
    'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan',
    'Thailand', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  const countryCodeMap = {
    Afghanistan: 'af', Albania: 'al', Algeria: 'dz', Argentina: 'ar', Armenia: 'am', Australia: 'au',
    Austria: 'at', Azerbaijan: 'az', Bahrain: 'bh', Bangladesh: 'bd', Belarus: 'by', Belgium: 'be',
    Bolivia: 'bo', Brazil: 'br', Bulgaria: 'bg', Cambodia: 'kh', Canada: 'ca', Chad: 'td', Chile: 'cl',
    China: 'cn', Colombia: 'co', Congo: 'cg', Croatia: 'hr', Cuba: 'cu', Cyprus: 'cy', 'Czech Republic': 'cz',
    Denmark: 'dk', Dominica: 'dm', 'Dominican Republic': 'do', Ecuador: 'ec', Egypt: 'eg', 'El Salvador': 'sv',
    Estonia: 'ee', Ethiopia: 'et', Fiji: 'fj', Finland: 'fi', France: 'fr', Georgia: 'ge', Germany: 'de',
    Ghana: 'gh', Greece: 'gr', Haiti: 'ht', Hungary: 'hu', Iceland: 'is', India: 'in', Indonesia: 'id',
    Iran: 'ir', Iraq: 'iq', Ireland: 'ie', Israel: 'il', Italy: 'it', Japan: 'jp', Jordan: 'jo', Kazakhstan: 'kz',
    Kenya: 'ke', Kuwait: 'kw', Kyrgyzstan: 'kg', Latvia: 'lv', Lebanon: 'lb', Libya: 'ly', Liechtenstein: 'li',
    Lithuania: 'lt', Luxembourg: 'lu', Madagascar: 'mg', Malaysia: 'my', Maldives: 'mv', Mali: 'ml',
    Mauritius: 'mu', Mexico: 'mx', Mongolia: 'mn', Morocco: 'ma', 'Myanmar (Burma)': 'mm', Namibia: 'na',
    Nepal: 'np', Netherlands: 'nl', 'New Zealand': 'nz', Nicaragua: 'ni', Niger: 'ne', Nigeria: 'ng', Norway: 'no',
    Oman: 'om', Pakistan: 'pk', Panama: 'pa', Paraguay: 'py', Peru: 'pe', Philippines: 'ph', Poland: 'pl',
    Portugal: 'pt', Qatar: 'qa', 'Republic of Korea': 'kr', Romania: 'ro', Russia: 'ru', Rwanda: 'rw',
    'Saudi Arabia': 'sa', Senegal: 'sn', Singapore: 'sg', Slovakia: 'sk', Slovenia: 'si', Somalia: 'so',
    'South Africa': 'za', 'South Sudan': 'ss', Spain: 'es', 'Sri Lanka': 'lk', Sudan: 'sd', Sweden: 'se',
    Switzerland: 'ch', Syria: 'sy', Tajikistan: 'tj', Thailand: 'th', Tunisia: 'tn', Turkey: 'tr',
    Turkmenistan: 'tm', Uganda: 'ug', Ukraine: 'ua', 'United Arab Emirates': 'ae', 'United Kingdom': 'gb',
    'United States': 'us', Uruguay: 'uy', Uzbekistan: 'uz', 'Vatican City': 'va', Venezuela: 've',
    Vietnam: 'vn', Yemen: 'ye', Zambia: 'zm', Zimbabwe: 'zw'
  };

  const getCountryFlagUrl = (countryName) => {
    const countryCode = countryCodeMap[countryName] || 'unknown'; // Return 'unknown' if country is not found
    return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`; // Flag URL
  };






  const [country, setCName] = useState('');
  const comtee = 'UNHRC'
  const crtuu = async () => {

    const isConfirmedd = window.confirm('Are you sure, you want to add?');
    if (isConfirmedd) {
      // Create a new user if one doesn't already exist
      const res = await fetch("/api/country_add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country, comtee,
        }),
      });
      window.location.href = '/UNHRC';
      toast.success('country added..!');

      if (!res.ok) {
        console.log("Error creating user");
        return false;
      }


      return true; // Allow sign-in
    }

  }
  const { status, data: session } = useSession();



  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [conty, setconty] = useState('');
  const [commi, setcommi] = useState('');
  const [saatus, setSaat] = useState('');

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

    setId(resjson?.id);
    setEmail(resjson?.email);
    setName(resjson?.name);
    setRole(resjson?.role);
    setSaat(resjson?.status);
    setcommi(resjson?.comt);
    setconty(resjson?.country)
    if (resjson?.college === 'your college' || resjson?.mobile === '0000000000') {
      window.location.href = '/profile'
    }
  };
  useEffect(() => {
    if (session?.user) {
      getUdata();
    }
  }, [session?.user]);




  const [Clist, setClist] = useState([]);
  const getComitlist = async () => {

    const load1287 = toast.loading('fetching info, please wait');
    const ress = await fetch("/api/country_get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comtee: comtee }),
    });
    const ressjson = await ress.json();
    console.log(ressjson);
    setClist(ressjson);
    if (Array.isArray(ressjson) && ressjson.length > 0) {
      const sortedList = [...ressjson].sort((a, b) => a.country.localeCompare(b.country));
      setClist(sortedList);
    }


    toast.dismiss(load1287);
    toast.success('data fetched');
  };
  useEffect(() => {
    if (session?.user) {
      getComitlist();
    }
  }, [session?.user]);



  const updateContry = async (cont, sat) => {
    if (sat === 'none') {
      const isConfirmed = window.confirm('lock this country?');
      if (isConfirmed) {
        const k = toast.loading("Updating info, please wait");
        const postReqData = {
          id: id,
          country: cont,
          comtee: comtee,
          email: email,
          name: name,
          status: 'pending',
        }
        try {
          const reso = await fetch("/api/country_update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postReqData),
          });
          const resjson = await reso.json();
          if (reso.status === 200) {
            toast.dismiss(k);
          } else if (reso.status === 201) {
            toast.dismiss(k);
            toast.error("Could not update, please try again.");
          } else {
            toast.error("Something went wrong.");
          }
        } catch (error) {
          console.error("Error:", error);
        }

        const postaReqData = {
          id: id,
          country: cont,
          comt: comtee,
          status: 'pending',

        }
        try {
          const resoo = await fetch("/api/update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postaReqData),
          });
          const resoojson = await resoo.json();
          if (resoo.status === 200) {
            toast.dismiss(k);
            toast.success("Sent request");
          } else if (resoo.status === 201) {
            toast.dismiss(k);
            toast.error("Could not update, please try again.");
          } else {
            toast.error("Something went wrong.")
          }
        } catch (error) {
          console.error("Error:", error);
        }
        window.location.href = '/paymentUNHRC'
      }
      else { toast.error('no changes done'); }
    }
  }

  return (

    <div className="max-w-4xl mx-auto p-8">
      {saatus === 'success' ? <div> <label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg">SUCCESS <br /> <hr /> <br />Country : {conty}, Commitee: {commi}</label>
        <div>
          <img
            src={'UNHRC.jpg'}
            alt={'unhrc'}
            className="w-[20vh] lg:w-[30vh] mx-auto h-[20vh] object-cover object-center rounded-[40px] lg:h-[30vh] m-4 mt-0  shadow-xl shadow-black"
          />
          <h1 className='text-center text-xl p-2 mx-auto border rounded-t-xl w-1/2 lg:w-1/4 bg-gray-100 border-b-0'>Executive Board</h1>
          <div className='w-full lg:w-3/5 mx-auto border h-[20vh] rounded-xl flex justify-center bg-gray-300 backdrop-blur-4xl bg-opacity-50 items-center gap-1  shadow-xl shadow-black'>
            <div className='border px-2 lg:px-5 py-2 rounded-xl bg-white w-1/4 bg-opacity-50'>
              <img src="unhrcchair.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
              <h2 className='text-xs text-gray-400'>Chair</h2>
              <h1>VISHNU</h1>
            </div>
            <div className='border py-2 px-2 lg:px-5 rounded-xl bg-white w-1/4 bg-opacity-50'>
              <img src="unhrcvicechair.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
              <h2 className='text-xs text-gray-400'>Vice Chair</h2>
              <h1 className=''>BHARAT D</h1>
            </div>
            <div className='border py-2 px-2 lg:px-5 rounded-xl bg-white w-1/4 bg-opacity-50'>
              <img src="unhrcdirector.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
              <h2 className='text-xs text-gray-400'>Director</h2>
              <h1 className=''>Anlee </h1>
            </div>
          </div>
          <h1 className="text-sm lg:text-xl text-gray-200  text-center mb-2 mt-6">Agenda : Addressing the issue of increasing intolerance towards the LGBTQ+ community and drafting a roadmap to handle the issue.

            Discussing the effects of alarmingly increasing conflict zones across the globe on children and youth, and solutions to address said effects.</h1>
          <h1 className="text-3xl font-bold text-center">Country Matrix</h1>
          <h1 className="text-lg text-gray-500 font-bold text-center mb-2">for UNHRC</h1>
          <div className='border border-gray-600 rounded-xl m-2 mx-5 bg-gray-100 p-2 lg:mx-64  bg-gray-500 backdrop-blur-4xl bg-opacity-50'>
            <label htmlFor="name" className="block text-lg text-red-500 font-bold mb-2 text-center">Succesfully registerd : {Clist.filter(i => i.status === 'success').length}</label>
            <label htmlFor="name" className="block text-lg text-green-500 font-bold mb-2 text-center">Available countries: {Clist.filter(i => i.status === 'none').length}</label>
            <label htmlFor="name" className="block text-lg text-yellow-500 font-bold mb-2 text-center">Pending countries: {Clist.filter(i => i.status === 'pending').length}</label>
            <label htmlFor="name" className="block text-lg text-gray-400 font-bold mb-2 text-center">Total countries : {Clist.length}</label>
          </div>

          {role === 'admin' ? (
            <div className='p-10'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-bold mb-2">Add a country : </label>
                <label htmlFor="name" className="block text-sm text-gray-500 font-bold mb-2">want to delete?, dm super-admin</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setCName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <Link className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={crtuu} href='/UNHRC' > Submit </Link>
            </div>) : (

            <label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg">Only Admin can add a country</label>
          )}
          <label htmlFor="name" className="block text-xl text-gray-400 font-bold mb-2">Click on the adjacent button, to select a country</label>
          <Signintosee />
          <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1">
            {Clist.map((Clister, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-200 rounded-lg shadow p-4 border">
                <span className='flex'>
                  <img
                    className='mx-2 my-auto'
                    src={getCountryFlagUrl(Clister.country.trim())}
                    alt={Clister.country}
                    title={Clister.country}
                    style={{ width: '30px', height: '20px' }}
                  />
                  <span className="text-lg">{Clister.country}</span>
                </span>
                <Link
                  className={`px-4 py-2 font-bold text-white cursor-not-allowed pointer-events-none  rounded ${Clister.status === "none" ? "bg-gray-500" : Clister.status === "pending" ? "bg-yellow-600" : "bg-red-500"}`}
                  onClick={() => updateContry(Clister.country, Clister.status)}
                  href=""
                >
                  {Clister.name}
                </Link>
              </div>
            ))}
          </div>
        </div></div> :
        saatus === 'pending' ? <div className='flex flex-col items-center justify-center'><label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg">PENDING <br /> <hr /> <br />Country : {conty}, Commitee: {commi}</label>
          <h1>Payment under verification..! If you haven't paid yet, </h1>
          <Link
            href={'/paymentUNHRC'}
            className="border mb-10 rounded-lg px-10 py-5 text-center bg-yellow-600 text-white text-2xl font-bold p-10"
          >Pay now</Link>

          <div>
            <img
              src={'UNHRC.jpg'}
              alt={'unhrc'}
              className="w-[20vh] lg:w-[30vh] mx-auto h-[20vh] object-cover object-center rounded-[40px] lg:h-[30vh] m-4 mt-0  shadow-xl shadow-black"
            />
            <h1 className='text-center text-xl p-2 mx-auto border rounded-t-xl w-1/2 lg:w-1/4 bg-gray-100 border-b-0'>Executive Board</h1>
            <div className='w-full lg:w-3/5 mx-auto border h-[20vh] rounded-xl flex justify-center bg-gray-300 backdrop-blur-4xl bg-opacity-50 items-center gap-1  shadow-xl shadow-black'>
              <div className='border px-2 lg:px-5 py-2 rounded-xl bg-white w-1/4 bg-opacity-50'>
                <img src="unhrcchair.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
                <h2 className='text-xs text-gray-400'>Chair</h2>
                <h1>VISHNU</h1>
              </div>
              <div className='border py-2 px-2 lg:px-5 rounded-xl bg-white w-1/4 bg-opacity-50'>
                <img src="unhrcvicechair.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
                <h2 className='text-xs text-gray-400'>Vice Chair</h2>
                <h1 className=''>BHARAT D</h1>
              </div>
              <div className='border py-2 px-2 lg:px-5 rounded-xl bg-white w-1/4 bg-opacity-50'>
                <img src="unhrcdirector.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
                <h2 className='text-xs text-gray-400'>Director</h2>
                <h1 className=''>Anlee </h1>
              </div>
            </div>
            <h1 className="text-sm lg:text-xl text-gray-200  text-center mb-2 mt-6">Agenda : Addressing the issue of increasing intolerance towards the LGBTQ+ community and drafting a roadmap to handle the issue.

              Discussing the effects of alarmingly increasing conflict zones across the globe on children and youth, and solutions to address said effects.</h1>
            <h1 className="text-3xl font-bold text-center">Country Matrix</h1>
            <h1 className="text-lg text-gray-500 font-bold text-center mb-2">for UNHRC</h1>
            <div className='border border-gray-600 rounded-xl m-2 mx-5 bg-gray-100 p-2 lg:mx-64  bg-gray-500 backdrop-blur-4xl bg-opacity-50'>
              <label htmlFor="name" className="block text-lg text-red-500 font-bold mb-2 text-center">Succesfully registerd : {Clist.filter(i => i.status === 'success').length}</label>
              <label htmlFor="name" className="block text-lg text-green-500 font-bold mb-2 text-center">Available countries: {Clist.filter(i => i.status === 'none').length}</label>
              <label htmlFor="name" className="block text-lg text-yellow-500 font-bold mb-2 text-center">Pending countries: {Clist.filter(i => i.status === 'pending').length}</label>
              <label htmlFor="name" className="block text-lg text-gray-400 font-bold mb-2 text-center">Total countries : {Clist.length}</label>
            </div>

            {role === 'admin' ? (
              <div className='p-10'>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-bold mb-2">Add a country : </label>
                  <label htmlFor="name" className="block text-sm text-gray-500 font-bold mb-2">want to delete?, dm super-admin</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setCName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <Link className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={crtuu} href='/UNHRC' > Submit </Link>
              </div>) : (

              <label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg">Only Admin can add a country</label>
            )}
            <label htmlFor="name" className="block text-xl text-gray-400 font-bold mb-2">Click on the adjacent button, to select a country</label>
            <Signintosee />
            <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1">
              {Clist.map((Clister, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-200 rounded-lg shadow p-4 border">
                  <span className='flex'>
                    <img
                      className='mx-2 my-auto'
                      src={getCountryFlagUrl(Clister.country.trim())}
                      alt={Clister.country}
                      title={Clister.country}
                      style={{ width: '30px', height: '20px' }}
                    />
                    <span className="text-lg">{Clister.country}</span>
                  </span>
                  <Link
                    className={`px-4 py-2 font-bold text-white cursor-not-allowed pointer-events-none rounded ${Clister.status === "none" ? "bg-gray-500" : Clister.status === "pending" ? "bg-yellow-600" : "bg-red-500"}`}
                    onClick={() => updateContry(Clister.country, Clister.status)}
                    href=""
                  >
                    {Clister.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div> : (
          <div>
            <img
              src={'UNHRC.jpg'}
              alt={'unhrc'}
              className="w-[20vh] lg:w-[30vh] mx-auto h-[20vh] object-cover object-center rounded-[40px] lg:h-[30vh] m-4 mt-0  shadow-xl shadow-black"
            />
            <h1 className='text-center text-xl p-2 mx-auto border rounded-t-xl w-1/2 lg:w-1/4 bg-gray-100 border-b-0'>Executive Board</h1>
            <div className='w-full lg:w-3/5 mx-auto border h-[20vh] rounded-xl flex justify-center bg-gray-300 backdrop-blur-4xl bg-opacity-50 items-center gap-1  shadow-xl shadow-black'>
              <div className='border px-2 lg:px-5 py-2 rounded-xl bg-white w-1/4 bg-opacity-50'>
                <img src="unhrcchair.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
                <h2 className='text-xs text-gray-400'>Chair</h2>
                <h1>VISHNU</h1>
              </div>
              <div className='border py-2 px-2 lg:px-5 rounded-xl bg-white w-1/4 bg-opacity-50'>
                <img src="unhrcvicechair.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
                <h2 className='text-xs text-gray-400'>Vice Chair</h2>
                <h1 className=''>BHARAT D</h1>
              </div>
              <div className='border py-2 px-2 lg:px-5 rounded-xl bg-white w-1/4 bg-opacity-50'>
                <img src="unhrcdirector.png" className='h-[8vh] lg:h-[10vh] rounded-xl mx-auto' alt="" />
                <h2 className='text-xs text-gray-400'>Director</h2>
                <h1 className=''>Anlee </h1>
              </div>
            </div>
            <h1 className="text-sm lg:text-xl text-gray-200  text-center mb-2 mt-6">Agenda : Addressing the issue of increasing intolerance towards the LGBTQ+ community and drafting a roadmap to handle the issue.

              Discussing the effects of alarmingly increasing conflict zones across the globe on children and youth, and solutions to address said effects.</h1>
            <h1 className="text-3xl font-bold text-center">Country Matrix</h1>
            <h1 className="text-lg text-gray-500 font-bold text-center mb-2">for UNHRC</h1>
            <div className='border border-gray-600 rounded-xl m-2 mx-5 bg-gray-100 p-2 lg:mx-64  bg-gray-500 backdrop-blur-4xl bg-opacity-50'>
              <label htmlFor="name" className="block text-lg text-red-500 font-bold mb-2 text-center">Succesfully registerd : {Clist.filter(i => i.status === 'success').length}</label>
              <label htmlFor="name" className="block text-lg text-green-500 font-bold mb-2 text-center">Available countries: {Clist.filter(i => i.status === 'none').length}</label>
              <label htmlFor="name" className="block text-lg text-yellow-500 font-bold mb-2 text-center">Pending countries: {Clist.filter(i => i.status === 'pending').length}</label>
              <label htmlFor="name" className="block text-lg text-gray-400 font-bold mb-2 text-center">Total countries : {Clist.length}</label>
            </div>

            {role === 'admin' ? (
              <div className='p-10'>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-bold mb-2">Add a country : </label>
                  <label htmlFor="name" className="block text-sm text-gray-500 font-bold mb-2">want to delete?, dm super-admin</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setCName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <Link className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={crtuu} href='/UNHRC' > Submit </Link>
              </div>) : (

              <label htmlFor="name" className="block text-lg font-bold mb-2 text-center p-4 border-2 rounded-lg">Only Admin can add a country</label>
            )}
            <label htmlFor="name" className="block text-xl text-gray-400 font-bold mb-2">Click on the adjacent button, to select a country</label>
            <Signintosee />
            <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1">
              {Clist.map((Clister, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-200 rounded-lg shadow p-4 border">
                  <span className='flex'>
                    <img
                      className='mx-2 my-auto'
                      src={getCountryFlagUrl(Clister.country.trim())}
                      alt={Clister.country}
                      title={Clister.country}
                      style={{ width: '30px', height: '20px' }}
                    />
                    <span className="text-lg">{Clister.country}</span>
                  </span>
                  <Link
                    className={`px-4 py-2 font-bold text-white rounded ${Clister.status === "none" ? "bg-green-500" : Clister.status === "pending" ? "bg-yellow-600" : "bg-red-500"}`}
                    onClick={() => updateContry(Clister.country, Clister.status)}
                    href=""
                  >
                    {Clister.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default UNHRC;
