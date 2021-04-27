import { Component, OnInit } from "@angular/core";
import {DaysInWeek} from "../weather/api/Enums";

@Component({
  selector: "app-header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {

    public daysInWeek = DaysInWeek;

  constructor() { }

  ngOnInit(): void {
  }

}
