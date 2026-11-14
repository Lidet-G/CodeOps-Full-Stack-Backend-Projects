# Day 55 – API Status Codes

| Endpoint / situation | Status | Cause |
|---|---:|---|
| `GET /api/restaurants` | 200 OK | The restaurant list is returned. |
| `GET /api/restaurants/open` | 200 OK | The open restaurants are returned. |
| `GET /api/restaurants?area=Bole` | 200 OK | Restaurants matching the valid area are returned. |
| `GET /api/restaurants/:id` | 200 OK | The requested restaurant exists. |
| `GET /api/restaurants/:id` | 400 Bad Request | The path ID is not an integer; `ParseIntPipe` rejects it. |
| `GET /api/restaurants/:id` | 404 Not Found | No restaurant has that ID. |
| `POST /api/restaurants` | 201 Created | A restaurant is successfully created. |
| `POST /api/restaurants` | 400 Bad Request | The body fails DTO validation, for example an invalid area or extra field. |
| `POST /api/restaurants` | 409 Conflict | A restaurant with the same name already exists. |
| `GET /api/dishes` | 200 OK | All dishes, or the selected restaurant's dishes, are returned. |
| `GET /api/dishes/:id` | 200 OK | The requested dish exists. |
| `GET /api/dishes/:id` | 400 Bad Request | The path ID is not an integer. |
| `GET /api/dishes/:id` | 404 Not Found | No dish has that ID. |
| `POST /api/dishes` | 201 Created | The dish is successfully created. |
| `POST /api/dishes` | 400 Bad Request | Required fields, types, integer rule, or minimum price fail validation; unknown fields are forbidden. |
| `POST /api/dishes` | 404 Not Found | The supplied `restaurantId` does not identify an existing restaurant. |
| Any endpoint | 500 Server Error | An unexpected programming or server failure occurs. This is not an intentional business response. |

## 4xx versus 5xx

A 4xx response means the request is invalid or refers to a resource that does not exist; the caller can correct the request. A 5xx response means the server failed and the caller cannot fix the underlying problem by changing a valid request.

## Why does a missing restaurant for a dish return 404?

The dish request refers to a parent restaurant that does not exist. This implementation treats the missing parent resource as Not Found (404). A 400 could be defended if the API contract defines the supplied relationship as invalid input, but this project consistently uses 404 for the absent referenced resource.
