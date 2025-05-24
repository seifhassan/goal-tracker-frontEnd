import { Component, OnInit } from '@angular/core';
import { GoalService } from '../../services/goal.service';
import { Goal } from '../../models/goal.model';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-goals',
  templateUrl: './public-goals.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Add here
})
export class PublicGoalsComponent implements OnInit {
  goals: Goal[] = [];

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.goalService.getPublicGoals().subscribe({
      next: (res) => (this.goals = res),
    });
  }
}
