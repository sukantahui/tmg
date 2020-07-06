import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-picture-carousel',
  templateUrl: './picture-carousel.component.html',
  styleUrls: ['./picture-carousel.component.scss']
})
export class PictureCarouselComponent implements OnInit{
  images = [1, 2, 3, 4].map((n) => ({url: `assets/carousel/carousel_${n}.jpg`, caption: 'My Caption'}));
  pictureDetails: string[] = ['Beautiful Paro', 'I love nature', 'India is great', 'Stay at Home'];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  imageLinks: any;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  ngOnInit(): void {
    this.imageLinks = [
      {
        srcUrl: 'https://live.staticflickr.com/65535/49913013501_fab3b1f241_k.jpg',
        previewUrl: 'https://live.staticflickr.com/65535/49913013501_a3c359f98b_t.jpg',
        caption: '1 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/4870/45885586705_313ca01433_k.jpg',
        previewUrl: 'https://live.staticflickr.com/4870/45885586705_63eeeff55e_t.jpg',
        caption: '2 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/7848/46010270344_522a57b03f_k.jpg',
        previewUrl: 'https://live.staticflickr.com/7848/46010270344_8d03716eba_t.jpg',
        caption: '3 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/4816/32859915328_c5d34eac5a_k.jpg',
        previewUrl: 'https://live.staticflickr.com/4816/32859915328_35525369b3_t.jpg',
        caption: '4 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/65535/49912494543_cac063d0da_k.jpg',
        previewUrl: 'https://live.staticflickr.com/65535/49912494543_c37c3fdf30_t.jpg'
      },
      {
        srcUrl: 'https://live.staticflickr.com/65535/49913016581_144745fec5_k.jpg',
        previewUrl: 'https://live.staticflickr.com/65535/49913016581_ecd7b57176_t.jpg',
        caption: '5 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/65535/49913307822_357ec25f1d_k.jpg',
        previewUrl: 'https://live.staticflickr.com/65535/49913307822_d2ef6a394f_t.jpg',
        caption: '6 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/65535/49913309312_2bb1060a3a_k.jpg',
        previewUrl: 'https://live.staticflickr.com/65535/49913309312_5694ed71d8_t.jpg',
        caption: '7 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/7806/32859831728_1e10bb1a74_b.jpg',
        previewUrl: 'https://live.staticflickr.com/7806/32859831728_1e10bb1a74_t.jpg',
        caption: '8 Image'
      },
      {
        srcUrl: 'https://live.staticflickr.com/65535/50065662493_4560bd1b77_k.jpg',
        previewUrl: 'https://live.staticflickr.com/65535/50065662493_71faa6acef_t.jpg',
        caption: '9 Image'
      }

    ];
  }

}


