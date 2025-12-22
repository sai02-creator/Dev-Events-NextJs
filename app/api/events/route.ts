import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req: NextRequest) {
    try { 
      await connectDB();

      const formData = await req.formData();

      let event;

      try {
        event = Object.fromEntries(formData.entries());
      } catch (e){

      }
    } catch(e) {
        console.error(e);
        return NextResponse.json({ message: 'Event Creation Failed', error: e  instanceof Error ? e.message : 'Unknown'})
    }
}