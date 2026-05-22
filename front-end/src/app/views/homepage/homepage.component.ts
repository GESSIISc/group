import { Component } from '@angular/core';
import { data } from '../../../assets/data/home';

declare var bootstrap: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  data = data;
  selectedNews: any = null;
  openModal(news: any) {
    this.selectedNews = news;
    const modal = new bootstrap.Modal(
      document.getElementById('newsModal')
    );
    modal.show();
  }
}
