import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit{

  // images
  //images
  images = [
    "./assets/AerialViewOfKTM.jpg",
    "./assets/boudhaStupa.jpg",
    "./assets/boudhaStupa2.jpg",
    "./assets/candles.jpg",
    "./assets/mangalbazar.jpg",
    "./assets/mangalbazar2.jpg",
    "./assets/mangalbazar3.jpg",
    "./assets/mangalbazar4.jpg",
    "./assets/mangalbazar5.jpg",
    "./assets/NationalParkLangtang.jpg",
    "./assets/pashupati-aarti.jpg",
    "./assets/pokhara-phewataal.jpg",
    "./assets/lakhey.jpg",
    "./assets/lakhey2.jpg",
  ]

  // navbar - darken
  ngOnInit(): void {
    let navBar = document.querySelector('nav') as HTMLElement;
    console.log(navBar)
    navBar.classList.remove('navbar-dark')  
    navBar.classList.add('navbar-light')
  }
  
  // navbar scroll
  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let navBar = document.querySelector('nav') as HTMLElement;
    navBar.classList.add('navbar-light')  
  }
}
