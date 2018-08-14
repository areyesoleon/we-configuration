import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ConfigurationModule } from './configuration/configuration.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    ConfigurationModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
