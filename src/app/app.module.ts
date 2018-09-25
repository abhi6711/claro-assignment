/**
 * Import all the angular dependecies here
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/index';

/**
 * Imported all the components here
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { RouterModuleComponent } from './routing.module';
import { HomeComponent } from './component/tabs/home/home.component';
import { FavouriteComponent } from './component/tabs/favourite/favourite.component';

/**
 * Imported all the services here
 */
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    HomeComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    RouterModuleComponent,
  ],
  providers: [DataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
