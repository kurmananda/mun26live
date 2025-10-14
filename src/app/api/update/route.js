import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";
import crntuser from "../../models/user";
import crntcomt from "@/app/models/countries";


// export async function POST(req) {
//     if (req.method === "POST") {
//       const { id } =await req.json();
//       await connectDB();
//       const uss = await crntuser.findOne({id});
//       console.log('sldfjdsjfkl;sdjafkl');
//       console.log(id,uss);

//       return NextResponse.json(uss);

//     }
// }

export async function POST(req) {
    if (req.method === "POST") {
        const { id, name, mobile, bioo, college, status, country, comt } = await req.json();

        await connectDB();
        // if (dbconn) {
            await crntcomt.findOneAndUpdate({id: id}, {name:name});
            let cUser = await crntuser.findOneAndUpdate({ id: id }, { name: name, mobile: mobile, college: college, bioo: bioo, status:status, country:country, comt: comt });
            if (cUser) {
                return NextResponse.json({ msg: "user updated" }, { status: 200 });
            } else if(!cUser) {
                return NextResponse.json({ msg: "User NOT found" }, { status: 201 });
            }
        // } else {
        //     return NextResponse.json(
        //         { msg: "Not able to connect to database" },
        //         { status: 500 }
        //     );
        // }

    }
}