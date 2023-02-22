import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products= [
    {
      name: 'Mobile Phone',
      price: 20000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Refrigerator',
      price: 24000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Television',
      price: 12000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Laptop',
      price: 75000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Washing Machine',
      price: 28000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Watch',
      price: 5000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Air Conditioner',
      price: 20000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    },
    {
      name: 'Air Cooler',
      price: 10000,
      image: "https://via.placeholder.com/200",
      description: "Some quick example text to build on the card title."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
