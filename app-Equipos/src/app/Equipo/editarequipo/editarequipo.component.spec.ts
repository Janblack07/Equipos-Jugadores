import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarequipoComponent } from './editarequipo.component';

describe('EditarequipoComponent', () => {
  let component: EditarequipoComponent;
  let fixture: ComponentFixture<EditarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarequipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
