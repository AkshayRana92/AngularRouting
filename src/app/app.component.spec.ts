/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router, RouterOutletMap } from '@angular/router';
import {AppService} from "./app.service";

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  class MockRouter {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ AppComponent ],
        providers: [{provide: Router, useClass: MockRouter},
          RouterOutletMap,
          AppService
        ],
        imports: [RouterModule]

      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );

});
