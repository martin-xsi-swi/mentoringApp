import {Component, OnInit} from "@angular/core";
import {IWeather} from "../weather/api/IWeather";

export interface ILorem {
    aaa?: string;
    status?: boolean;
}


@Component({
    selector: "app-footer-component",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.less"]
})

export class FooterComponent implements OnInit {

    public ipsum: boolean = false;

    constructor() {
    }

    ngOnInit(): void {

    }

    private hello() {
    }

    public world() {}

}
