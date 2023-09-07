import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  usernameInput = '';
  passwordInput = '';


  constructor(private loginService: LoginService, private router: Router) { }


  onSubmit() {
    const postData = {
      "username": this.usernameInput,
      "password": this.passwordInput
    }

    this.loginService.postUser(postData)
      .subscribe((result) => {
          console.log(result)
          alert("Usuario registrado exitosamente!")
          this.router.navigate(['/login'])
    });
  }
}
