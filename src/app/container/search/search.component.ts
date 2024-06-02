import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //2. Create the method and raise the event form this method
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }

  updateSearchText(inputEl: HTMLInputElement){
      //this.searchText = event.target.value;
      console.log(inputEl.value);
      this.searchTextChanged.emit(inputEl.value);
  }
}
