import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'currencyConvert'})
export class CurrencyPipe implements PipeTransform {
  constructor() {}

  transform(value: number, Input: string, Output: string): number {
    // let inputRate = this.currencyStorage.getCurrencyRate(cnput);
    // let outputputRate = this.currencyStorage.getCurrencyRate(Output);
    // return value/ inputRate * outputputRate;
    return 1;
  }
}
