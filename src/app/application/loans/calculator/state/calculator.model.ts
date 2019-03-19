// Here models definition
import { ID, guid } from '@datorama/akita';

export interface CalculatorConfig {
    type: | `credit` | `overdraft`;
    segment: | `micro` | `small`;
    collateral: Array<String>;
    amount: Array<String>;
}


export interface Calculator {
    id: ID;
    ftp: string;
    gross: string;
    decent: string;
    result: string;
}

export function createCalculator(data): Calculator {
    return {
      id: guid(),
      ftp: data.ftp,
      gross: data.gross,
      decent: data.decent,
      result: data.result
    };
}
