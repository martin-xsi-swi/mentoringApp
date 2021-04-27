import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {IWeather} from "./api/IWeather";
import {DaysInWeek, WeatherStatus} from "./api/Enums";

@Component({
    selector: "app-weather",
    templateUrl: "./weather.component.html",
    styleUrls: ["./weather.component.less"]
})

export class WeatherComponent implements OnInit, OnChanges {

    @Input() desiredDay: DaysInWeek;
    @Input() refresh: boolean = false;
    @Output() forecast: EventEmitter<string> = new EventEmitter<string>();

    public busy: boolean = false;

    private weatherForecast: IWeather[];
    public daysToDisplay: IWeather[];

    ngOnInit(): void {
        this.fetchWeather(false);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.refresh?.currentValue === true) {
            this.fetchWeather(true);
        }
    }

    private fetchWeather(showMessage: boolean) {
        this.busy = true;
        setTimeout(() => {
            this.weatherForecast = [
                {day: DaysInWeek.MONDAY, status: WeatherStatus.CLOUDY, temperature: 18},
                {day: DaysInWeek.TUESDAY, status: WeatherStatus.RAINY, temperature: 10},
                {day: DaysInWeek.WEDNESDAY, status: WeatherStatus.RAINY, temperature: 8},
                {day: DaysInWeek.THURSDAY, status: WeatherStatus.CLOUDY, temperature: 12},
                {day: DaysInWeek.FRIDAY, status: WeatherStatus.SUNNY, temperature: 15},
                {day: DaysInWeek.SATURDAY, status: WeatherStatus.SUNNY, temperature: 20},
                {day: DaysInWeek.SUNDAY, status: WeatherStatus.SUNNY, temperature: 22}];
            this.showWeather();
            this.busy = false;
            if (showMessage) {
                this.forecast.emit("here you go");
            }
        }, 3000);

    }

    private showWeather() {
        this.daysToDisplay = this.desiredDay !== undefined ? [this.weatherForecast.find(item => item.day === this.desiredDay)] : this.weatherForecast;
    }
}
