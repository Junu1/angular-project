import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    ContactusComponent,
    EventbindingComponent,
    StylebindingComponent,
    TwowaybindingComponent,
    StructuralDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
