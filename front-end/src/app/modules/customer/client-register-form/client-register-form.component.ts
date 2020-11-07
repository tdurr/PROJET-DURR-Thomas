import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../modeles/Client';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register-form',
  templateUrl: './client-register-form.component.html',
  styleUrls: ['./client-register-form.component.css']
})
export class ClientRegisterFormComponent implements OnInit {
  
  //@Output() newCustomerEvent: EventEmitter<Client> = new EventEmitter<Client>();

  customerForm = new FormGroup ({
    nom : new FormControl('', [Validators.required, nomValidator]),
    prenom : new FormControl('', [Validators.required, prenomValidator]),
    adresse : new FormControl('', [Validators.required, adresseValidator]),
    cp : new FormControl('', [Validators.required, cpValidator]),
    ville : new FormControl('', [Validators.required, villeValidator]),
    tel : new FormControl('', [Validators.required,telValidator]),
    email : new FormControl('', [Validators.required, emailValidator]),
    civilite : new FormControl('', [Validators.required]),
    login : new FormControl('', [Validators.required, loginValidator]),
    pw : new FormControl('', [Validators.required, pwValidator]),
    cpw : new FormControl('', [Validators.required])
  });

  get nom(): AbstractControl {
    return this.customerForm.get('nom');
  }

  get prenom(): AbstractControl {
    return this.customerForm.get('prenom');
  }

  get adresse(): AbstractControl {
    return this.customerForm.get('adresse');
  }

  get cp(): AbstractControl {
    return this.customerForm.get('cp');
  }

  get ville(): AbstractControl {
    return this.customerForm.get('ville');
  }

  get tel(): AbstractControl {
    return this.customerForm.get('tel');
  }

  get email(): AbstractControl {
    return this.customerForm.get('email');
  }

  get civilite(): AbstractControl {
    return this.customerForm.get('civilite');
  }

  get login(): AbstractControl {
    return this.customerForm.get('login');
  }

  get pw(): AbstractControl {
    return this.customerForm.get('pw');
  }

  get cpw(): AbstractControl {
    return this.customerForm.get('cpw');
  }
  
  constructor(private router: Router) { 
   }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const newClient : Client = new Client(
      this.customerForm.value.nom,
      this.customerForm.value.prenom,
      this.customerForm.value.adresse,
      this.customerForm.value.cp,
      this.customerForm.value.ville,
      this.customerForm.value.tel,
      this.customerForm.value.email,
      this.customerForm.value.civilite,
      this.customerForm.value.login,
      this.customerForm.value.pw
     )
    
    //this.newCustomerEvent.emit(newClient);
    this.router.navigate(['customer/infos'], {
      state: {
        clientData: newClient
      }
    });
  }

  fillInputs(): void {
    this.customerForm.controls.nom.setValue('DURR');
    this.customerForm.controls.prenom.setValue('Thomas');
    this.customerForm.controls.adresse.setValue('10 rue des Bosquets');
    this.customerForm.controls.cp.setValue('67700');
    this.customerForm.controls.ville.setValue('Saverne');
    this.customerForm.controls.tel.setValue('0612211221');
    this.customerForm.controls.email.setValue('test@gmail.com');
    this.customerForm.controls.civilite.setValue('Monsieur');
    this.customerForm.controls.login.setValue('tdr');
    this.customerForm.controls.pw.setValue('P@$$w0rd');
    this.customerForm.controls.cpw.setValue('P@$$w0rd');
  }

  
}

export function nomValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /[A-Za-z]{2,30}/;
  return regex.test(control.value) ? null : { test: true };
}

export function prenomValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /[A-Za-z]{2,30}/;
  return regex.test(control.value) ? null : { test: true };
}

export function adresseValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /[0-9A-Za-z-.*, ]{5,50}/;
  return regex.test(control.value) ? null : { test: true };
}

export function cpValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/;
  return regex.test(control.value) ? null : { test: true };
}

export function villeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /[A-Za-z- ]{2,40}/;
  return regex.test(control.value) ? null : { test: true };
}

export function telValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /(0|(\\+33)|(0033))[1-9][0-9]{8}/;
  return regex.test(control.value) ? null : { test: true };
}

export function emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return regex.test(control.value) ? null : { test: true };
}

export function loginValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /[0-9a-zA-Z-_]{3,20}/;
  return regex.test(control.value) ? null : { test: true };
}

export function pwValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/;
  return regex.test(control.value) ? null : { test: true };
}