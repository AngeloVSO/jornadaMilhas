import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Promocao } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class PromocaoService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listar() {
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
