import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  openBtn1!: boolean;
  openBtn2!: boolean;
  openBtn3!: boolean;
  openBtn4!: boolean;
  openBtn5!: boolean;
  openBtn6!: boolean;
  openBtn7!: boolean;
  openBtn8!: boolean;
  openBtn9!: boolean;
  openBtn10!: boolean;
  constructor() {}

  ngOnInit(): void {}

  openFaq(el: any) {
    const myElement: any = document.getElementById(el);
    if (el === 'collapseTwo') {
      this.openBtn1 = !this.openBtn1;
    }
    if (el === 'collapseThree') {
      this.openBtn2 = !this.openBtn2;
    }
    if (el === 'collapseFour') {
      this.openBtn3 = !this.openBtn3;
    }
    if (el === 'collapseOne') {
      this.openBtn4 = !this.openBtn4;
    }
    if (el === 'collapseFive') {
      this.openBtn5 = !this.openBtn5;
    }
    if (el === 'collapseSix') {
      this.openBtn6 = !this.openBtn6;
    }
    // if (el === 'collapseTwo') {
    //   this.openBtn1 = !this.openBtn1;
    // }
    // if (el === 'collapseTwo') {
    //   this.openBtn1 = !this.openBtn1;
    // }
    // if (el === 'collapseTwo') {
    //   this.openBtn1 = !this.openBtn1;
    // }
  }
}
