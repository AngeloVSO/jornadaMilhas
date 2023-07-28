import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { CardComponent } from './shared/components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/components/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardSearchComponent } from './shared/components/card-search/card-search.component';
import { MatCardModule } from '@angular/material/card';
import { CardTestimonyComponent } from './shared/components/card-testimony/card-testimony.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './shared/components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BotaoControleComponent } from './shared/components/botao-controle/botao-controle.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardSearchComponent,
    CardTestimonyComponent,
    FormSearchComponent,
    ModalComponent,
    BotaoControleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
