import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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


  // line under navigation items
  underlineVal = 0;  //0 means no underline
  showUnderline(index: number) {
    this.underlineVal = index;
  }
  hideUnderline(index: number) {
    let navLinks = document.getElementsByClassName('nav-link');
    // checks if any other nav links have active class
    let i = this.checkForActiveLink();
    //checks if the nav link has active class
    if (!navLinks[index - 1].classList.contains('active')) {
      // it does not have active link, hence the underline is hidden
      this.underlineVal = 0;
    }
    this.underlineVal = i;
  }

  checkForActiveLink() :number{
    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < 4; i++) {
      if (navLinks[i].classList.contains('active')) {
        return (i+1);
      }
    }
    return 0;
  }

  // navbar active
  activeNavLink(index: number) {
    this.showUnderline(index);
  }

  ngOnInit(): void {

  }
  // navbar scroll
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    this.underlineVal = this.checkForActiveLink();
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
      navBar.classList.remove('navbar-light')
      navBar.classList.add('navbar-dark')
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
