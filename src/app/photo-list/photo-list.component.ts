import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.loadPhotos(2); // Load photos for albumId=3
  }

  loadPhotos(albumId: number): void {
    this.photoService.getPhotos(albumId)
      .subscribe(photos => this.photos = photos);
  }
}
