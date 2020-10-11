import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-questions',
  templateUrl: './common-questions.component.html',
  styleUrls: ['./common-questions.component.scss']
})
export class CommonQuestionsComponent implements OnInit {
  questionAnswers = [
    {
      question: 'Is it possible to deliver on the same day?',
      answer: 'Yes, you can determine for your e-commerce cut times, like in 3 periods, what to sell from 6 pm to 8 am (Do the separation and make the calls at 9 am to be delivered), what to sell from 8 am to 12 pm ( Does the separation and makes the calls at 13h to be delivered), what to sell from 13h01 to 18h (Does the separation and makes the calls at 19h to be delivered), everything will be delivered on the same day, this happens according to the flow deliveries, and at the customer\'s discretion, deliveries may be made once or twice a day.'
    },
    {
      question: 'How is the freight cost calculated?',
      answer: 'Our system generates the value per km run, but according to the number of deliveries, your company will certainly have a specific table for your e-commerce, we have delivery values from R $ 6.90.'
    },
    {
      question: 'I realized that I sent the wrong request to the customer, can I talk to the courier?',
      answer: 'Yes, in the main screen of your order you will have all the data of the professional who is attending you, contact the professional, remember if you need the carrier to return with some material, the return address will be included in your order ( it will have an additional cost according to the distance to be covered).'
    },
    {
      question: 'Do you remove the product and do all the separation and distribution at the base of Immediato?',
      answer: 'Depende muito de cada empresa, isso acontece de acordo com a quantidade de entregas e tipo do produto a ser entregue, maiores informações (11) 2093-3030.'
    },
    {
      question: 'How do I make payments on Motoboy.app?',
      answer: 'after creating an account in our system as a Legal Entity and requesting billing, if approved, your company will be able to use our platform from the 1st to the 31st and will mature every 10th through a bank slip.'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
