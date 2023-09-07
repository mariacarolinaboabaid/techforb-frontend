import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {

  dateInput = ''
  numberInput = ''
  formattedDate: string | null = null;
  userIdString = '';
  userId: number = 0;

  constructor(private cardService: CardService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {

    this.userIdString = localStorage.getItem('userId') ?? ''; 
    this.userId = parseInt(this.userIdString, 10);
    console.log(this.userId)
  }


  onSubmit() {
   
    const formattedDate = this.datePipe.transform(this.dateInput, 'dd/MM/yyyy');

    if (formattedDate === null) {
      console.error("Fecha inválida");
      return;
    }
    this.formattedDate = formattedDate;

    const postData = {
      "expirationDate": this.formattedDate,
      "number": this.numberInput,
      "userId": this.userId
    }

    this.cardService.postCard(this.userId, postData)
      .subscribe((result) => {
          console.log(result)
          this.router.navigate(['/home']);

    });
    

  }

}
