import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MapPanelComponent } from './components/map-panel/map-panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { ModalOrderComponent } from './components/modal-order/modal-order.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SliderComponent } from './components/slider/slider.component';
import { OrderPizzaService } from './services/order-pizza.service';
import { PizzaService } from './services/pizza.service';
import { ShowPizzaService } from './resolvers/show-pizza.service';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
    { path: 'home', component: MainPageComponent },
    { path: 'menu', component: MenuComponent, resolve: {
            showPizzas: ShowPizzaService}
    },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        MainPageComponent,
        SliderComponent,
        InfoPanelComponent,
        MapPanelComponent,
        OverlayComponent,
        ModalOrderComponent,
        CartComponent,
        MessageFormComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        AlertModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        CarouselModule.forRoot(),
        LeafletModule.forRoot(),
        ModalModule.forRoot()
    ],
    entryComponents: [
        ModalOrderComponent
    ],
    providers: [
        PizzaService,
        OrderPizzaService],
    bootstrap: [AppComponent]
})
export class AppModule { }
