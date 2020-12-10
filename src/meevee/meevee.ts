import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: "meevee",
  styleUrls: ["meevee.scss"],
  templateUrl: "meevee.html",
})
export class Meevee {
  constructor(public router: Router) {}
  toHome() {
    this.router.navigate(['/events']);
  }
}
