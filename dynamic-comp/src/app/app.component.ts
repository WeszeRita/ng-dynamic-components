import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetOneComponent } from './widgets/widget-one/widget-one.component';
import { WidgetTwoComponent } from './widgets/widget-two/widget-two.component';
import { DialogService } from './dialog/dialog.service';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

const componentConfig = [
  {
    component: () => import('../app/widgets/widget-one/widget-one.component').then( it => it.WidgetOneComponent),  // promise!
    inputs: {
      name: 'from config - 1'
    }
  },
  {
    component: () => import('../app/widgets/widget-two/widget-two.component').then( it => it.WidgetTwoComponent),
    inputs: {
      name: 'from config - 2'
    }
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;   // ViewContainerRef is used for the directive to gain access to the view container that will have the dynamically added component.

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public dialog: DialogService) {}

  createCompBasedOnConfig() {
    this.container.clear();
    componentConfig.forEach(async compConfig => {
      const componentInstance = await compConfig.component();
      const componentRef = this.container.createComponent(componentInstance);

      Object.entries(compConfig.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      })
    })

    // Deprecated way:
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WidgetTwoComponent);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.name = 'componentFactoryResolver - Deprecated';
  }

  createContainer() {
    this.container.clear();
    const widgetOneRef = this.container.createComponent(WidgetOneComponent);   // createComponent: Instantiates a single component and inserts its host view into this container.
    widgetOneRef.setInput('name', 'Zorro');

    const widgetTwoRef = this.container.createComponent(WidgetTwoComponent);
    widgetTwoRef.setInput('name', 'Tornado')
  }

  openTestModal() {
    this.dialog.open(DialogExampleComponent);
  }
}
