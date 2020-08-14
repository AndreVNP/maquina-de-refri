import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pruduct-crud',
  templateUrl: './pruduct-crud.component.html',
  styleUrls: ['./pruduct-crud.component.css']
})
export class PruductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(){
    console.log('Navegando...');
    this.router.navigate(['/products/create']);
  }

}
