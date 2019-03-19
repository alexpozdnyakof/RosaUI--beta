// Here models definition

export interface Calculator {
    type: | `credit` | `overdraft`;
    segment: | `micro` | `small`;
    prevScoreDate: string;
    actualScoreDate: string;
}

export interface CalculatorEntity {
    ftp: string;
    margin: string;
    deceent: string;
    result: string;
}
