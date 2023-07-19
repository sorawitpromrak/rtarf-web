import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component'; 
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';  
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';
import { AnnouncementComponent } from './components/dashboard/announcement/announcement.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index', component: HomeDemoOneComponent},
    {path: 'page/:pagename', component: DetailPageComponent},
    {
        path: 'service',
        component: DashboardComponent,
        children: [
            { path: 'list/:servicename/:serviceshow', component: AnnouncementComponent }, 
        ]
    },
    {path: 'contact', component: ContactPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'about/:aboutname', component: AboutPageComponent},
    {path: 'news/:category/:page/:categoryname', component: BlogRightSidebarPageComponent},
    {path: 'news-details/:id/:name', component: BlogDetailsPageComponent},
   
    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }