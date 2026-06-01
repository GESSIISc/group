import { Component, OnInit } from '@angular/core';
import { data as homeData } from '../../../assets/data/home';
import { data as blogData } from '../../../assets/data/blogs';

declare var bootstrap: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  homeData = homeData;
  latestBlogs: any[] = [];
  selectedItem: any = null;

  ngOnInit() {
    this.latestBlogs = [...blogData]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }

  openModal(item: any) {
    this.selectedItem = item;
    const modalElement = document.getElementById('sharedModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
