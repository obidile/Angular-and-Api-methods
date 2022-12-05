import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchoolModel } from '../models/school-model';
import { SchoolsServices } from '../services/schools.service';

@Component({
  selector: 'app-schools-api',
  templateUrl: './schools-api.component.html',
  styleUrls: ['./schools-api.component.scss']
})
export class SchoolsApiComponent implements OnInit {
  data: SchoolModel[];

  constructor(private schoolsService: SchoolsServices, private modelService: NgbModal) { }

  ngOnInit(): void {
    this.schoolsService.getSchool().subscribe((data) => {
      this.data = data;
    });
    
  }

}