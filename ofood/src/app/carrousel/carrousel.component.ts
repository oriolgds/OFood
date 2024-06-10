import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})

export class CarrouselComponent implements OnInit {

  images: any[] = [];
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'; // Replace with your API endpoint

  constructor() { }

  ngOnInit(): void {
    this.fetchImages();
  }

  async fetchImages(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = response.json();
      return data;
    } catch (error) {
      console.error('Error fetching images:', error);
    }      
    console.log(this.images[0]);
  }
}
