import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {Intern} from "./intern";
import {AppService} from "./app.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent{

  constructor(private router: Router) {

  }

  goToCreateTask() {
    this.router.navigate(['create'])
  }

  goToListTasks() {
    this.router.navigate(['list'])
  }

}
