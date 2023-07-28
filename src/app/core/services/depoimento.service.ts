import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listar() {
    return this.httpClient.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
