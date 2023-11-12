# Sleep Duration API Endpoint

- Path: {{baseUrl}}/api/update/sleep_duration
- Scheme: https
- Method: POST
- Authorization: Bearer f7e4c5d6-8a9b-4c3d-9e0f-2b1a7c8d0e9f
- Content-Type: application/json
- Content-Length: 48

## Request Body
```json
{
  "updateSleepDurationRecord": {
    "userId": "8a941aed-8abe-46f1-99c2-96217d88bf08",
    "sleep_duration": 8,
    "dataCollectionPhase": 5
  }
}
```

## Parameters

None

## Response
Success (201 CREATED)
```json
{
  "status": "created",
  "data": {
    "userId": "8a941aed-8abe-46f1-99c2-96217d88bf08",
    "sleep_duration": 8,
    "dataCollectionPhase": 5
  },
  "message": "Sleep duration updated succesfully",
  "displayMessage": "Successful"
}
```
## Error
Error (500 Internal Server Error)
```json
{
  "error": "Insufficient Memory in Server"
}
```

or
```json
{
  "error": "Database Connection Error"
}
```
