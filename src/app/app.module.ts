import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EclipseComponent } from './components/eclipse/eclipse.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { PhotosComponent } from './components/photos/photos.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EclipseComponent,
    MenuComponent,
    HomeComponent,
    PhotosComponent,
    OurStoryComponent,
    FaqsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
