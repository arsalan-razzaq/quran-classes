import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
 
  
   
   
  
   
    constructor(    private modalService: NgbModal    ){
      
  
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
     
  }
  
 
