import { Component, Renderer2, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-mcoche',
  templateUrl: './mcoche.component.html',
  styleUrl: './mcoche.component.css'
})
export class MCocheComponent {
 
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
        audio.play().then(() => {
        }).catch(error => {
          console.error('Erro ao reproduzir o áudio', error);
        });
      });
    } else {
      console.error('Elementos não encontrados', { historyImage, audio });
    }
  }
}