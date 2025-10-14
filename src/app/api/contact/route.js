import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";
import crntuser from "../../models/user";

export async function POST(request) {





    const { id, name, email } = await request.json();
    await connectDB();
    console.log(id,name);
    await crntuser.create({id, name, email });
    return NextResponse.json({
        msg: ['cocomelonnn'], success: true,
    })
}