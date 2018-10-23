import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomaintenanceComponent } from './infomaintenance.component';

describe('InfomaintenanceComponent', () => {
  let component: InfomaintenanceComponent;
  let fixture: ComponentFixture<InfomaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
