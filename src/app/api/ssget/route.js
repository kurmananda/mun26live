import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";
import slideshow from "@/app/models/slideshow";


export async function GET(req) {
    if (req.method === "GET") {
        await connectDB();
        let cUser = await slideshow.find({});
        
        if (cUser) {
            return NextResponse.json(cUser);
        } else if (!cUser) {
            return NextResponse.json({msg:'data not fetched'});
        }

    }
}