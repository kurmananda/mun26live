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

import connectDB from "../../lib/mongo";
import crntuser from "../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    if (req.method === "POST") {
      const { email } =await req.json();
      await connectDB();
      const uss = await crntuser.findOne({email});
      console.log(uss);

      return NextResponse.json(uss);

    }
  }
