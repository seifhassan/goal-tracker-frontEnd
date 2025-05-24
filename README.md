# GoalTracker Frontend (Angular)

This is the frontend for the **GoalTracker** application — a personal and public goal management tool built using **Angular** and **Tailwind CSS**, designed to work with a NestJS backend API.

## 🧰 Tech Stack

- **Angular 17+ (Standalone Components)**
- **Tailwind CSS** (utility-first styling)
- **TypeScript**
- **RxJS** for observables and HTTP
- **JWT Authentication** (token stored in localStorage)
- **REST API** integration with NestJS backend

## 🚀 Features

- ✅ Register & Login with JWT
- ✅ View and manage personal goals (2-level nesting only)
- ✅ Create, update, delete goals
- ✅ Reorder & nest goals up to max depth
- ✅ Browse public goals
- ✅ View shared goals by URL
- ✅ Responsive, clean UI with Tailwind
- ✅ Route protection using AuthGuard

## 📂 Project Structure 
src/
│
├── app/
│ ├── auth/ → Login/Register components
│ ├── goals/ → Dashboard, public goals, shared goal view
│ ├── services/ → AuthService, GoalService
│ ├── models/ → Goal interface
│ ├── guards/ → AuthGuard
│ ├── app.routes.ts → Route definitions
│ └── main.ts → App bootstrap
│
├── styles.scss → Tailwind CSS entry
└── tailwind.config.ts → Tailwind config


## 🧪 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/seifhassan/goal-tracker-frontEnd.git
cd goal-tracker-frontend
