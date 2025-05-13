import { MongoInstance } from "@/shared/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
    const database = await MongoInstance.connect();
    const collections = await database.listCollections().toArray();
    const info = await Promise.all(
        collections.map(
            async (c) => {
                const collection = database.collection(c.name);
                const indexes = await collection.indexes();
                const documents = await collection.estimatedDocumentCount();
                return {
                    name: c.name,
                    indexCount: indexes.length,
                    docsCount: documents,
                }
            }   
    ));
    return NextResponse.json({ collections: info });
}
