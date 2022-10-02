import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ProfileModel } from '../models/profile-model';
import { SchoolModel } from "../models/school-model";

@Injectable({
    providedIn: 'root'
})
export class SchoolsServices {
    data: SchoolModel[] = []

    constructor(private http: HttpClient) { }
    getSchool() {
        let url = 'http://universities.hipolabs.com/search?country=nigeria';
        return this.http.get<SchoolModel[]>(url)
    }
    getApi(){
        let data ='https://6218012f1a1ba20cba968c17.mockapi.io/api/v1/users';
        return this.http.get<ProfileModel[]>(data);
    }
}