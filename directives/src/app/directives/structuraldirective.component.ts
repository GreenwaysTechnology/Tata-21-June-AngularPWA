import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styles: [
  ]
})
export class StructuraldirectiveComponent implements OnInit {
  isHidden: boolean = true;
  isShown: boolean = true;
  isAvailable: boolean = true;
  loading: boolean = true;
  status: string = "loading....."
  input: string = ""
  feedback: string = ""

  list:string[] = ["java","javascript","angular","React"]
  constructor() {
    setTimeout(() => {
      this.loading = !this.loading;
      this.status = "Response is Ready"
    }, 5000)

  }

  ngOnInit(): void {
  }
  show() {
    this.isHidden = !this.isHidden
  }
  showHidden() {
    this.isShown = !this.isShown
  }
  isFacilityAvailable() {
    this.isAvailable = !this.isAvailable
  }
  showFeedback() {
    this.feedback = this.input;
  }

}
