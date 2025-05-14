/**
 * CoreoMongo - Open source self-hosted web-based MongoDB GUI for exploring
 * and managing your databases.
 *
 * Copyright (c) CoreoPlatform.
 *
 *
 * For full copyright and license information, please see the LICENSE.md
 *
 * @copyright       Copyright (c) CoreoPlatform.
 * @license
 * @since           1.0.0
 */

import { Db, MongoClient } from "mongodb";

/**
 *
 */
class MongoConnection {
    //
    private client: MongoClient;

    //
    private db: Db | null = null;

    //
    public databaseName: string;

    constructor(mongoUrl: string, databaseName: string) {
        this.client = new MongoClient(mongoUrl);
        this.databaseName = databaseName;
    }

    /**
     *
     * @returns
     */
    public async connect(): Promise<Db> {
        if (!this.db) {
            try {
                await this.client.connect();
                this.db = this.client.db(this.databaseName);
                return this.db;
            } catch (err: unknown) {
                throw new Error(
                    `MongoConnection was timeouted. Err: ${err as Error}`,
                );
            }
        }

        return this.db;
    }
}

//
const MongoInstance = new MongoConnection(
    process.env.MONGO_URI as string,
    process.env.MONGO_DATABASE as string,
);

/**
 *
 */
export { MongoInstance };
