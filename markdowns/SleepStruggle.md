# Sleep Struggle API Endpoint

- Path: {{baseUrl}}/api/update/sleep_struggle
- Scheme: https
- Method: POST
- Authorization: Bearer f7e4c5d6-8a9b-4c3d-9e0f-2b1a7c8d0e9f
- Content-Type: application/json
- Content-Length: 67

## Request Body
```json
{
  "updateSleepStruggleRecord": {
    "userId": "8a941aed-8abe-46f1-99c2-96217d88bf08",
    "sleepStruggleRange": {
      "min": 1,
      "max": 3
    },
    "dataCollectionPhase": 2
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
    "sleepStruggleRange": {
      "min": 1,
      "max": 3
    },
    "dataCollectionPhase": 2
  },
  "message": "The sleep struggle range was updated successfully",
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
