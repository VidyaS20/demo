import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/components/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';
import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/components/products/products.component';
import { UsersComponent } from './users/components/users/users.component';

const routes: Routes = [
  {
    path : '', component: LoginComponent
  },
  {
    path : 'home',
    loadChildren : ()=> import('./home/home.module').then(
      (module)=> module.HomeModule
    ),
    //component: HomeComponent
  },
  {
    path : 'aboutUs',
    loadChildren : ()=> import('./about-us/about-us.module').then(
      (module)=> module.AboutUsModule
    )
    // component: AboutUsComponent
  },
  {
    path: 'products',
    loadChildren : ()=> import('./products/products.module').then(
      (module)=> module.ProductsModule
    )
    // component: ProductsComponent
  },
  {
    path: 'users',
    loadChildren : ()=> import('./users/users.module').then(
      (module)=> module.UsersModule
    )
    // component: UsersComponent
  },
  {
    path: 'login',
    loadChildren : ()=> import('./login/login.module').then(
      (module)=> module.LoginModule
    )
    // component: LoginComponent
  },
  {
    path: 'contactUs',
    loadChildren : ()=> import('./contact-us/contact-us.module').then(
      (module)=> module.ContactUsModule
    )
    // component : ContactUsComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
