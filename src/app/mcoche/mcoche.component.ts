import { Component, Renderer2, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './mcoche.component.html',
  styleUrls: ['./mcoche.component.css']
})
export class MCocheComponent implements OnInit {

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addClickListener();
    }
  }

  addClickListener() {
    const historyImage = document.getElementById('MuseuCocheImg');
    const audio = document.getElementById('MuseuCocheAudio') as HTMLAudioElement;

    if (historyImage && audio) {
      this.renderer.listen(historyImage, 'click', () => {
        if (audio.paused) {
          audio.play().then(() => {
            console.log('Áudio reproduzido');
          }).catch(error => {
            console.error('Erro ao reproduzir o áudio', error);
          });
        } else {
          audio.pause();
          console.log('Áudio pausado');
        }
      });
    } else {
      console.error('Elementos não encontrados', { historyImage, audio });
    }
  }
}