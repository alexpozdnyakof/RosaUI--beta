export class Score {
    id: string;
    value: string;
}

export class LoanValue {
    range: string;
    collateral: string;
}
export class Scoring {
    range: string;
    collateral: string;
    type: string;
    segment: string;
    result?: number;
    date?: Date;
    margin?: number;
    note?: string;
}

export class Margin {
    value: number;
    operation: string;
}
