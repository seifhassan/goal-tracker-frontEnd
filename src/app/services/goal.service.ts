import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Goal } from '../models/goal.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GoalService {
  private readonly API = `${environment.apiUrl}/goals`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


getUserGoals(): Observable<Goal[]> {
  return this.http.get<any[]>(this.API, {
    headers: this.getAuthHeaders(),
  }).pipe(
    map((goals: any[]) =>
      goals.map((goal: any): Goal => ({
        ...goal,
        id: goal._id, // ✅ convert _id → id
      }))
    )
  );
}

  createGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.API, goal, {
      headers: this.getAuthHeaders(),
    });
  }

  // Optional: You can add these next
  updateGoal(id: string, update: Partial<Goal>): Observable<Goal> {
    return this.http.put<Goal>(`${this.API}/${id}`, update, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteGoal(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  getPublicGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${environment.apiUrl}/public-goals`);
  }

  getSharedGoal(publicId: string): Observable<Goal> {
    return this.http.get<Goal>(`${environment.apiUrl}/public-goals/${publicId}`);
  }


}
