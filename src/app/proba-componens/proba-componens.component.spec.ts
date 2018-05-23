import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbaComponensComponent } from './proba-componens.component';

describe('ProbaComponensComponent', () => {
  let component: ProbaComponensComponent;
  let fixture: ComponentFixture<ProbaComponensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbaComponensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbaComponensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
