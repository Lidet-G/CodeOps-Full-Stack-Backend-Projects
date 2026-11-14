# Day 55 – Building the First API

This NestJS project implements the CodeOps Module 4 Day 55 reading sheet and the
Dishes Resource mini-project.

## Run
From this directory:

```powershell
npm install
npm run start:dev
```

Base URL: `http://localhost:3000/api`

## Main endpoints
- `GET /restaurants`
- `GET /restaurants/open`
- `GET /restaurants?area=Bole`
- `GET /restaurants/:id`
- `POST /restaurants`
- `GET /dishes`
- `GET /dishes?restaurantId=1`
- `GET /dishes/:id`
- `POST /dishes`

## Files to read
- `CODE-TOUR.md` – explanations for presenting the project.
- `requests.http` – example requests (VS Code REST Client extension).
- `STATUS-CODES.md` – status code explanation.
- `TROUBLESHOOTING-EXERCISE.md` – nine troubleshooting experiments.

## Important
Money is stored as whole santim. The repositories are in-memory and reset when the
server restarts. A dish referencing a missing restaurant returns 404 Not Found.
The DishesService has no NestJS imports; its module uses a factory provider.

## Git
Run Git commands from the repository root (`codeops-backend`), not from this folder.
