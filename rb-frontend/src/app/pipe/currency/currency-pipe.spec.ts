import {CurrencyPipe} from "./currency-pipe";

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display converted currency', () => {
    const amount = 350;
    const currencyRate = 2;

    const pipe = new CurrencyPipe();
    const result = pipe.transform(amount, currencyRate);

    expect(result).toBe(700);

  });
});
