import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule],
})
export class MaterialModule { }