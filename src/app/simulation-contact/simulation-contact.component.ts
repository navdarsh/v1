import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation-contact',
  templateUrl: './simulation-contact.component.html',
  styleUrls: ['./simulation-contact.component.scss']
})
export class SimulationContactComponent implements OnInit {
  links = [
    [{name: "For personal use", route: ""}, {name: "Contact us", route: ""}],
    [{name: "For businesses", route: ""}, {name: "Terms and conditions", route: ""}],
    [{name: "For e-commerce", route: ""}, {name: "Privacy policy", route: ""}],
    [{name: "For restaurants", route: ""}, {name: "Help", route: ""}],
  ];
  constructor() { }

  ngOnInit() {
  }

}
