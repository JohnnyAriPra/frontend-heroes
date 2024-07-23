import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorService } from '../../../services/actor.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actor } from '../../../interfaces/actor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-modal-actor',
  templateUrl: './modal-actor.component.html',
  styleUrl: './modal-actor.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalActorComponent {
  actorForm!: FormGroup;
  accionTitle: string = 'Agregar';
  accionButton: string = 'Guardar';

  constructor(private _formBuilder: FormBuilder, private _actorService: ActorService,
    private modalActual: MatDialogRef<ModalActorComponent>, private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public actordata: Actor,
  ){
    if(this.actordata != null){
      this.accionTitle = 'Editar';
      this.accionButton = 'Actualizar';
    }
  }

  ngOnInit(): void {
    this.actorForm = this.initForm();
    if(this.actordata != null){
      this.setDatos();
    }
  }
  
  initForm(): FormGroup{
    return this._formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(255)]],
      nombre: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      bio: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
      img: ['', [Validators.required]],
      aparicion: [''],
      casa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]]      
    });
  }
  
  setDatos(){
    // Convertir las fechas a formato Date
    const fechaAparicion = new Date(this.actordata.aparicion);

    this.actorForm.patchValue({
      id: this.actordata.id,
      nombre: this.actordata.nombre,
      bio: this.actordata.bio,
      img: this.actordata.img,
      aparicion: fechaAparicion,
      casa: this.actordata.casa,
    });
  }

  guardarActor(){

    const _actor: Actor = {
      id: this.actordata == null ? this.actorForm.value.id : this.actordata.id ,
      nombre: this.actorForm.value.nombre,
      bio: this.actorForm.value.bio,
      img: this.actorForm.value.img,
      aparicion: this.actorForm.value.aparicion,
      casa: this.actorForm.value.casa
    }
    if(this.actordata == null){
      this._actorService.createActor(_actor).subscribe({
        next: () =>{
          this._snackBar.open('Heroe registrado con éxito', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          this.modalActual.close("true");
        },
        error: () => {
          this._snackBar.open('Error al registrar el heroe', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });      
        }
      });
    }else{
      this._actorService.updateActor(_actor.id, _actor).subscribe({
        next: () =>{
          this._snackBar.open('Heroe actualizado con éxito', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          this.modalActual.close("true");
        },
        error: () => {
          this._snackBar.open('Error al actualizar el heroe', '', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });      
        }
      });
    }
  }
}