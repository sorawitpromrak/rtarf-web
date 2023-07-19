import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component'; 
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FeaturesComponent } from './components/common/features/features.component'; 
import { CategoriesComponent } from './components/common/categories/categories.component';
import { CoursesComponent } from './components/common/courses/courses.component'; 
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component'; 
import { TopHeaderComponent } from './components/common/top-header/top-header.component'; 
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';  
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogWidgetComponent } from './components/common/blog-widget/blog-widget.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent, 
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
        NgxScrollTopModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }