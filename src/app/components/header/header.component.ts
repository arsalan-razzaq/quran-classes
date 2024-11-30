import { Component, EventEmitter, HostListener, Output } from '@angular/core';
 import { RequestService } from '../../../app/services/request.service';
 import { AES } from 'crypto-js';
import { FormBuilder, Validators } from '@angular/forms';
import { DataEncryptService } from '../../../app/services/data-encrypt.service';
import Swal from 'sweetalert2';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-10px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('200ms ease-in')),
      transition('* => void', animate('200ms ease-out')),
    ]),
  ],
})
export class HeaderComponent {
  constructor(    private modalService: NgbModal    ){
    

  }
  openContactOptions(no_opn:any ): void {
    this.modalService.open(no_opn, { ariaLabelledBy: 'modal-basic-title', centered: true, windowClass: 'modal_booking' }).result.then((result) => {
      // Modal closed, open the second modal
   }, (reason) => {
      // Handle modal dismissal
  });
  }
  close(){
    this.modalService.dismissAll()
  }
  phoneNumber: string = '+447476840096';

  makeCall(): void {
    // Open the phone number in the call application
    window.open(`tel:${this.phoneNumber}`, '_self');
  }

  openWhatsApp(): void {
    // Open WhatsApp with the phone number
    const whatsappURL = `https://wa.me/${this.phoneNumber.replace(/\+/g, '')}`;
    window.open(whatsappURL, '_blank');
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0; // Add class when scrolled
  }
}

