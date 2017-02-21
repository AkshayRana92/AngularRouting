import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
  selector: 'login',
  templateUrl: './app/list-task/list-task.component.html',
  styleUrls: ['']
})
export class ListTaskComponent implements OnInit{
  tasks: Task[];
  constructor(private router: Router,
              private service: AppService) {}

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.tasks = [{date:'asas', title:'asas', description:'', priority:''}];
      alert(JSON.stringify(this.tasks[0]))

    }, error => {
      alert(error)
    })
  }

}
