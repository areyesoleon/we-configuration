import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule],
  exports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule],
})
export class MaterialModule { }