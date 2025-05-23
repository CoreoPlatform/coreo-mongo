import { NextResponse } from "next/server";

export function GET() {
    const dbName = process.env.MONGO_DATABASE;
    return NextResponse.json({ databaseName: dbName });
}
