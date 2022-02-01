import { createSelector } from "@ngrx/store";
import { GalleryModel } from "../gallery/gallery.model";
import { AppState } from "./app.store";
import { galleryReducer } from "./gallery.reducer";

export const gallerySelector = (state:AppState) =>state.gallery;

export const uniqueAlbumId = createSelector(
    gallerySelector,
    (gallery: GalleryModel[])=>{
        return [...new Set(gallery.map((_) => _.albumId))]
    }
);

export const albumCollectionById = (albumId: number) => createSelector(
    gallerySelector,
    (gallery:GalleryModel[])=>{
        if(albumId==-1){
            return gallery;
        }
        return gallery.filter(_ => _.albumId == albumId);
    }
)