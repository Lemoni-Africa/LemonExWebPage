import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
})
export class AppLayoutComponent implements OnInit {
  year: any;
  contactForm!: FormGroup;
  emailError: boolean = false;
  recipientNameError: boolean = false;
  phoneNumberError: boolean = false;
  referalCode: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxService.startLoader('loader-01'); // start foreground spinner of the loader "loader-01" with 'default' taskId
    setTimeout(() => {
      this.ngxService.stopLoader('loader-01');
      // this.showDashboard = true;
      // this.showBlank = false; // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 2000);
    this.contactForm = this.formBuilder.group({
      recipientName: ['', Validators.required],
      recipientPhoneNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      recipientEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      referredBy: [''],
    });
    // particlesJS.load('particles-js', 'assets/particles.json', null);
  }

  getYear() {
    let myDate = new Date();
    this.year = myDate.getFullYear();
  }

  //Scrolling of Page
  goToDynamic(el: any) {
    const myElement: any = document.getElementById(el);
    myElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  gotoAboutUs() {
    this.router.navigateByUrl('/about-us').then(() => {
      window.location.reload();
    });
  }

  gotoOurServices() {
    this.router.navigateByUrl('/our-services').then(() => {
      window.location.reload();
    });
  }

  gotoHome() {
    this.router.navigateByUrl('/home').then(() => {
      window.location.reload();
    });
  }
  gotoFAQs() {
    this.router.navigateByUrl('/faqs').then(() => {
      window.location.reload();
    });
  }
}
