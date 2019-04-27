import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  
  constructor(private service: PhotoService) {}
  
  ngOnInit(): void {
    this.service
    .getPhotosData('value')
    .subscribe(photos => this.photos = photos);
  }
}
