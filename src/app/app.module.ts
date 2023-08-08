import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FeaturesComponent } from './components/common/features/features.component'; 
import { CategoriesComponent } from './components/common/categories/categories.component';
import { CoursesComponent } from './components/common/courses/courses.component'; 
import { HomeoneBannerComponent } from './components/pages/home-intro/homeone-banner/homeone-banner.component'; 
import { TopHeaderComponent } from './components/common/top-header/top-header.component'; 
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';  
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogWidgetComponent } from './components/common/blog-widget/blog-widget.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { CommanderPageComponent } from './components/pages/commander-page/commander-page.component';
import { AgencyPageComponent } from './components/pages/agency-page/agency-page.component';
import { HomeIntroComponent } from './components/pages/home-intro/home-intro.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@NgModule({
    declarations: [
        AppComponent, 
        HomeIntroComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        BlogComponent,
        PartnerComponent,
        FeaturesComponent, 
        CategoriesComponent,
        CoursesComponent,
        HomeoneBannerComponent, 
        TopHeaderComponent, 
        ContactPageComponent,
        AboutPageComponent,
        CommanderPageComponent,
        AgencyPageComponent,
        FaqPageComponent,  
        BlogRightSidebarPageComponent,
        BlogDetailsPageComponent,
        BlogWidgetComponent, 
        DashboardComponent, 
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxScrollTopModule, 
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }