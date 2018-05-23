import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvalasztvairjaComponent } from './elvalasztvairja.component';

describe('ElvalasztvairjaComponent', () => {
  let component: ElvalasztvairjaComponent;
  let fixture: ComponentFixture<ElvalasztvairjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvalasztvairjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvalasztvairjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
