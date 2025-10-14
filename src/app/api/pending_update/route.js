import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";
import crntcomt from "@/app/models/countries";
import crntuser from "@/app/models/user";


export async function POST(req) {
    if (req.method === "POST") {
        const { id, status } = await req.json();


        await connectDB();
        await crntuser.findOneAndUpdate({ id: id }, { status: status });
        let cUser = await crntcomt.findOneAndUpdate({ id: id }, { status: status });
        if (status === 'none') {
            await crntcomt.findOneAndUpdate({ id: id }, { name: 'none', email: 'none', id:'0' });

            await crntuser.findOneAndUpdate({ id: id }, { country: 'none', comt: 'none', status : 'A country has not been chosen yet'});
        }
        if (cUser) {
            return NextResponse.json({ msg: "country updated" }, { status: 200 });
        } else if (!cUser) {
            return NextResponse.json({ msg: "country NOT found" }, { status: 201 });
        }

    }
}