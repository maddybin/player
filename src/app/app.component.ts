import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'player';

  public player: any;
  once =  false;


  ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } });

    this.player.on('play', () => {
      
      if(!this.once) {
        console.log('Started play');
      }

      this.once = true;

    });

    this.player.on('ended', () => {
      console.log('player stops');
      this.once = false;
      this.player.stop()
    });
    
  }
  
  playPlayer() {
    this.player.play();
  }
}
