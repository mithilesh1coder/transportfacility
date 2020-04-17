import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddrideComponent } from './components/addride/addride.component';
import { BookrideComponent } from './components/bookride/bookride.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
    path: 'addride',
    component: AddrideComponent,
},
{
  path: 'bookride',
  component: BookrideComponent,
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddrideComponent,
    BookrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
