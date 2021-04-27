import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {WeatherModule} from "../weather/weather.module";
import {BodyComponent} from "./body.component";


@NgModule({
    declarations: [
        BodyComponent
    ],
    imports: [
        BrowserModule,
        WeatherModule
    ],
    providers: [],
    exports: [
        BodyComponent
    ]
})
export class BodyModule {
}
