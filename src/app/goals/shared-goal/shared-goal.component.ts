import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../../services/goal.service';
import { Goal } from '../../models/goal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-goal',
  templateUrl: './shared-goal.component.html',
  standalone: true,
  imports: [CommonModule], // ✅ Required for *ngIf, *ngTemplate
})
export class SharedGoalComponent implements OnInit {
  goal!: Goal;

  constructor(
    private route: ActivatedRoute,
    private goalService: GoalService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('publicId')!;
    this.goalService.getSharedGoal(id).subscribe({
      next: (res) => (this.goal = res),
    });
  }
}
