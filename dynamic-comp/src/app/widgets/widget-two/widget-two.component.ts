import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent {
  @Input() name: string;
}
