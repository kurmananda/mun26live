import connectDB from "../../lib/mongo";
import { NextResponse } from "next/server";
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
        const { country, comtee, email, name, status, id} = await req.json();


        await connectDB();
        // if (dbconn) {
            let cUser = await crntcomt.findOneAndUpdate({ country:country, comtee:comtee }, { email:email, name: name, status: status, id : id});
            if (cUser) {
                return NextResponse.json({ msg: "country updated" }, { status: 200 });
            } else if(!cUser) {
                return NextResponse.json({ msg: "country NOT found" }, { status: 201 });
            }
        // } else {
        //     return NextResponse.json(
        //         { msg: "Not able to connect to database" },
        //         { status: 500 }
        //     );
        // }

    }
}