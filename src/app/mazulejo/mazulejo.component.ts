import { Component, Renderer2, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-mazulejo',
  templateUrl: './mazulejo.component.html',
  styleUrls: ['./mazulejo.component.css']
})
export class MAzulejoComponent implements OnInit {

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addClickListener();
    }
  }

  addClickListener() {
    const historyImage = document.getElementById('MuseuAzulejoImg');
    const audio = document.getElementById('MuseuAzulejoAudio') as HTMLAudioElement;

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