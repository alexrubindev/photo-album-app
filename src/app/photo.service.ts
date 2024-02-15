import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(albumId: number): Observable<Photo[]> {
    const url = `${this.apiUrl}?albumId=${albumId}`;
    return this.http.get<Photo[]>(url);
  }
}
