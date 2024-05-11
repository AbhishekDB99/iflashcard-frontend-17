import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule
  ]
})
export class SharedModule { }
