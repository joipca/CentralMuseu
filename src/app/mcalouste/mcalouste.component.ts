import { Component, Renderer2, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-mcalouste',
  templateUrl: './mcalouste.component.html',
  styleUrl: './mcalouste.component.css'
})

export class McalousteComponent {
  
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addClickListener();
    }
  }

  addClickListener() {
    const historyImage = document.getElementById('MuseuCalousteImg');
    const audio = document.getElementById('MuseuCalousteAudio') as HTMLAudioElement;

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