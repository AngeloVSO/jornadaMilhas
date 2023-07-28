import { Component } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  promocoes$ = this.promocaoService.listar();
  depoimentos$ = this.depoimentoService.listar();

  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentoService
  ) {}
}
