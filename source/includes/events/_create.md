## Create an Event

> Request

```shell
curl 'https://api.salesforceiq.com/v2/events'
  -X PUT
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "subject": "Phone Call",
        "body": "Discussed contract negotiations",
        "participantIds": [
          { 
            "type": "email",
            "value": "james.mcsales@salesforceiq.com"
          },
          {
            "type": "phone",
            "value": "14152990341"
          }
        ]
      }'
```

> Response

```shell
# Nothing
HTTP/1.1 200 OK
```
`PUT /events`

A PUT request which creates a new Event and begins propogating the details out to associated streams.

### Payload
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
newEvent | Object | true | A JSON representation of an Event

### Payload Attributes
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
subject | String | true | The subject or title of the event
body | String | true | The body of the event
participantIds | Object\[\] | true | A collection of Contact emails or phone numbers