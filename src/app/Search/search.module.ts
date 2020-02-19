import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { Common_Module } from '../Common/common.module';

import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    Common_Module.forNew(),
    FormsModule
  ],
  providers :[
  ],
  exports : [
    
  ]
})
export class SearchModule { }
