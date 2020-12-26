import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientHubComponent } from './client-hub/client-hub.component'
import { CartState } from './store/states/cart-state';
import { ClientState } from './store/states/client-state';
import { NgxsModule } from '@ngxs/store';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ClientHubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([CartState, ClientState])
  ],
  bootstrap: [AppComponent],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' }]
})
export class AppModule { }
