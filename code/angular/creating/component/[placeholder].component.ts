import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-placeholder",
   templateUrl: "./placeholder.component.html",
   styleUrls: ["./placeholder.component.less"],
})
export class PlaceholderComponent implements OnInit {
   title = "placeholder";
   constructor() {}

   ngOnInit(): void {}
}
