import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cover-page",
  templateUrl: "./cover-page.component.html",
  styleUrls: ["./cover-page.component.scss"],
})
export class CoverPageComponent implements OnInit {
  cards = [
    { icon: "fas fa-user-check", name: "1. MAKE YOUR ORDER" },
    { icon: "fas fa-mobile-alt", name: "2. FOLLOW CLOSE" },
    { icon: "fas fa-flag-checkered", name: "3. RECEIVE YOUR ORDER" },
  ];

  details = [
    {
      heading: "For personal use.",
      text:
        'Forgot passport? Do you need a notary, mail, public agency service? Want to deliver or pick up an order? So you are in the right place.',
      route: "",
      img: "assets/images/motoboy-app-uso-pessoal-1.jpg"
    },
    {
      heading: "For businesses.",
      text:
        'Just worry about the main tasks of your business, external services are with us. Check out the Motoboy.app app and save up to 40%, check it out!',
      route: "",
      img: "assets/images/motoboy-app-empresas-1.jpg"
    },
    {
      heading: "For E-Commerce.",
      text:
        'Just worry about selling, delivery is with us! Make your sales and deliver everything on the same day, we operate until 22h.',
      route: "",
      img: "assets/images/motoboy-app-ecommerce-1.jpg"
    },
    {
      heading: "For restaurants.",
      text:
        'Do you have a restaurant and would like a new option for your deliveries? COMING SOON',
      route: "",
      img: "assets/images/motoboy-app-restaurantes-1.jpg"
    },
  ];
  constructor() {}

  ngOnInit() {}

  routeTo(link) {}
}
