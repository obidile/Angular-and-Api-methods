import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ModuleKind } from 'typescript';
import { ProfileModel } from '../models/profile-model';

@Injectable({
    providedIn: 'root'
})
export class profileService {
    url: string = 'https://6218012f1a1ba20cba968c17.mockapi.io/api/v1/users';

    constructor(private http: HttpClient) { }

    create(model: ProfileModel) {
        // var body = JSON.stringify(model);
        return this.http.post<ProfileModel[]>(this.url, ModuleKind);
    }

    edit(id: string, model: ProfileModel) {
        var body = JSON.stringify(model);
        return this.http.put<ProfileModel>(`${this.url}/${id}`, model);
    }

    getAll() {
        return this.http.get<ProfileModel[]>(this.url);
    }

    getById(id: string) {
        var result = this.http.get<ProfileModel>(`${this.url}/${id}`);
        return result;
    }

    delete(id: string) {
        return this.http.delete<ProfileModel>(`${this.url}/${id}`);
    }
}