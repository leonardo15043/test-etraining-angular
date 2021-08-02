import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router  } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: "",
    password:""
  }

  alert = false;
  constructor(
    private _loginService:LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {

    this._loginService.getLogin( form.value )
    .subscribe( data => {
      localStorage.setItem('token', data.access_token );
      this.router.navigate(['/folders',0]);
    },error => {
      console.log(error);
      this.alert = true;
    });

  }

}
