import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: any;
  public filteredValue: any;
  public inputMessage: string = 'Hello';

  constructor(private service: ServiceService) {}

  public inputHandler($e: any) {
    this.inputMessage = $e.target.value;
    this.filteredValue = this.products.filter((element: any) => {
      if (element.name.includes(this.inputMessage)) {
        return element.name;
      }
    });
   
  }

  ngOnInit(): void {
    let request = this.service.getProducts();
    this.service.setLoading(request);
    request.subscribe((product) => {
      console.log(product);
      this.products = product;
    });
  
    console.log(this.filteredValue);
  }
}
