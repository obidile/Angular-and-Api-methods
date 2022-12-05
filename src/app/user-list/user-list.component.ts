import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../models/user-model';
import { UserService } from '../services/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: UserModel[] = [];
  allList: UserModel[] = [];
  search: string;

  constructor(private userService: UserService, private modelService: NgbModal) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userList = this.userService.getAll();
    this.allList = this.userList;
  }

  filter($event) {
    var $value = $event.target.value; // this.search?.toLowerCase();
    if ($value && $value != '') {
      this.userList = this.allList.filter(x => x.firstName.toLowerCase().includes($value) || x.lastName.toLowerCase().includes($value) || x.emailAddress.toLowerCase().includes($value) || x.phoneNumber.toLowerCase() == $value || x.gender.toLowerCase() == $value) || [];
    } else {
      this.userList = this.allList;
    }
  }

  openForm(item?: UserModel) {
    var modalRef = this.modelService.open(UserFormComponent);
    modalRef.componentInstance.formData = item;

    modalRef.result.then(result => {
      if (result) {
        this.getData();
      }
    })
  }

  deleteRow(item) {
    if (item) {
      var confirm = window.confirm('Want to delete?');
      if (confirm) {
        this.userService.delete(item);
        alert('Removed successully');
      }
    }
  }

}
