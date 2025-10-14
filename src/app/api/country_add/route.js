import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";
import crntcomt from "@/app/models/countries";

export async function POST(request) {





    const { country, comtee } = await request.json();
    await connectDB();
    const userExists = await crntcomt.findOne({ country, comtee });
    console.log(country, comtee);

    if (!userExists) {
        console.log('howrahh train');
        await crntcomt.create({ country:country, comtee:comtee });
        return NextResponse.json({
            msg: ['country-comelonnn'], success: true,
        })
    }
}