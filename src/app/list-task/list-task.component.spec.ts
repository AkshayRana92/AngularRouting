
import { ListTaskComponent } from './list-task.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, RouterOutletMap } from '@angular/router';
import {AppService} from "../app.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of'

describe('ListTaskComponent should', function () {
  let de: DebugElement;
  let comp: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;
  let service: AppService;

  class MockRouter {

  }

  class MockActivatedRoute {
    params = Observable.of<any>({'id':1})
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ListTaskComponent ],
        providers: [{provide: Router, useClass: MockRouter},
          {provide : ActivatedRoute, useClass: MockActivatedRoute}, AppService,
          RouterOutletMap],

        imports: [RouterModule, HttpModule]

      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppService)
  });

  it('be able to get data from service', () => {
    spyOn(service, 'getData').and.returnValue(
      Observable.of<any>(
        [{
          date: 'aa',
          title: '',
          description : '',
          priority : ''
        }]
      )
    );
    spyOn(console, 'log');
    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
    expect(comp.tasks).toEqual([{
      date: 'aa',
      title: '',
      description : '',
      priority : ''
    }])
  });

});
