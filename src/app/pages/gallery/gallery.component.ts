import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { map } from 'rxjs/operators';

const imageLinks = [
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
  },
  {
    srcUrl: 'https://live.staticflickr.com/65535/49913008231_f919c1c518_k.jpg',
    previewUrl: 'https://live.staticflickr.com/65535/49913008231_e64c222fa2_t.jpg',
    caption: '10 Image'
  }

];



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  constructor(public gallery: Gallery, public lightbox: Lightbox) { }
  items: GalleryItem[];
  imageData = imageLinks;
  ngOnInit(): void {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl, caption: item.caption }));


    /** Lightbox Example */

      // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
