import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { GoalService } from '../../services/goal.service';
import { Goal } from '../../models/goal.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  goals: Goal[] = [];
  groupedGoals: any[] = [];
  showModal = false;
  editingGoalId: string | null = null;
  preventParentChange = false;

  newGoal: Goal = {
    title: '',
    description: '',
    deadline: '',
    isPublic: false,
    parentId: null,
    order: 0,
  };

  constructor(private goalService: GoalService, private router: Router) {}

  ngOnInit() {
    this.loadGoals();
  }

  loadGoals() {
    this.goalService.getUserGoals().subscribe({
      next: (goals) => {
        this.goals = goals;
        this.groupedGoals = this.goals
          .filter((g) => !g.parentId)
          .map((parent) => ({
            ...parent,
            children: this.goals.filter((c) => c.parentId === parent.id),
          }));
      },
    });
  }

  addGoal() {
    if (this.editingGoalId) {


      this.goalService.updateGoal(this.editingGoalId, this.newGoal).subscribe({
        next: () => {
          this.resetForm();
          this.loadGoals();
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert(err?.error?.message || 'Failed to update goal.');
        },
      });
    } else {
      // Create new goal
      this.goalService.createGoal(this.newGoal).subscribe({
        next: () => {
          this.resetForm();
          this.loadGoals();
        },
      });
    }
  }

  resetForm() {
    this.showModal = false;
    this.editingGoalId = null;
    this.newGoal = {
      title: '',
      description: '',
      deadline: '',
      isPublic: false,
      parentId: null,
      order: 0,
    };
  }

  startEdit(goal: Goal) {
    this.editingGoalId = goal.id!;
    this.newGoal = { ...goal };
    this.showModal = true;
    const hasChildren = this.goals.some(g => g.parentId === goal.id);
    this.preventParentChange = hasChildren;
  }

  deleteGoal(id: string) {
    if (!confirm('Are you sure you want to delete this goal?')) return;

    this.goalService.deleteGoal(id).subscribe({
      next: () => this.loadGoals(),
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
