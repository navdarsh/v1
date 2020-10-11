import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-review',
  templateUrl: './customers-review.component.html',
  styleUrls: ['./customers-review.component.scss']
})
export class CustomersReviewComponent implements OnInit {
  reviews = [
    {
      text: '"I thought it was spectacular, I called the motoboy and it arrived in 04 minutes. Congratulations, Success to everyone!"',
      name: 'FERNANDA NEGREV',
      designation: 'SUPERVISOR'
    },
    {
      text: '"I thought it was spectacular, I called the motoboy and it arrived in 04 minutes. Congratulations, Success to everyone!"',
      name: 'FERNANDA NEGREV',
      designation: 'SUPERVISOR'
    },
    {
      text: '"I thought it was spectacular, I called the motoboy and it arrived in 04 minutes. Congratulations, Success to everyone!"',
      name: 'FERNANDA NEGREV',
      designation: 'SUPERVISOR'
    },
    {
      text: '"I thought it was spectacular, I called the motoboy and it arrived in 04 minutes. Congratulations, Success to everyone!"',
      name: 'FERNANDA NEGREV',
      designation: 'SUPERVISOR'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
