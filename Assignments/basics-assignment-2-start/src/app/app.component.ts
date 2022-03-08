import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  userName: String = "Prasad";

  checkUserName() {
    if (this.userName.length === 0) {
      return true;
    }
    return false;
  }

  resetUserName() {
    this.userName = "";
  }
}
