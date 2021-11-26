import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength: number): any {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.slice(0, maxLength) + " ...";
    }
  }
}
