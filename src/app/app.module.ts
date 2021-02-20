import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { AboutComponent } from './components/About/about.component';
import { ContactComponent } from './components/Contact/contact.component';
import { ProductsComponent } from './components/Products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/Products/product.component';


const MYROUTE: Routes = [
  { path: '',
   component: HomeComponent },

  { path: 'about',
   component: AboutComponent },

  { path: 'contact',
   component: ContactComponent },

  {
    path: 'products',
    component: ProductsComponent,
    children:[
      { path: 'product/:id',
      component: ProductComponent
     }
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    NavbarComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule,RouterModule.forRoot(MYROUTE)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
