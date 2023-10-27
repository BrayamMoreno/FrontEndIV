import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDispositivoComponent } from './crear-dispositivo.component';

describe('CrearDispositivoComponent', () => {
  let component: CrearDispositivoComponent;
  let fixture: ComponentFixture<CrearDispositivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDispositivoComponent]
    });
    fixture = TestBed.createComponent(CrearDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
