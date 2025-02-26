import { Component } from '@angular/core';
import {HttpClientModule,} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import AlbumsComponent from "./albums/albums.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterModule, RouterLink, AlbumsComponent, AlbumsComponent],
  providers: [HttpClientModule]
})

export class AppComponent {

  constructor() {
  }
}