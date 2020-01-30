import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemillasComponent } from './semillas.component';

describe('SemillasComponent', () => {
  let component: SemillasComponent;
  let fixture: ComponentFixture<SemillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
