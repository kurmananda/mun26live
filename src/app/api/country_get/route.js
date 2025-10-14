// import { getSession } from "next-auth/react";
// import crntuser from "../models/user";
// import connectDB from "../lib/mongo";
// import { useState } from "react";


// export default async function handler (req) {
//     const session = await getSession({req});
//     const {email} = req.body;
//     await connectDB();
//     console.log(crntuser.findOne({email:email}))
//     console.log('leport',session.user.email);
//     return session.user.email;
// };

import crntcomt from "@/app/models/countries";
import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
    if (req.method === "POST") {
      const { comtee } =await req.json();
      await connectDB();
      const uss = await crntcomt.find({comtee},'country name status');
      console.log(uss);

      return NextResponse.json(uss);

    }
  }
