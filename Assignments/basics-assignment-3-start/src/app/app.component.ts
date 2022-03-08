import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password: String = "tuna";
  showPassword: boolean = false;
  count: any = 0;
  clicks = [];

  onButtonClick() {
    this.showPassword = !this.showPassword;
    this.count++;
    this.clicks.push(new Date());
    // this.clicks.push(this.count);
    // console.log(this.clicks);
  }
}
