export interface ListView {
    spisok_ball: string;
    spisok_id: number;
    spisok_name: string;
    spisok_opisanie: string;
  }
  export interface ProspectView {
    name: string;
    industry: string;
    valuation: string;
    id: number;
    bank_pro: string;
    bank_payroll: string;
    activity_last: string;
    activity_date: string;
    budget_period: string;
    budget_year: string;
  }


  export interface Group {
    id: number;
    name: string;
    description?: string;
    valuation?: number;
    count: number;
  }
