import slideshow from "@/app/models/slideshow";
import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";


export async function POST(req) {
    if (req.method === "POST") {
        const { slideno, title, description, imageurl } = await req.json();


        await connectDB();
        // if (dbconn) {
        let cUser = await slideshow.findOneAndUpdate({ slideno: slideno }, { title: title, description: description, imgurl: imageurl},{new:true});
        console.log(slideno, title, description, imageurl);
        if (cUser) {
            return NextResponse.json({ msg: "country updated" }, { status: 200 });
        } else if (!cUser) {
            await slideshow.create({slideno: slideno, title: title, description : description, imgurl:imageurl});
            return NextResponse.json({ msg: "new one created" }, { status: 200 });
        }


    }
}