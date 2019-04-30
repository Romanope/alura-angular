import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoListBaseComponent implements OnInit, OnChanges {
  
  @Input() photos: Photo[] = [];
  rows: any[] = [];
  
  constructor() { }
  
  ngOnInit() {
  
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos)   {
      this.rows = this.toGroupColumns(this.photos);
    }
  }

  toGroupColumns (photos: Photo[]) {

    const newRows = [];

    for (let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, (index + 3)));
    }

    console.log('JSON ROWS: ', newRows);
    return newRows;
  }
}
