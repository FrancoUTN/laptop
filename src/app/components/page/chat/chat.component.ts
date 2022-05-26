import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  texto:string = '';
  auxMensajes:Array<any> = [];
  mensajes:Array<any> = [];
  cargando:boolean = false;

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.traerMensajes();
  }

  enviar() {
    const mensaje = this.chatService.agregarMensaje(this.texto)

    this.mensajes.push(mensaje);
  }

  teclaApretada(event:any) {
    if(event.keyCode === 13 && this.texto.trim().length > 0) {
      this.enviar();
      this.texto = '';
    }
  }

  traerMensajes() {
    this.mensajes = [];
    this.cargando = true;

    this.chatService.retornarColeccion().get().subscribe(
      qs => {
        qs.forEach(
          doc => this.mensajes.push({...doc.data()})
        )
        
        this.cargando = false;
      }
    );

  }
    
}
