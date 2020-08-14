import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PruductCrudComponent } from './views/pruduct-crud/pruduct-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: PruductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
