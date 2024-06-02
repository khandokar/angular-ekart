import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  
  //Optional1 2nd argument of @viewChild
  //1. read: Use it to read the difference token from the queried element
  //2. static: Determines when the query is resolved
  //           True is when the view is initialized (before the first chnage detection) from the first time
  //           False if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl : ElementRef

  updateSearchText(){
      //this.searchText = event.target.value;
      //console.log(inputEl.value);
      //this.searchTextChanged.emit(inputEl.value);
      this.searchText = this.searchInputEl.nativeElement.value;
      this.searchTextChanged.emit(this.searchInputEl.nativeElement.value);

  }
}
