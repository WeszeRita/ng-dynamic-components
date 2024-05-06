import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetOneComponent } from './widgets/widget-one/widget-one.component';
import { WidgetTwoComponent } from './widgets/widget-two/widget-two.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
