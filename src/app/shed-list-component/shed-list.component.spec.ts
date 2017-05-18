import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedListComponent } from './shed-list.component';

describe('ShedListComponent', () => {
  let component: ShedListComponent;
  let fixture: ComponentFixture<ShedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
