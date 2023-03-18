import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelWebsite';

  //images
  images = [
    "./assets/ariel view of ktm.jpg",
    "./assets/boudhaStupa.jpg",
    "./assets/boudhaStupa2.jpg",
    "./assets/candles.jpg",
    "./assets/mangalbazar.jpg",
    "./assets/mangalbazar2.jpg",
    "./assets/mangalbazar3.jpg",
    "./assets/mangalbazar4.jpg",
    "./assets/mangalbazar5.jpg",
    "./assets/National park Langtang.jpg",
    "./assets/pashupati-aarti.jpg",
    "./assets/pokhara-phewataal.jpg"
  ]

  // navbar
  isCollapsed = false;


  // navbar scroll
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let navBar = document.querySelector('nav') as HTMLElement;
    // console.log(navBar)
    // console.log(window.pageYOffset)
    // console.log(element.clientHeight)
    if (window.pageYOffset > 200) {
      navBar.classList.add('scrolled');
      navBar.classList.add('transparentNav');
      navBar.classList.add('navbar-light');
      navBar.classList.remove('navbar-dark');
    } else {
      if (navBar.classList.contains('scrolled')) {
        navBar.classList.remove('navbar-light');
        navBar.classList.add('navbar-dark');
        navBar.classList.add('scrollUp');
        setTimeout(() => {
          navBar.classList.remove('scrolled');
          navBar.classList.remove('transparentNav');
          navBar.classList.remove('scrollUp');
        }, 200)
      }
    }
  }

}
