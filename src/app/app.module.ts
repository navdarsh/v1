import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { HeaderComponent } from './header/header.component';
import { CirclesComponent } from './circles/circles.component';
import { SimulationContactComponent } from './simulation-contact/simulation-contact.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { DownloadOptionsComponent } from './download-options/download-options.component';
import { PaymentComponent } from './payment/payment.component';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { CustomersReviewComponent } from './customers-review/customers-review.component';
import { ParallaxDownloadComponent } from './parallax-download/parallax-download.component';
import { PromotionalComponent } from './promotional/promotional.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CoverPageComponent,
    HeaderComponent,
    CirclesComponent,
    SimulationContactComponent,
    HeroComponentComponent,
    DownloadOptionsComponent,
    PaymentComponent,
    CommonQuestionsComponent,
    CustomersReviewComponent,
    ParallaxDownloadComponent,
    PromotionalComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
