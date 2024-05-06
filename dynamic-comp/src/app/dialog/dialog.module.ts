import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { InsertionDirective } from './insertion.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DialogComponent,
    InsertionDirective,
  ],
  bootstrap: [DialogComponent],
})
export class DialogModule { }
