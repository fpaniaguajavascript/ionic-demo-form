import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formularioLogin:FormGroup;
  constructor() {
    this.formularioLogin = new FormGroup(
      {
        inputNombre: new FormControl('',[
          Validators.required,
          Validators.minLength(10),
        ]),
        inputEmail: new FormControl('',[
          Validators.email,
          Validators.required,
        ])   
      }
    );
  }

}
