import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  imports: [SharedLibComponent, OtherComponent],
  exports: [SharedLibComponent, OtherComponent]
})
export class SharedLibModule { }
