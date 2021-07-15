import {Component, Input, OnDestroy} from "@angular/core";
import {RandomDataService} from "./random-data.service";
import {finalize, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
    selector: "app-random-data",
    templateUrl: "./random-data.component.html",
    styleUrls: ["./random-data.component.less"]
})

export class RandomDataComponent implements OnDestroy {
    @Input() mySubjectFromParent$$: Subject<any>;

    public busy = false;
    public selectOptions: string[] = ["Beer", "Color"];
    public randomData: any;
    private destroy$$: Subject<void> = new Subject<void>();

    constructor(
        private randomDataService: RandomDataService) {
    }

    public ngOnDestroy() {
        this.destroy$$.next();
        this.destroy$$.unsubscribe();
    }


    public onSelectChange(selectedOption: string) {
        this.fetchRandomData(selectedOption);
    }

    private fetchRandomData(dataSource: string, size?: number) {
        this.busy = true;
        this.randomData = undefined;

        this.randomDataService.getRandomData(dataSource, size).pipe(takeUntil(this.destroy$$),
            finalize(() => {
                this.busy = false;
            }))
            .subscribe((response: any) => {
                this.randomData = response;
                this.mySubjectFromParent$$.next(this.randomData);
            }, (error) => {
                alert("error vole" + error.status);
            });
    }
}
