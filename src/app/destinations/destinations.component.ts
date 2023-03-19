import { Component, OnInit, HostListener } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {

  // images
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
    "./assets/mangalbazar6.jpg",
    "./assets/NationalParkLangtang.jpg",
    "./assets/pashupati-aarti.jpg",
    "./assets/pokhara-phewataal.jpg",
    "./assets/lakhey.jpg",
    "./assets/lakhey2.jpg",
    "./assets/lumbini.jpg",
    "./assets/janakpur2.jpg",
    "./assets/chitwan.jpg",
  ]

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
