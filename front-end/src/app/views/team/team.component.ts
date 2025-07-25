import { Component } from '@angular/core';
import {currentTeam, alumni} from '../../../assets/data/teams'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  currentTeam = currentTeam;
  alumni = alumni;
}
