import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPeliculaComponent } from './modal-pelicula.component';

describe('ModalPeliculaComponent', () => {
  let component: ModalPeliculaComponent;
  let fixture: ComponentFixture<ModalPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalPeliculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
