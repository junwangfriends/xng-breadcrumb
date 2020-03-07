import { Pipe, PipeTransform } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Pipe({
  name: 'paramFilter'
})
export class ParamFilterPipe implements PipeTransform {
  transform(value, allowedParams?: any): any {
    const httpParams = new HttpParams({ fromString: location.search.slice(1) });
    let queryParams = {};
    if (!allowedParams) {
      return queryParams;
    }

    if (typeof allowedParams === 'string') {
      allowedParams = [allowedParams];
    }
    allowedParams.forEach(globalParam => {
      if (httpParams.has(globalParam)) {
        queryParams[globalParam] = httpParams.get(globalParam);
      }
    });

    return queryParams;
  }
}
