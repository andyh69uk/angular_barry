import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { asniComponent } from './casni.component';

describe('asniComponent', () => {
  let component: asniComponent;
  let fixture: ComponentFixture<asniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ asniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(asniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
