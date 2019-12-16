import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // tslint:disable-next-line:no-shadowed-variable
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule,
        RouterModule,
        MatInputModule,
        FormsModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('connexion done', () => {
    // test init
    const username = 'Bret';
    expect(component.logged).toBeFalsy();
    expect(component.login).toBeUndefined();
    component.login = username;

    // execution de la methode test
    component.connexion();

    // wait for quequest
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username=' + component.login);
    // Response
    req.flush([{}]);
    // verif
    httpTestingController.verify();

    // test du bon deroulement de la methode
    expect(component.login).toEqual('Bret');
    expect(component.logged).toBeTruthy();
  });
});
