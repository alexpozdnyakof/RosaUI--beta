export class RowTable {
    range: string;
    rates: {
        rub: string;
        usd: string;
        eur: string;
    };
    risk: {
        rub: string;
        usd: string;
        eur: string;
    };
  constructor(
    range: string,
    ratesRub: string,
    ratesUsd: string,
    ratesEur: string,
    rub: string,
    usd: string,
    eur: string,
  ) {
  this.range = range;
  this.rates = {
   rub: `${ratesRub}`,
   usd: `${ratesUsd}`,
   eur: `${ratesEur}`
  };
  this.risk = {
   rub: `${rub}`,
   usd: `${usd}`,
   eur: `${eur}`
  };
  }
}
