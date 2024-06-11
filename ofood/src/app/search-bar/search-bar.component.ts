import { Component, OnInit, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  inputObject :HTMLElement | null
  constructor(){
    
  }
  

  ngOnInit(): void {
    @ViewChild('#search-input') searchInput;
    console.log(this.inputObject?.classList);
    throw new Error('Method not implemented.');
    
  }
  Search():void {
    
  }
  
}