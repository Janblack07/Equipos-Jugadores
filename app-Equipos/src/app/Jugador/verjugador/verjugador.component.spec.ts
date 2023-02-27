import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerjugadorComponent } from './verjugador.component';

describe('VerjugadorComponent', () => {
  let component: VerjugadorComponent;
  let fixture: ComponentFixture<VerjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerjugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
