import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from 'src/app/shared/models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usernameInput = '';
  passwordInput = '';

  userEmailInput: string = ''
  userPasswordInput: string = ''
  users: UserModel[] = []
  validationEmail: boolean = false
  validationPassword: boolean = false
  hideMessageErrorPassword: boolean = true
  hideMessageErrorEmail: boolean = true
  message: string = ''


  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    // GETTING THE USERS
    this.loginService.getUsers()
      .subscribe((result) => {
        this.users = result

        this.validationEmail = false
        this.validationPassword = false
        this.hideMessageErrorPassword = true
        this.hideMessageErrorEmail = true

        // CHECKING IF IT MATCH WITH THE INPUT INFORMATION
        for (let user of this.users) {
          if (this.usernameInput === user.username) {
            this.validationEmail = true

            if (this.passwordInput === user.password) {
              this.validationPassword = true
              if (user.id !== undefined) {
                localStorage.setItem('userId', user.id.toString());
              } else {
                // Lida com o caso em que user.id é undefined (opcional)
                console.error('ID undefined.');
              }
              break
            }
          }
        }

        if (this.validationEmail === true && this.validationPassword === true) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/home'])
         
        }
        else if (this.validationEmail === true && this.validationPassword === false) {
          console.log("senha errada")
          this.hideMessageErrorPassword = false
        }
        else if (this.validationEmail === false) {
          console.log("usuário inexistente")
          this.hideMessageErrorEmail = false
        }
      })
  }
}
