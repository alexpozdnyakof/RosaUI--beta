import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typograph'
})
export class TypographPipe implements PipeTransform {

  public exceptions: string[] = [`ооо`, `зао`, `пао`, `ао`, `ип`, `нко`, `ано`, `нао`, `гк`, `гкфх`, 'ук'];
  public quotes: string[] = [`'`, `"`, `«`, `»`];
  public transform(text: string, args?: any): string {
    if (!text) { return; }
    const splittedText: string[] =  this.textSplitter(text);
    const formatted = splittedText.map((item) => {
      return this.typographString(item.toLowerCase(), this.hasQuote(item));
    });
    // проверяем есть ли слово в исключениях, если да то ничего не деалем, если нет то  переводим слово в нижний регистр
    // а потом первий  символ в верхний
    // TODO смотрим наличие кавычки  " или ', если есть то определяем позицию, если в начале слова то кавычка слева если в конце то справа
    return formatted.join(`\u00A0`);
  }
  public textSplitter(textToSplit: string): string[] {
    if (textToSplit.indexOf('_') !== -1) {
      return textToSplit.split('_');
    }
    if (textToSplit.indexOf(' ') !== -1) {
      return textToSplit.split(' ');
    }
    return new Array(textToSplit);
  }

  public typographString(word: string, hasQuote: number) {
      // if 0 position - check for exception without quote if hasnt next
      //  start upper from 1 and add yolka before
      // else start upper from 0 and yolka after;
      // TODO reassemble to match case ООО "КИФ "ПИРУЗ"
      // TODO reassemble to match case ООО «Невидалия У-у» ООО «Нци»
      const laquo = '«';
      const raquo = '»';
      switch (hasQuote) {
        case -1:
          if ( this.checkException(word) !== -1 ) { return `${word.toUpperCase()}`; }
          return word.charAt(0).toUpperCase() + word.slice(1);
        case 0: {
          if ( this.checkException(word.slice(1)) !== -1 ) { return `${laquo}${word.slice(1).toUpperCase()}`; }
          return `${laquo}${word.charAt(1).toUpperCase() + word.slice(2)}`;
        }
        case -10: {
          if ( this.checkException(word.slice(1)) !== -1 ) { return `${laquo}${word.slice(1, word.length - 1).toUpperCase()}${raquo}`; }
          return `${laquo}${word.charAt(1).toUpperCase() + word.slice(2, word.length - 1)}${raquo}`;
        }
        default: {
          return `${word.charAt(0).toUpperCase() + word.slice(1, word.length - 1)}${raquo}`;
        }
      }
  }

  public hasQuote(word: string): number {
    const firstChar = this.quotes.indexOf(word.charAt(0));
    const lastChar = this.quotes.indexOf(word.charAt(word.length - 1));
    if (firstChar === -1 && lastChar === -1) { return -1; }
    if (firstChar !== -1 && lastChar !== -1) { return -10; } // if quotes in both sides
    return firstChar !== -1 ? 0 : word.length - 1;
  }

  public checkException(word: string): number {
    return this.exceptions.indexOf(word);
  }



}
