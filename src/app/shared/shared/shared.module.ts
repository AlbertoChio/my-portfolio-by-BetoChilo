import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const shared = [ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [shared],
})
export class SharedModule {}
