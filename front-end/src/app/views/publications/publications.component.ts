import { Component } from '@angular/core';
import { data } from '../../../assets/data/publications';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  pubData = data;
  activeTab: 'journals' | 'conferences' = 'journals';
  setActiveTab(tabName: 'journals' | 'conferences') {
    this.activeTab = tabName;
  }
}
