import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacionesboComponent } from './reclamacionesbo.component';

describe('ReclamacionesboComponent', () => {
  let component: ReclamacionesboComponent;
  let fixture: ComponentFixture<ReclamacionesboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacionesboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacionesboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
