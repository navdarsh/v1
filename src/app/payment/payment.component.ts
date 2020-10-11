import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  data = [
    {
      head: 'Payment options',
      text: 'Choose the best payment option for you or your company below.',
      icons: [
        {icon: '<img src="assets/images/immediato-motoboy-cartao-2.png" draggable="false">', name: 'CREDIT CARD'},
        {icon: '<img src="images/immediato-motoboy-dinheiro-2.png" draggable="false">', name: 'MONEY'},
        {icon: '<img src="images/immediato-motoboy-boleto-2.png" draggable="false">', name: 'BOLETO FOR COMPANIES'}
      ]
    },
    {
      head: 'Flexible payment',
      text: 'Choose the best payment option for you or your company below.',
      icons: [
        {icon: '<img src="assets/images/immediato-motoboy-cartao-2.png" draggable="false">', name: 'CREDIT CARD'},
        {icon: '<img src="images/immediato-motoboy-dinheiro-2.png" draggable="false">', name: 'MONEY'},
        {icon: '<img src="images/immediato-motoboy-transferencia-2.png" draggable="false">', name: 'TRANSFER'},
        {icon: '<img src="images/immediato-motoboy-boleto-2.png" draggable="false">', name: 'BOLETO FOR COMPANIES'}
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
