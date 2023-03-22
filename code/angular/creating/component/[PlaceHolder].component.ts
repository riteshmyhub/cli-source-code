import { Component } from "@angular/core";

@Component({
   selector: "placeholder-root",
   templateUrl: `<p>{title} Component work</p>`,
})
export class PlaceholderComponent {
   title = "placeholder";
}
