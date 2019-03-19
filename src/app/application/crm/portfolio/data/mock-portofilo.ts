import { ProspectView } from '../models/portfolio.model';


const data: any[] = [{
    'id': 200584,
    'valuation': '10',
    'name': 'ИП Закревская Лариса Васильевна',
    'industry': 'Предоставление услуг парикмахерскими и салонами красоты',
    'activity': {'last': 'Отказался от встречи', 'date': '15430301190'},
    'budget': {'period': '2017 выручка RUB', 'year': '289660000.0000'},
    'bank':  {'pro': 'ФИЛИАЛ ПАО БАНК ЮГРА В Г. САНКТ-ПЕТЕРБУРГЕ'}
    },
    {
    'id': 200585,
    'valuation': '10',
    'name': 'ИП Ермолаев Алексей Борисович',
    'industry': 'Перевозка грузов специализированными автотранспортными средствами',
    'activity': {'last': 'Отказался от встречи', 'date': '15430301190'},
    'budget': {'period': '2017 выручка RUB', 'year': '289660000.0000'},
    'bank':  {'pro': 'ФИЛИАЛ ПАО БАНК ЮГРА В Г. САНКТ-ПЕТЕРБУРГЕ'}
    },
    {
    'id': 200586,
    'valuation': '0',
    'name': 'НАДЕЖДА, БФ',
    'industry': 'Производство медицинских инструментов и оборудования',
    'activity': {'last': 'Отказался от встречи', 'date': '15430301190'},
    'budget': {'period': '2017 выручка RUB', 'year': '289660000.0000'},
    'bank':  {'pro': 'ФИЛИАЛ ПАО БАНК ЮГРА В Г. САНКТ-ПЕТЕРБУРГЕ'}
    },
    {
    'id': 200591,
    'valuation': '0',
    'name': 'ООО "КЛИМАТОК"',
    'industry': 'Ремонт машин и оборудования',
    'activity': {'last': 'Неверный номер', 'date': '15430301190'},
    'budget': {'period':  '2017 выручка RUB', 'year': '289660000.0000'},
    'bank':  {'pro': 'САНКТ-ПЕТЕРБУРГСКИЙ РФ АО РОССЕЛЬХОЗБАНК'}
    },
    {
    'id': 200596,
    'valuation': '15',
    'name': 'ООО "СОЗВЕЗДИЕ"',
    'industry': 'Деятельность рекламных агентств',
    'activity': {'last': 'Сбор пакета документов', 'date': '15430301190'},
    'budget': {'period': '2017 выручка RUB', 'year': '289660000.0000'},
    'bank':  {'pro': 'ПАО БАНК САНКТ-ПЕТЕРБУРГ'}
    },
    {
    'id': 200597,
    'valuation': '10',
    'name': 'ООО "СТРОЛЕРС"',
    'industry': 'Строительство жилых и нежилых зданий',
    'activity': {'last': 'СНеверный номер', 'date': '15430301190'},
    'budget': {'period': '2017 выручка RUB', 'year': '289660000.0000'},
    'bank':  {'pro': 'ФИЛИАЛ ПАО БАНК ЮГРА В Г. САНКТ-ПЕТЕРБУРГЕ'}
}];

function makeSeed(count: number, dataArray: any[]): any[] {
    let s = 0;
    console.log(data);
    let seeder: any[] = [];

    while (s < count) {
        seeder =  seeder.concat(dataArray);
        s++;
    }

    return seeder;
}

export const MockPortfolio: any[] = makeSeed(10, data);
