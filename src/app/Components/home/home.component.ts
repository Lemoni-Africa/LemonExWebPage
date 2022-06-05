import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
// import Splide from '@splidejs/splide';
// import {} from '@glidejs/glide';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LiveCoinService } from 'src/app/Services/live-coin.service';
import { SwiperComponent } from 'swiper/angular';

declare var particlesJS: any;
declare var Glider: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  year: any;
  contactForm!: FormGroup;
  emailError: boolean = false;
  recipientNameError: boolean = false;
  phoneNumberError: boolean = false;
  referalCode: any;
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  spin = true
  coinResult: any = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor(private formBuilder: FormBuilder,
               private router: Router,
               private _liveCoinService: LiveCoinService,
               private notification: NzNotificationService) {}

  ngOnInit(): void {
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
    // new Splide('.splide').mount();
    // new Glider(document.querySelector('.glider'));
    this.getTopCoins()
  }

  getYear() {
    let myDate = new Date();
    this.year = myDate.getFullYear();
  }

  getTopCoins() {
    this._liveCoinService.liveCoin().subscribe((res: any) => {
      this.coinResult = res.data;
      const size = 5
      this.coinResult = this.coinResult.slice(0, size)
      this.spin = false
    }, error => {
      this.notification.error("Get Coin", "Error")
    });
  }
  gotoFAQs() {
    this.router.navigateByUrl('/faqs').then(() => {
      window.location.reload();
    });
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
}
