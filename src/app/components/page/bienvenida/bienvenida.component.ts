import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
  isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize')
    onResize() {
      let screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
  }
}
