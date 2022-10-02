import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileModel } from '../models/profile-model';
import { profileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-datail',
  templateUrl: './profile-datail.component.html',
  styleUrls: ['./profile-datail.component.scss']
})
export class ProfileDatailComponent implements OnInit {
  id: string;
  data: ProfileModel;

  constructor(private activatedRoute: ActivatedRoute, private profileService: profileService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];
      if (this.id) {
        this.getData();
      }
    });
  }

  getData() {
    this.profileService.getById(this.id).subscribe((data) => {
      this.data = data;
      }, error => {
        console.log(error);
    });
  }
}
