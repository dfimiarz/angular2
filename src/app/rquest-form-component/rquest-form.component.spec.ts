import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RquestFormComponent } from './rquest-form.component';

describe('RquestFormComponent', () => {
  let component: RquestFormComponent;
  let fixture: ComponentFixture<RquestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RquestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RquestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
