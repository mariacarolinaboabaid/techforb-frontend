import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from 'src/app/services/balance.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-register-operation',
  templateUrl: './register-operation.component.html',
  styleUrls: ['./register-operation.component.css']
})
export class RegisterOperationComponent {

  dateInput = ''
  valueInput = ''
  valueInputNumber: number = 0
  operationInput = ''
  balance: number = 0
  formattedDate: string | null = null;
  userIdString = '';
  userId: number = 0;
  

  constructor(private transactionService: TransactionService, private balanceService: BalanceService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {

    this.userIdString = localStorage.getItem('userId') ?? ''; 
    this.userId = parseInt(this.userIdString, 10);  

    // Getting the balance of the user
    this.balanceService.getBalance(this.userId).subscribe((result) => {
      this.balance = result["balance"]

    });
  }

  onSubmit() {
    this.valueInputNumber = parseFloat(this.valueInput)

    if (this.operationInput === 'transferencia' || this.operationInput === 'saque') {
      console.log(0)
      if (this.valueInputNumber >this.balance) {
        alert("Saldo insuficiente");
        return
      }
    }
    var roundedNumber = Number(this.valueInputNumber.toFixed(2));
    const formattedDate = this.datePipe.transform(this.dateInput, 'dd/MM/yyyy');

    if (formattedDate === null) {
      console.error("Fecha inválida");
      return;
    }
    this.formattedDate = formattedDate;

    const postData = {
      "date": this.formattedDate,
      "type": this.operationInput,
      "value": roundedNumber,
      "userId": this.userId
    }

    this.transactionService.postTransaction(this.userId, postData)
      .subscribe((result) => {
          console.log(result)
          console.log(this.userId)
          this.router.navigate(['/home']);

    });
    

  }

}




