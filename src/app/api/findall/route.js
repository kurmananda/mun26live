

import connectDB from "../../lib/mongo";
import crntuser from "../../models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
    if (req.method === "GET") {
      await connectDB();
      console.log('vaccha')
      const uss = await crntuser.find();
      console.log(uss);

      return NextResponse.json(uss);

    }
  }
