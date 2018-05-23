import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvalasztvaIrjaComponent } from './elvalasztva-irja.component';

describe('ElvalasztvaIrjaComponent', () => {
  let component: ElvalasztvaIrjaComponent;
  let fixture: ComponentFixture<ElvalasztvaIrjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElvalasztvaIrjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElvalasztvaIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
