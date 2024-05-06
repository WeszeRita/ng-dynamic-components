import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetOneComponent } from './widgets/widget-one/widget-one.component';
import { WidgetTwoComponent } from './widgets/widget-two/widget-two.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  imports: [
    BrowserModule,
    DialogModule,
  ],
  declarations: [
    AppComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    DialogExampleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
