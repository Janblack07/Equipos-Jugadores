import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarjugadorComponent } from './editarjugador.component';

describe('EditarjugadorComponent', () => {
  let component: EditarjugadorComponent;
  let fixture: ComponentFixture<EditarjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarjugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
