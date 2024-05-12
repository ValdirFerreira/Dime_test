import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtualizarSenhaModel, ChecaTokenModel } from 'src/app/models/esqueceu-senha/esqueceu-senha';
import { EsqueceuSenhaService } from 'src/app/services/esqueceu-senha.service';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
  token: string = '';
  frmSignup: FormGroup;
  frmActive: boolean;
  frmErro: boolean;
  frmSucesso: boolean;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private routeActive: ActivatedRoute,
    private esqueceuSenhaService: EsqueceuSenhaService
  ) {


    this.routeActive.queryParams.subscribe(params => {
      this.token = params['token'];
    });

    this.frmSignup = this.criarFormDeAlteracaoDeSenha();
  }

  ngOnInit(): void {
    this.frmActive = false;
    this.frmErro = false;
    this.frmSucesso = false;

    let request = new ChecaTokenModel(
      this.token
    );

    this.esqueceuSenhaService.verificarTokenValido(request).subscribe(response => {
      if (response.StatusCode == 404) {
        this.redirectLogin();
      } else {
        this.frmActive = true;
      }
    },
      error => {
        console.error(error.message);
        this.redirectLogin();
      }, () => {
      });

    this.frmActive = true;

  }

  criarFormDeAlteracaoDeSenha(): FormGroup {
    return this.fb.group(
      {
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  recuperarSenha() {
    let request: AtualizarSenhaModel = {
      Token: this.token,
      Senha: (document.getElementById("password") as HTMLInputElement).value,
    }


    this.esqueceuSenhaService.atualizarSenha(request).subscribe(response => {
      if (response.StatusCode == 404) {
        this.frmActive = false;
        this.frmErro = true;
        // Mostrar tela de erro.
      } else {
        this.frmActive = false;
        this.frmSucesso = true;
        setTimeout(() => {
          this.router.navigate(['home/login']);
        }, 6000);
      }
    },
      error => {
        console.error(error.message);
      }, () => {
      });

  }

  submit() {
    this.recuperarSenha();
  }

  redirectLogin() {
    this.router.navigate(['home/login']);
  }
}
