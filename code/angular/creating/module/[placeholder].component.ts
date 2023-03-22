import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-placeholder",
   templateUrl: `<div>
    <p>placeholder page work</p>
    <router-outlet></router-outlet>
</div>`,
})
export class PlaceholderComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
