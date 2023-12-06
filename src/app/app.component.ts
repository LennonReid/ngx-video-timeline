import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: "app-root",
  template: ` <router-outlet></router-outlet> `,
  styles: ``,
  standalone: true,
})
export class AppComponent {}
