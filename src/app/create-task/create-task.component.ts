import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";


@Component({
  selector: 'home',
  templateUrl: './app/create-task/create-task.component.html',
  styleUrls: ['']
})
export class CreateTaskComponent {
  task: Task = new Task();
  constructor(private router: Router, private service: AppService) {}

  submit() {
    this.service.addTask(this.task).subscribe(data => {
      alert('Record Added');
      this.router.navigate(['list']);
    }, err => {
      alert(err)
    })
  }

}
