import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products= [
    {
      name: 'Vaniila Falour',
      price: 2000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Raspberry Falour',
      price: 5000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Vaniila Falour',
      price: 2000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Raspberry Falour',
      price: 5000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Vaniila Falour',
      price: 2000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Raspberry Falour',
      price: 5000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Vaniila Falour',
      price: 2000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Raspberry Falour',
      price: 5000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
