import { Entity, FunctionPropertyNames } from "@subql/types";
declare type AccountProps = Omit<Account, NonNullable<FunctionPropertyNames<Account>>>;
export declare class Account implements Entity {
    constructor(id: string);
    id: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Account | undefined>;
    static create(record: AccountProps): Account;
}
export {};
