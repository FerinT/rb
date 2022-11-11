export interface Transaction{
  id: number;
  timestamp: string;
  amount: number
  currencyCode: string;
  currencyRate: number,
  description: string,
  otherParty: {
    name: string,
    iban: string
  }
}
