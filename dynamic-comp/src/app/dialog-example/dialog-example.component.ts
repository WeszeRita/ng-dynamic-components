import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleComponent {

  constructor(public dialog: DialogService) {}

  onClose() {
    this.dialog.removeDialogComponentFromBody();
  }
}
