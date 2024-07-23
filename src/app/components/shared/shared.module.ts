import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Components
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCardModule    
  ],
  exports:[
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCardModule 
  ]
})
export class SharedModule { }
