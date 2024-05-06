import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent implements OnChanges{
  @Input() name: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('magic')
  }
}
