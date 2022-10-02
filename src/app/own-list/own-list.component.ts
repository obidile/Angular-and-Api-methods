import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwnModel } from '../models/own-model';
import { OwnFormComponent } from '../own-form/own-form.component';
import { OwnService } from '../services/own.service';

@Component({
  selector: 'app-own-list',
  templateUrl: './own-list.component.html',
  styleUrls: ['./own-list.component.scss']
})
export class OwnListComponent implements OnInit {
  ownList: OwnModel[] = [];

  constructor(private ownService: OwnService, private modelService: NgbModal) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.ownList = this.ownService.getAll();
  }

  openForm(data?: OwnModel) {
    var modalRef = this.modelService.open(OwnFormComponent);
    modalRef.componentInstance.formData = data;

    modalRef.result.then(result => {
      if (result) {
        this.getData();
      }
    })
  }

  // edit(item: any): void {
  //   this.own.UserModel({
  //     // name:this.userform.get("name")?.value,
  //     // Phone:this.userform.get("Phone")?.value
  //     lastName: item.lastName,
  //     firstName: item.lastName,
  //     emailA: item.Phone,
  //   });
  //   this.itemobj = item;
  //   this.index = this.listdata.indexOf(item);
  // }

  deleteRow(data) {
    if (data) {
      var confirm = window.confirm('Want to delete?');
      if (confirm) {
        this.ownService.delete(data);
        alert('Removed successully');
      }
    }
  }
}
