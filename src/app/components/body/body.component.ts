import {Component} from "@angular/core";

@Component({
    selector: "app-body-component",
    templateUrl: "./body.component.html",
    styleUrls: ["./body.component.less"]
})

export class BodyComponent {

    public refresh: boolean = false;
    public title = "myApp";

    public refreshWeather() {
        this.refresh = true;
    }

    public onUpdate($event: any) {
        alert($event);
        this.refresh = false;
    }


}
