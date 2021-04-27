import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {WeatherModule} from '../weather/weather.module';


@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        WeatherModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
