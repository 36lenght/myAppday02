import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value, lang = 'zh'): unknown {
    // return value == 0 ? '男' : value == 1 ? '女' : '不详';
    if (lang == 'en') {
      return ['Female', 'Male', 'Unknown'][value];
    }
    // 数组下标
    return ['女', '男', '你猜'][value];
  }
}
