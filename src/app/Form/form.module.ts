import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Common_Module } from '../Common/common.module';

import { FormRoutingModule } from './form-routing.module'
import { FormComponent } from './form/form.component'

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
    Common_Module
  ],
  providers :[
  ],
  exports : [
  ]
})
export class FormModule { }
