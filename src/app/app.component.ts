import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'a-project';
  mallam = false;
  aboki() {
    this.mallam = !this.mallam;
  }
  newUser = new FormControl({
    user: new FormControl('', [Validators.required, Validators.email]),
  })
  userEntry() {
    console.warn(this.newUser.value);
  }

}
