import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  constructor(    private modalService: NgbModal    ){
    

  }
  onHover(): void {
    console.log('Button hovered - function triggered!');
    // Add any additional functionality you want here
  }
  modal_dis(){
    this.modalService.dismissAll()
  }
  
    modal0_open(level_modal: any) {
   
          
    this.modalService.open(level_modal, { ariaLabelledBy: 'modal-basic-title', centered: true, windowClass: 'modal_booking' }).result.then((result) => {
        // Modal closed, open the second modal
     }, (reason) => {
        // Handle modal dismissal
    });
    }
    modal1_open(info_modal: any) {
      this.modalService.dismissAll()
  
          
    this.modalService.open(info_modal, { ariaLabelledBy: 'modal-basic-title', centered: true, windowClass: 'modal_booking' }).result.then((result) => {
        // Modal closed, open the second modal
     }, (reason) => {
        // Handle modal dismissal
    });
    }
    modal2_open(thanks_modal: any) {
      this.modalService.dismissAll()
  
          
    this.modalService.open(thanks_modal, { ariaLabelledBy: 'modal-basic-title', centered: true, windowClass: 'modal_booking' }).result.then((result) => {
        // Modal closed, open the second modal
     }, (reason) => {
        // Handle modal dismissal
    });
    }
}
