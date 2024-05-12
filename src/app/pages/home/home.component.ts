import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IncentivoModel } from 'src/app/models/usuario/IncentivoModel';
import { LoginService } from 'src/app/services/login.service';

import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  name: string = "";
  email: string = "";
  whatsapp: string = "+55";

  nameValid: boolean = true;
  emailValid: boolean = true;
  whatsappValid: boolean = true;

  nameMessageErro: string = "";
  emailMessageErro: string = "";
  whatsappMessageErro: string = "";
  userNaoEncontradoErro: string = "";

  linkGerado: string = "";
  textoEnvio: string = "";

  nomeProjeto: string = "";
  tempoComunidade: string = "";
  valorIncentivo: string = "0.00";
  idUsuario: string = "";


  erroUrl: number = 0;

  linkCopiado: boolean = false;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private clipboard: Clipboard
  ) {


  }



  ngOnInit(): void {

    // localStorage.clear();
    // sessionStorage.clear();

    // this.activatedRoute.queryParams.subscribe(params => {
    //   // this.nomeProjeto = params['Projeto'];
    //   // this.tempoComunidade = params['NomeAtividade'];
    //   var idUsuario = params['linkedinUser'];
    //   // this.idUsuario = params['IDProjeto'];

    //   if (idUsuario) {
    //     var linkGerado = "https://survey.webraptor.com.br//mailing?EstudoUniqueID=7WPDyRPMMrM=&T=0&idamostra=12604&texto1=" + idUsuario + "&AllowNew=1&cw=1";
    //     window.location.href = linkGerado;
    //     return;
    //   }
    // })

    // this.validaparametros();

    this.mapearDivsEAlterarValor0();
    this.mapearDivsEAlterarValor();

  }

  numero = 1;
  min = 1;
  max = 999999999;
  duracao = 3500; // 4 segundos

   mapearDivsEAlterarValor() {
    const divsValor1 = document.querySelectorAll('.valor1');
  
    divsValor1.forEach((div) => {
      const numeroElement = div.querySelector('span'); // Supondo que o número esteja dentro de uma tag <span> dentro da div
  
      if (numeroElement) {
        const maxValue = parseInt(numeroElement.innerText);
  
        for (let i = this.min; i <= maxValue; i++) {
          setTimeout((nr) => {
            numeroElement.innerHTML = nr.toString() + "K+";
          }, i * this.duracao / maxValue, i);
        }
      }
    });    
  }
  

  mapearDivsEAlterarValor0() {
    const divsValor1 = document.querySelectorAll('.valor0');
  
    divsValor1.forEach((div) => {
      const numeroElement = div.querySelector('span'); // Supondo que o número esteja dentro de uma tag <span> dentro da div
  
      if (numeroElement) {
        const maxValue = parseInt(numeroElement.innerText);
  
        for (let i = this.min; i <= maxValue; i++) {
          setTimeout((nr) => {
            numeroElement.innerHTML = nr.toString() + "+";
          }, i * this.duracao / maxValue, i);
        }
      }
    });
  }


  cadastrar() {


    if (!this.name) {
      this.nameValid = false;
      this.nameMessageErro = "Campo Obrigatório!"
    }
    else {
      this.nameValid = true;
      this.nameMessageErro = ""
    }


    // if (!this.email) {
    //   this.emailValid = false;
    //   this.emailMessageErro = "Campo Obrigatório!"
    // }
    // else {
    //   this.emailValid = true;
    //   this.emailMessageErro = ""
    // }


    if (!this.whatsapp) {
      this.whatsappValid = false;
      this.whatsappMessageErro = "Campo Obrigatório!"
    }
    else {
      this.whatsappValid = true;
      this.whatsappMessageErro = ""
    }


    if (this.whatsappValid && this.nameValid) {
      this.tempoComunidade = "";
      this.valorIncentivo = "";
      this.nomeProjeto = ""
      this.erroUrl = 2;
    }

  }

  validEmail() {
    // if (this.email) {
    //   const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

    //   const result: boolean = expression.test(this.email);
    //   if (!result) {
    //     this.emailValid = false;
    //     this.emailMessageErro = "Formato não valido!"
    //   }
    //   else {
    //     this.emailValid = true;
    //     this.emailMessageErro = ""
    //   }
    // }

  }

  validPhone() {
    if (this.whatsapp) {
      const expression: RegExp = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

      const result: boolean = expression.test(this.whatsapp);
      if (!result) {
        this.whatsappValid = false;
        this.whatsappMessageErro = "Formato não valido!"
      }
      else {
        this.emailValid = true;
        this.whatsappMessageErro = ""
      }
    }

  }

  validaparametros() {
    // if (!this.nomeProjeto ||
    //   !this.tempoComunidade ||
    //   !this.valorIncentivo ||
    //   !this.idUsuario) {
    //   this.erroUrl = 1;
    // }
    // else {
    //   this.erroUrl = 0;
    // }

    if (
      !this.valorIncentivo) {
      this.erroUrl = 1;
    }
    else {
      this.erroUrl = 0;
    }
  }

  phoneMask() {
    this.whatsapp = this.whatsapp.replace(/\D/g, '')
    this.whatsapp = this.whatsapp.replace(/(\d{2})(\d)/, "+$1 $2")
    this.whatsapp = this.whatsapp.replace(/(\d{2})(\d)/, "($1)$2")
    this.whatsapp = this.whatsapp.replace(/(\d)(\d{4})$/, "$1-$2")

    if (this.whatsapp) {

      const result = (this.whatsapp.length != 18);
      if (result) {
        this.whatsappValid = false;
        this.whatsappMessageErro = "Formato não valido!"
      }
      else {
        this.emailValid = true;
        this.whatsappMessageErro = ""
      }
    }
  }

  phoneMaskOnly() {
    this.whatsapp = this.whatsapp.replace(/\D/g, '')
    this.whatsapp = this.whatsapp.replace(/(\d{2})(\d)/, "+$1 $2")
    this.whatsapp = this.whatsapp.replace(/(\d{2})(\d)/, "($1)$2")
    this.whatsapp = this.whatsapp.replace(/(\d)(\d{4})$/, "$1-$2")

  }

  buscarUsuario() {

    this.loginService.ObterUsuario(this.whatsapp).subscribe(
      response => {

        if (!response) {
          this.userNaoEncontradoErro = "Usuário não encontrado";
          this.valorIncentivo = "0.00"
        }
        else {

          this.emailMessageErro = "";
          this.whatsappMessageErro = "";
          this.nameMessageErro = "";
          this.userNaoEncontradoErro = "";


          this.email = response.Email;
          this.idUsuario = response.Id.toString();
          this.name = response.Nome;
          this.textoEnvio = "Oi! Tudo bem? Eu faço parte de um painel de Pesquisa e estou te enviando este link para você se cadastrar e dar sua opinião em diversos assuntos também. E só clicar neste link: ";
          this.linkGerado = "https://survey.webraptor.com.br//mailing?EstudoUniqueID=7WPDyRPMMrM=&T=0&idamostra=12604&texto1=" + this.idUsuario + "&AllowNew=1&cw=1";
        }


      },
      err => {
        console.log(err);
        this.emailMessageErro = "Erro na tentativa de envio!";
        this.whatsappMessageErro = "Erro na tentativa de envio!";
        this.nameMessageErro = "Erro na tentativa de envio!";
      },
      () => {

      }
    );

  }


  abrirNovaAba(app: number) {

    // this.clipboard.copy(this.linkGerado);

    switch (app) {
      case 1:
        debugger
        var text = "";

        const urlForWhatsApp = "https://api.whatsapp.com/send?text=" + this.textoEnvio + "https://survey.webraptor.com.br//mailing?EstudoUniqueID=7WPDyRPMMrM=%26T=0%26idamostra=12604%26texto1=" + this.idUsuario + "%26AllowNew=1%26cw=1";
        window.open(urlForWhatsApp, "_blank");
        break;

      case 2:
         window.open("https://www.facebook.com/sharer/sharer.php?u=" + this.linkGerado + "&quote=" + this.textoEnvio , "_blank");
        // const mensagem = this.textoEnvio;
        // const urlF = this.linkGerado; // URL que você deseja compartilhar

        // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlF)}&quote=${encodeURIComponent(mensagem)}`;
        // window.open(facebookUrl, '_blank');
        // const baseUrl = 'https://www.facebook.com/sharer/sharer.php?';
        // const urlFF = encodeURIComponent('https://www.example.com/page');
        // const quote = encodeURIComponent('Angular é incrível!');
        // const hashtag = encodeURIComponent('#angular');

        // const shareUrl = `${baseUrl}u=${urlFF}&quote=${quote}&hashtag=${hashtag}`;

        // window.open(shareUrl, '_blank');
        // const citacao = "Aqui está a minha citação para compartilhar!";
    
        // // Codifique a citação para URL
        // const citaçãoCodificada = encodeURIComponent(citacao);
        
        // // Crie o URL de compartilhamento personalizado com o parâmetro "quote"
        // const urlCompartilhamento = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.linkGerado)}&text=${citaçãoCodificada}`;
        
        // // Abra o URL de compartilhamento em uma nova 
        // window.open(urlCompartilhamento, '_blank');
        break;

      case 3:
        window.open("https://twitter.com/intent/tweet?text=" + this.textoEnvio + "https://survey.webraptor.com.br//mailing?EstudoUniqueID=7WPDyRPMMrM=%26T=0%26idamostra=12604%26texto1=" + this.idUsuario + "%26AllowNew=1%26cw=1", "_blank");
        break;

      case 4:
        debugger
        var urlLocal = window.location.href;
        //  var urlPage = encodeURIComponent(urlLocal + "?linkedinUser=" + this.idUsuario);
        var urlPage = urlLocal + "?linkedinUser=" + this.idUsuario;
        //var urlPage = "http://localhost:4200/#/formulario/?linkedinUser=1";
        const url: string = 'https://www.linkedin.com/sharing/share-offsite/?url=' + urlPage;
        window.open(url, '_blank');

        //window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + urlPage, "_blank");
        break;

      case 5:
        var mail = document.createElement("a");
        mail.href = "mailto:" + this.email + "?subject=files&body=" + this.textoEnvio + this.linkGerado;
        mail.click();
        break;

      default:
        break;
    }

  }


  copyAngular() {
    this.clipboard.copy(this.linkGerado);
    this.linkCopiado = true;
    setTimeout(() => {
      this.linkCopiado = false;
    }, 3000);
  }









}


