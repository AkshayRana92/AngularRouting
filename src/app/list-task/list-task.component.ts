import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'list-task.component.html',
  styleUrls: ['']
})
export class ListTaskComponent implements OnInit{
  tasks: Task[];
  constructor(private router: Router,
              private service: AppService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    //
    //this.route.params.subscribe(data => {
    //  console.log(JSON.stringify(data))
    //}, error => {
    //  alert(error)
    //})

    this.service.getData().subscribe(data => {
      this.tasks = data;
      console.log(JSON.stringify(data))
    }, error => {
      alert(error)
    })
  }

}
