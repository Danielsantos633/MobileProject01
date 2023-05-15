import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private contatoService: ContatoService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  enviar() {
    let nome = this.form.get('nome')?.value;
    let endereco = this.form.get('endereco')?.value;

    this.abrirUrl(
      `https://api.whatsapp.com/send?phone&text=Ol%C3%A1%21+Meu+nome+%C3%A9+${nome}+moro+em+${endereco}+e+vim+atrav%C3%A9s+do+seu+aplicativo+e+gostaria+de+receber+doa%C3%A7%C3%B5es.`);    
  }

  abrirUrl(url: string) {
    window.open(url, '_blank')?.focus();
  }

}
