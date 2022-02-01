import { createAction, props } from "@ngrx/store";
import { GalleryModel } from "../gallery/gallery.model";

export const retriveGalleryList = createAction(
    "[Gallery API] Gallery API Success",
    props<{allGallery:GalleryModel[]}>()

);