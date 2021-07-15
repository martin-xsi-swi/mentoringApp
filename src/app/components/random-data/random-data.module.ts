import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RandomDataComponent} from "./random-data.component";


@NgModule({
    declarations: [
        RandomDataComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        RandomDataComponent
    ]
})
export class RandomDataModule {
}
