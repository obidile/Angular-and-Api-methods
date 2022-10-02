import { UserModel } from "../models/user-model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    data: UserModel[] = [
        {
            id: 1,
            firstName: 'Reuben',
            lastName: 'keye',
            emailAddress: 'test@mail.com',
            phoneNumber: '09089898989',
            gender: 'Male',
            dateOfBirth: new Date(),
            isActive: true
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            emailAddress: 'john@mail.com',
            phoneNumber: '08023498989',
            gender: 'Male',
            dateOfBirth: new Date(),
            isActive: false
        },
        {
            id: 3,
            firstName: 'Mary',
            lastName: 'Doe',
            emailAddress: 'mary@gmail.com',
            phoneNumber: '07081212121',
            gender: 'Female',
            dateOfBirth: new Date(),
            isActive: true
        }
    ];

    constructor(private http: HttpClient) { }

    create(model: UserModel) {
        // this.http.post('', model);
        this.data.push(model);
    }

    edit(model: UserModel) {
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

    delete(model: UserModel) {
        var index = this.data.indexOf(model);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
}