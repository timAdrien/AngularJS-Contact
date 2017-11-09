import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajContactComponent } from './maj-contact.component';

describe('MajContactComponent', () => {
  let component: MajContactComponent;
  let fixture: ComponentFixture<MajContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
