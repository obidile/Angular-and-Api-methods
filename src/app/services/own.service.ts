// import { UserModel } from "../models/user-model";
import { OwnModel } from "../models/own-model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OwnService {
  data: OwnModel[] = [
    {
      id: 1,
      firstName: 'chibuike',
      lastName: 'obidile',
      emailAddress: 'samuelchibuike51@gmail.com',
      country: 'Nigeria',
      state: 'Lagos',
      branch: 'ojodu',
      // gender: 'male',
    }
  ];

  constructor(private http: HttpClient) { }

  create(model: OwnModel) {
    // this.http.post('', model);
    this.data.push(model);
  }

  edit(model: OwnModel) {
    var index = this.data.findIndex(x => x.id == model.id);
    if (index > -1) {
      this.data.splice(index, 1, model);
    }
  }

  getAll() {
    return this.data;
  }

  getById(id: number) {
    var result = this.data.find(x => x.id == id);
    return result;
  }

  delete(model: OwnModel) {
    var index = this.data.indexOf(model);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }
}