import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CustomerService } from './../../customer/services/customer.service';
import { ClientState } from './../../../store/states/client-state';
import { AddJWT } from './../../../store/actions/client-action';
import { AddLogin } from './../../../store/actions/client-action';

@Component({
  selector: 'app-client-login-form',
  templateUrl: './client-login-form.component.html',
  styleUrls: ['./client-login-form.component.css']
})
export class ClientLoginFormComponent implements OnInit {

  loginForm = new FormGroup ({
    login : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  public tokenJwtObs: Observable<string>;
  public isSubmitted: boolean;
  public hide : boolean = true;

  constructor(private customerService: CustomerService, private store: Store) { }

  ngOnInit(): void {
    this.tokenJwtObs = this.store.select(ClientState.getTokenJwt);
  }

  onSubmit(): void {

    this.isSubmitted = true;

    this.customerService.login( this.loginForm.value.login, this.loginForm.value.password ).then(response => {

      if (response.body.success) {
        this.store.dispatch(new AddJWT(response.headers.get('Authorization')));
        this.store.dispatch(new AddLogin(response.body.user.login));
        /*
        this.store.select(ClientState.getLogin).subscribe(log => {
          console.log(log);
        }) */
      } 
      else {
        this.loginForm.setErrors({
          apiError: true
        });
      }
    })
    .catch(error => {
      this.loginForm.setErrors({
        accessDenied: true
      });
    });
  }

  showPassword(): void {
    this.hide = !this.hide;
  }
}
