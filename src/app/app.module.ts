import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ScratchModule} from "src/workshop/scratch/scratch.component";

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		ScratchModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
