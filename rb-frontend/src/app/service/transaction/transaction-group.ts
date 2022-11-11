import {Transaction} from "./transaction";

export interface TransactionGroup{
  days: [
    {
      id: string,
      transactions: Transaction[]
    }
    ]
}
