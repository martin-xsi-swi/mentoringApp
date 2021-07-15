import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {HeaderModule} from "./components/header/header.component.module";
import {FooterModule} from "./components/footer/footer.component.module";
import {BodyModule} from "./components/body/body.component.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HeaderModule,
        FooterModule,
        BodyModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
