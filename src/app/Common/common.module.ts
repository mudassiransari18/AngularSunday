import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { NumberDirective } from './Directive/number-only.directive';

@NgModule({
  declarations: [
    FilterPipe,
    NumberDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
   FilterPipe,
   NumberDirective
  ]
})
export class Common_Module {
  static forNew() {
    return {
      ngModule: Common_Module,
      providers: [],
    };
  }
}
