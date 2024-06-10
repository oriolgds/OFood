import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})

export class CarrouselComponent implements OnInit {

  images: any[] = [];
  private apiUrl = 'https://foodish-api.com/api/'; // Replace with your API endpoint

  constructor() { }

  ngOnInit(): void {
    this.fetchImages();
  }

  async fetchImages(): Promise<void> {
    for (let i = 0; i < 3; i++) {
      try {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        this.images.push(json.image);
      } catch (error) {
        console.error('Error fetching images:', error);
      }      
    }  
    console.log(this.images);
  }
}
