import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearjugadorComponent } from './crearjugador.component';

describe('CrearjugadorComponent', () => {
  let component: CrearjugadorComponent;
  let fixture: ComponentFixture<CrearjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearjugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
