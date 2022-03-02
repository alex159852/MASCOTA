import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevamascotaComponent } from './nuevamascota.component';

describe('NuevamascotaComponent', () => {
  let component: NuevamascotaComponent;
  let fixture: ComponentFixture<NuevamascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevamascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevamascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
