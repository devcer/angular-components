import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpanOfStringsComponent } from './ngx-span-of-strings.component';



@NgModule({
  declarations: [NgxSpanOfStringsComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxSpanOfStringsComponent]
})
export class NgxSpanOfStringsModule { }
