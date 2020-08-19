import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product;
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(() => {
      this.router.navigate(['/products']);
      this.productService.showMessage('Produto Deletado com sucesso');
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
