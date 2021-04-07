import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HideasService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/idea')
  }

  saveCategoria(categoria: any) {
    return this.http.post<any>('http://localhost:3000/categoria', categoria)
  }

}
