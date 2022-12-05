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
            firstName: 'john',
            lastName: 'doe',
            emailAddress: 'johndoe@mail.com',
            phoneNumber: '09010101010',
            gender: 'Male',
            dateOfBirth: new Date(),
            isActive: true
        },
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