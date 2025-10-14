
import crntcomt from "@/app/models/countries";
import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
    if (req.method === "POST") {
      const {status} =await req.json();
      await connectDB();
      const uss = await crntcomt.find({status:status},'id email name country comtee');
      console.log(uss);

      return NextResponse.json(uss);

    }
  }