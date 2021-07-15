import {Component, OnInit} from "@angular/core";
import {Subject} from "rxjs";

@Component({
    selector: "app-body-component",
    templateUrl: "./body.component.html",
    styleUrls: ["./body.component.less"]
})

export class BodyComponent implements OnInit {

    public refresh = false;
    public title = "myApp";

    public mySubjectValue: any;
    public mySubject$$: Subject<any> = new Subject();

    public refreshWeather() {
        this.refresh = true;
    }

    public ngOnInit() {
        this.mySubject$$.subscribe({
            next: (event) => {
                this.mySubjectValue = event;
            }
        });
    }

    public onUpdate($event: string) {
        alert($event);
        this.refresh = false;
    }
}
