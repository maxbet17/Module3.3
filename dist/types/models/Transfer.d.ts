import { Entity, FunctionPropertyNames } from "@subql/types";
declare type TransferProps = Omit<Transfer, NonNullable<FunctionPropertyNames<Transfer>>>;
export declare class Transfer implements Entity {
    constructor(id: string);
    id: string;
    amount?: bigint;
    blockNumber?: bigint;
    toId: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Transfer | undefined>;
    static getByToId(toId: string): Promise<Transfer[] | undefined>;
    static create(record: TransferProps): Transfer;
}
export {};
