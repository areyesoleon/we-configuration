import { MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule,MatTableModule, MatPaginatorModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule,MatTableModule, MatPaginatorModule],
  exports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule,MatTableModule, MatPaginatorModule],
})
export class MaterialModule { }