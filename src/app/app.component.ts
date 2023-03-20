import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TravelWebsite';

  // login authentication
  constructor(public authService: AuthenticationService, private router: Router) { }

  checkLoginStatus() {
    if (this.authService.isAuthenticated() == false) {
      if ((this.router.url != "/")) {
        this.router.navigateByUrl("/");
      }
    }
  }

  ngOnInit(): void {

  }

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
  // displays the underline on screen
  showUnderline(index: number) {
    this.underlineVal = index;
  }

  // hides the underline on screen
  hideUnderline(index: number) {
    let navLinks = document.getElementsByClassName('nav-link');
    // checks if any other nav links have active class
    let i = this.checkForActiveLink();
    //checks if the nav link has active class
    if (!navLinks[index - 1].classList.contains('active')) {
      // it does not have active link, hence the underline is hidden
      this.underlineVal = 0;
    }
    //settting underline of active link
    this.underlineVal = i;
  }

  checkForActiveLink(): number {
    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < 4; i++) {
      if (navLinks[i].classList.contains('active')) {
        return (i + 1);
      }
    }
    return 0;
  }

  // navbar active
  activeNavLink(index: number) {
    this.showUnderline(index);
  }

  //constanly checks if we have routed to a different page. If so, the corresponding underline is added
  assignActiveLink() {
    this.underlineVal = this.checkForActiveLink();
  }
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

  // login/ registration form display
  loginFormDisplay: boolean = true;
  registrationFormDisplay: boolean = false;


  displayLoginForm() {
    this.loginFormDisplay = true;
    this.registrationFormDisplay = false;
  }
  displayRegistationForm() {
    this.loginFormDisplay = false;
    this.registrationFormDisplay = true;
  }

}
