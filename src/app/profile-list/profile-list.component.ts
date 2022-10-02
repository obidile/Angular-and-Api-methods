import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from "../models/profile-model";
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { profileService } from "../services/profile.service";

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  dataList: ProfileModel[];
  constructor(private profileservice: profileService, private modelService: NgbModal) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.profileservice.getAll().subscribe((data) => {
      this.dataList = data;
      }, error => {
        console.log(error);
    });
  }

  openForm(item?: ProfileModel) {
    var modalRef = this.modelService.open(ProfileFormComponent);
    modalRef.componentInstance.formData = item;

    modalRef.result.then(result => {
      if (result) {
        this.getData();
      }
    });
  }

  deleteRow(item: ProfileModel) {
    if (item) {
      var confirm = window.confirm('Want to delete?');
      if (confirm) {
        this.profileservice.delete(item.id).subscribe(response => {
          console.log(response);
          alert('Removed successully');
        })
      }
    }
  }
}
