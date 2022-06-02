import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  texto:string = '';
  mensajes:Array<any> = [];

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.subscribirACambios();
  }

  enviar() {
    this.chatService.agregarMensaje(this.texto);
  }

  teclaApretada(event:any) {
    if(event.keyCode === 13 && this.texto.trim().length > 0) {
      this.enviar();
      this.texto = '';
    }
  }

  subscribirACambios() {
    this.chatService.retornarColeccion().valueChanges().subscribe(
      mjes => {
        this.mensajes = [];

        mjes.forEach(
          obj => this.mensajes.push(obj)
        );
      }
    );
  }
}
