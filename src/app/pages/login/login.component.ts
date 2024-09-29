import { AfterViewInit, Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements AfterViewInit {

  router = inject(Router);
  constructor(){

  }


  login:any = {
    username:'admin',
    password :'112233'
  }
  onLogin(){
    if(this.login.username =="admin" && this.login.password =="112233"){
   this.router.navigateByUrl('dashboard')
    }else {
      alert('wring credentials');
    }
  }

  ngAfterViewInit(){

   
  }





}
