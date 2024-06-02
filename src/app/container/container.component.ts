import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule,SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  //name = 'John Doe';
  addToCart:number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event:any){
    //this.name = event.target.value;
    //console.log(event);
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
    
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
    
  }

  searchText: string = '';

  setSearchText(value: string){
      this.searchText = value;
  }

}
