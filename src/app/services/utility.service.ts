import { Injectable } from '@angular/core';
@Injectable()
export class UtilityService {
  constructor() { }

  Remove(arr, data, index) {
    arr.forEach(element => {
      if (element._id === data._id) {
        arr.splice(index, 1);
        return element._id === data._id;
      }
    });
  }
}
