import { ID } from '@datorama/akita';



export interface CalculateResult {
    // stateId: ID;
    id: ID;
    ftp: string;
    gross: string;
    decent: string;
    result: string;
    type: string;
    note: string;
    managername: string;
}

let _id = 0;

export function createCalculateResult(params?: Partial<CalculateResult>): Partial<CalculateResult> {
  return {
    //...{stateId: ++_id},
    ...params
  } as CalculateResult;
}


export function resetId(count?: number) {
  _id = count || 0;
}




