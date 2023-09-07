import { Component } from '@angular/core';
import { transactionModel } from 'src/app/shared/models/transactionModel';
import { TransactionService } from 'src/app/services/transaction.service';
import { BalanceService } from 'src/app/services/balance.service';
import { CardService } from 'src/app/services/card.service';
import { cardModel } from 'src/app/shared/models/cardModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrayTransactions: transactionModel[] = [];
  balance: number = 0;
  arrayCards: cardModel[] = [];
  userIdString = '';
  userId: number = 0;

  constructor(private transactionService: TransactionService, private balanceService: BalanceService, private cardService: CardService) { }

  ngOnInit(): void {

    this.userIdString = localStorage.getItem('userId') ?? '';
    this.userId = parseInt(this.userIdString, 10);


    // Getting the transactions
    this.transactionService.getTransactions(this.userId).subscribe((result) => {
      this.arrayTransactions = result

      for (let item in this.arrayTransactions) {
        console.log(this.arrayTransactions[item])
      }
    });

    // Getting the balance of the user
    this.balanceService.getBalance(this.userId).subscribe((result) => {
      this.balance = result["balance"]

    });

    // Getting the cards
    this.cardService.getCards(this.userId).subscribe((result) => {
      this.arrayCards = result;
      // Formating the number card
      this.arrayCards.forEach((card) => {
        card.number = this.formatCreditCardNumber(card.number);
        console.log(card.number);
      });
    })
  };

  formatCreditCardNumber(input: string): string {

    const numericOnly = input.replace(/\D/g, '');
    const cardNumberFormat = /(\d{4})(\d{4})(\d{4})(\d{4})/
    const formattedNumber = numericOnly.replace(cardNumberFormat, '$1 $2 $3 $4');

    return formattedNumber;
  }
}

