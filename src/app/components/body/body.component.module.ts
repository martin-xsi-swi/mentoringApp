import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {WeatherModule} from "../weather/weather.module";
import {BodyComponent} from "./body.component";
import {RandomDataModule} from "../random-data/random-data.module";


@NgModule({
    declarations: [
        BodyComponent
    ],
    imports: [
        BrowserModule,
        WeatherModule,
        RandomDataModule
    ],
    providers: [],
    exports: [
        BodyComponent
    ]
})
export class BodyModule {
}
