import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mapPathToMenuName'
})
export class MapPathToMenuNamePipe implements PipeTransform {

  transform(path: string, mapObject: { [key: string]: string }): string {
    return mapObject[path]
  }

}
