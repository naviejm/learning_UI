import { Component, OnInit, NgModule } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  nameEntered: boolean;
  constructor() {}

  ngOnInit() {
    this.nameEntered = false;
  }

  onEnterName() {
    console.log("Inside");
    this.nameEntered = !this.nameEntered;
  }
}
