import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'query'
})
export class QueryPipe implements PipeTransform {

  transform(input: [], query?: String): any {
    if (query) {
      let result = []
      for (let i in input) {
        let item: {} = input[i]
        if ((item['title'] && item['title'].indexOf(query) >= 0) || (item['description'] && item['description'].indexOf(query) >= 0)) result.push(input[i])
      }
      return result
    } else return input;
  }

}
