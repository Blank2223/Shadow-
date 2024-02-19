import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import {
    LocationStrategy,
    HashLocationStrategy,
    APP_BASE_HREF
} from '@angular/common';

import { AppComponent } from "./app.component";
import { ArticleComponent } from './learningCurve/article/article.component';
import { SearchComponent } from './morecomplexRouting/search/search.component';
import { AlbumsComponent } from './morecomplexRouting/albums/albums.component';
import { TracksComponent } from './morecomplexRouting/tracks/tracks.component';
import { AUTH_PROVIDERS } from './morecomplexRouting/Auth.service';
import { LoggedInGuard } from './morecomplexRouting/logged-in.guard';
import { AboutComponent } from './routing/about/about.component';
import { HomeComponent } from './routing/home/home.component';
import { ContactComponent } from './routing/contact/contact.component';
import { LoginComponent } from './morecomplexRouting/login/login.component';
import { ProtectedComponent } from './morecomplexRouting/protected/protected.component';
import { ProductComponent } from './morecomplexRouting/product/product.component';
import { ProductModule } from './morecomplexRouting/product/product.module';



const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'contactus', redirectTo: 'contact'},

    {path: 'login', component: LoginComponent},
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [LoggedInGuard]
    },

    {
        path: 'product',
        component: ProductComponent,
        loadChildren: () => import('./morecomplexRouting/product/product.module').then(m => m.ProductModule)     
    }

];


@NgModule ({
    declarations: [
        AppComponent,
        ArticleComponent,
        SearchComponent,
        AlbumsComponent,
        TracksComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClient,
        FormsModule,
        ProductModule
    ],
    providers: [
        {provide: HashLocationStrategy, useClass: HashLocationStrategy},
        AUTH_PROVIDERS,
        LoggedInGuard
    ],
    bootstrap: [AppComponent]
})



export class AppModule{}