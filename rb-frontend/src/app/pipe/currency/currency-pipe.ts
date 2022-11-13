import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'currencyConvert'})
export class CurrencyPipe implements PipeTransform {

  transform(amount: any, currencyRate: any): any {
    if(currencyRate !== '') {
      return amount * currencyRate;
    }
    return amount;
  }
}
