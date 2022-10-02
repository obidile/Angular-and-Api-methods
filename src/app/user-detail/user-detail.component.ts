import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  id: number;
  user: UserModel;
  private routeSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
      this.getData();
    });
  }

  getData() {
    this.user = this.userService.getById(this.id);
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
