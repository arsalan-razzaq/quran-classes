import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      img: '../../../assets/images/Basic Qaida.jpg',
      title: 'Basic Qaida',
      description: 'Arabic word formation, and alphabet identification, are all taught to students',
      students: 30,
      lessons: 10,
      rating: 5
    },
    {
      img : '../../../assets/images/quran_translation.jpg',
      title: 'Quran Translation',
      description: 'Students can study and memorize the word-for-word translation of the Quran in Urdu or English',
      students: 50,
      lessons: 15,
      rating: 4.8
    },
    {
      img:'../../../assets/images/Quran Reading With Tajweed.jpg',
      title: 'Quran Reading With Tajweed',
      description: 'This course is ideal for you regardless of your level of Arabic proficiency',
      students: 40,
      lessons: 12,
      rating: 4.9
    },
    {
      img:'../../../assets/images/Learn Islamic Ethics.avif',
      title: 'Learn Islamic Ethics',
      description: 'It contains more information on the beliefs and fundamentals of Islam than Islamic systems and introduces the rules for reciting the Holy Quran.',
      students: 25,
      lessons: 8,
      rating: 4.7
    },
    {
      img : '../../../assets/images/quran_memorization.png' , 
      title: 'Quran Memorization',
      description: 'Our Quran online course aims to assist students in memorizing',
      students: 20,
      lessons: 20,
      rating: 5
    },
    {
      img : '../../../assets/images/arabic_courses.jpg' , 
      title: 'Arabic Course',
      description: 'Understanding Arabic is necessary for comprehending the meanings of the Quran',
      students: 35,
      lessons: 10,
      rating: 4.5
    }
  ];
 

 
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
