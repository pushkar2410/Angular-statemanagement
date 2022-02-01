import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryModel } from './gallery/gallery.model';
import { galleryReducer } from './store/gallery.reducer';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { gallerySelector } from './store/gallery.selector';
import { GalleryService } from './gallery/gallery.service';

@NgModule({
  declarations: [
    AppComponent, GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({gallery:galleryReducer})
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
