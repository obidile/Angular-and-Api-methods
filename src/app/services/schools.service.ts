import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
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
}