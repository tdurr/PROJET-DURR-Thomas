import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientHubComponent } from './client-hub/client-hub.component'
import { CartState } from './modules/product-catalog/states/cart-state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ClientHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CartState])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
