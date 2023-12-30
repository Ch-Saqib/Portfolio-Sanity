import { db } from "@/app/db/drizzle"
import { Guestbook } from "@/drizzle/schema"
import { NextRequest, NextResponse } from "next/server"

import React from 'react'

export const GET =async (request:NextRequest) => {
  try{
    const result=await db.select().from(Guestbook)
    return NextResponse.json({data:result})

  }catch(error){
    console.log("Error Fetching",error)
  }
 
}

