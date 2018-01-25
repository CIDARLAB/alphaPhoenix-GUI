import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuProvider } from '../providers/menu';
import { LibraryProvider } from '../providers/library';
import { HttpProvider } from '../providers/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipsModule } from 'ionic-tooltips';
import { PerformanceProvider } from '../providers/performance';
import { StructuralProvider } from '../providers/structural';
import { OptionsProvider } from '../providers/options';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    TooltipsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuProvider,
    LibraryProvider,
    HttpProvider,
    PerformanceProvider,
    StructuralProvider,
    OptionsProvider
  ]
})
export class AppModule {}
