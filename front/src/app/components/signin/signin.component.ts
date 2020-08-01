import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
   this.authService.singIn(this.user).subscribe(
     res => {
       sessionStorage.setItem('token', res.token);
       this.router.navigate(['/private']);
     },
     err => {
      console.log(err);
     }
   )
  }

}
