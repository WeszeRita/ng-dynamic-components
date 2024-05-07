import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleComponent {

  constructor(public dialog: DialogRef, public config: DialogConfig) {}

  onClose() {
    this.dialog.close('some value');
  }
}
