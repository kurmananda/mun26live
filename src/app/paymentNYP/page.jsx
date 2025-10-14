'use client'// src/app/countries/page.jsx
import Link from "next/link";

const payment = () => {
  return (
    <div>
      <div className="flex flex-col p-10 justify-center items-center text-white">

        <img src="payy.jpg" alt="" className="h-[50vh] w-[30vh] mx-auto rounded-xl" />
        <h1 className="text-2xl lg:text-4xl m-5 mb-0">Payment amount <hr /></h1>
        <br />
        <h1 className="font-bold text-gray-400">with accommodation</h1>
        <div className="space-y-2 py-2 border rounded-xl lg:text-2xl p-2">
          <div className="flex justify-between"><h1>Individual Delegate : <br />[1399 + 600] = 1949</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=1999'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div><hr />
          <div className="flex justify-between"><h1>Delegation : <br />[1199 + 600] = 1700</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=1700'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div><hr />
          <div className="flex justify-between"><h1>School Student : <br />[949 + 600] = 1549</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=1549'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div>
        </div>
        <br />
        <h1 className="font-bold text-gray-400">without accommodation </h1>
        <div className="space-y-2 py-2 border rounded-xl lg:text-2xl p-2">
          <div className="flex justify-between"><h1>Individual Delegate : <br />[1399 + 0] = 1399</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=1399'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div><hr />
          <div className="flex justify-between"><h1>Delegation : <br />[1199 + 0] = 1199</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=1199'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div><hr />
          <div className="flex justify-between"><h1>School Student : <br />[949 + 0] = 949</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=949'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div><hr />
          <div className="flex justify-between"><h1>IIST Member : <br />[649 + 0] = 649</h1> <Link href={'upi://pay?pn=Kurma Lohitha Krithika&pa=9100629782@ptyes&cu=INR&am=649'} className="bg-yellow-500 my-auto p-2 mx-5 rounded-xl">pay</Link></div>
        </div>
        <h1 className="text-2xl lg:text-4xl m-5">Accommodation Charges <hr />Amount : 600</h1>
        <h1 className="text-md border rounded-lg p-4 lg:text-xl m-5">Payment Cancellation Policy: <hr />
        A cancellation fee of ₹499 will be deducted from the refund amount in case of cancellation.</h1>
       
        <div className="border rounded-lg p-5 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-lg lg:text-xl m-5 text-center" >Send it here after paying, we will verify your request..!</h1>
          <Link
            href={'https://wa.link/c9gmru'}
            className="border rounded-lg px-5 py-5 m-5 bg-green-400 text-white text-lg  lg:text-2xl font-bold text-center w-[60%]"
          >Whatsapp link</Link>
        </div>
      </div>
    </div>
  )
};

export default payment;
