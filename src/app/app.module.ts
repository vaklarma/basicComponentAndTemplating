import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EventComponent} from './event/event.component';
import { AlmaComponent } from './alma/alma.component';
import {FormsModule} from '@angular/forms';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { ProbaComponensComponent } from './proba-componens/proba-componens.component';
import { ElvalasztvairjaComponent } from './elvalasztvairja/elvalasztvairja.component';
import { ElvalasztvaIrjaComponent } from './elvalasztva-irja/elvalasztva-irja.component';
import { ListdemoComponent } from './listdemo/listdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlmaComponent,
    EventComponent,
    ListDemoComponent,
    ProbaComponensComponent,
    ElvalasztvairjaComponent,
    ElvalasztvaIrjaComponent,
    ListdemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
