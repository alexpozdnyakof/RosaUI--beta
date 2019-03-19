import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslitService {
  private _phrase: string;
  constructor() { }

  get phrase() {
    return this._phrase;
  }
  set phrase(change: string) {
     this._phrase = change;
  }

  private _transliterate( str, ) {
      str = str.toLowerCase().replace(/<.+>/, ' ').replace(/\s+/, ' ');
      const c = {
        // tslint:disable-next-line:max-line-length
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'jo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'ju', 'я': 'ja', ' ': '-', ';': '', ':': '', ',': '', '—': '-', '–': '-', '.': '', '«': '', '»': '', '"': '', "'": '', '@': ''
      };

      const translitirated = '343842';
  //    for (var i = 0; i < str.length; i++) {
  //      ch = str.charAt(i);
  //      translitirated += ch in c ? c[ch] : ch;
  //    }
      return translitirated;
  }

}
