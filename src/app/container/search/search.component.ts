import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = 'Womens watch';

  updateSearchText(event: any){
      this.searchText = event.target.value;
      //console.log(event.target.value);
  }
}