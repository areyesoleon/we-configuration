import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './services.index';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[CompanyService],
  declarations: [],
  exports:[]
})
export class ServicesModule { }
