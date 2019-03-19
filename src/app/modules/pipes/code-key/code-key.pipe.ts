import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeKey'
})
export class CodeKeyPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) { return null; }
    switch (value) {
      case `kpp`:
        return `КПП`;
      case `okato`:
        return `ОКАТО`;
      case `okfs`:
        return `ОКФС`;
      case `okogu`:
        return `ОКОГУ`;
      case `okopf`:
        return `ОКОПФ`;
      case `okpo`:
        return `ОКПО`;
      case `oktmo`:
        return `ОКТМО`;
      case `spark`:
        return `СПАРК`;
      default:
        return value;
    }

  }
}
