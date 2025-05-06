import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RegistryComponent } from './components/registry/registry.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { BigDayComponent } from './components/big-day/big-day.component';
import { TravelComponent } from './components/travel/travel.component';
import { PasswordComponent } from './components/password/password.component';
import { ContainerComponent } from './components/container/container.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { TabComponent } from './components/wedding-party/tabs/tab.component';
import { TabsComponent } from './components/wedding-party/tabs/tabs.component';
import { UpdatesComponent } from './components/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    EclipseComponent,
    MenuComponent,
    HomeComponent,
    PhotosComponent,
    OurStoryComponent,
    FaqsComponent,
    ScheduleComponent,
    RsvpComponent,
    RegistryComponent,
    CountdownComponent,
    BigDayComponent,
    TravelComponent,
    PasswordComponent,
    ContainerComponent,
    CarouselComponent,
    WeddingPartyComponent,
    TabComponent,
    TabsComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    LazyLoadImageModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [ AuthService, AuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
