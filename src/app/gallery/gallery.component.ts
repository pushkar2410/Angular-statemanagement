import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { retriveGalleryList } from "../store/gallery.action";
import { albumCollectionById, uniqueAlbumId } from "../store/gallery.selector";
import { GalleryModel } from "./gallery.model";
import { GalleryService } from "./gallery.service";

@Component(
    {
        templateUrl:'./gallery.component.html',
        selector:"gallery",
    }
)
export class GalleryComponent implements OnInit {
    
    selectedAlbumId = -1;
    albumIds$ = this.store.pipe(select(uniqueAlbumId));
    allGallery$ = this.store.pipe(
        select(albumCollectionById(this.selectedAlbumId))
    );
   
    constructor(
        private store: Store<{gallery: GalleryModel[]}>,
        private galleryService: GalleryService
    ){}
    
    ngOnInit(): void {
        this.galleryService.loadGallery().subscribe((gallery) =>{
            console.log(gallery);
            this.store.dispatch(
                retriveGalleryList({allGallery: gallery as GalleryModel[]})
            )
        })
    }

    albumChange(event: number){
        this.allGallery$ = this.store.pipe(select(albumCollectionById(event)));
    }
}