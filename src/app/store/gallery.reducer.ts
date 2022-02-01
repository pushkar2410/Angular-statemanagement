import { createReducer, on } from "@ngrx/store";
import { GalleryModel } from "../gallery/gallery.model";
import { retriveGalleryList } from "./gallery.action";

export const initialState: ReadonlyArray<GalleryModel> = [];

const _galleryReducer = createReducer(
    initialState,
    on(retriveGalleryList, (state,{allGallery}) => {
        return [...allGallery];
    })
);

export function galleryReducer(state: any, action:any){
    return _galleryReducer(state, action);
}