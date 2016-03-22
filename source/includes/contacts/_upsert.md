## Upsert an Contact

> Request

```shell
curl 'https://api.salesforceiq.com/v2/contacts?_upsert=rdreesen@gmail.com'
  -X POST
  -u [API Key]:[API Secret]
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "id": "56e9d27de4b0b397dfa971cb",
        "properties": {
          "liurl": [
            {
              "value": "https://www.linkedin.com/in/rdreesen",
              "metadata": {}
            }
          ],
          "phone": [
            {
              "value": "+14154873698",
              "metadata": {
                "raw_val": "+1 415-487-3698"
              }
            }
          ],
          "name": [
            {
              "value": "Ray Dreesen",
              "metadata": {}
            }
          ],
          "email": [
            {
              "value": "rdreesen@gmail.com",
              "metadata": {
                  "primary": "false"
              }
            },
            {
              "value": "r.dreesen@imt.com",
              "metadata": {
                  "stype": "work",
                  "primary": "true"
              }
            }
          ]
        }
      }'
```

{
  "id": "56e9d27de4b0b397dfa971cb",
  "properties": {
    "liurl": [
      {
        "value": "https://www.linkedin.com/in/rdreesen",
        "metadata": {}
      }
    ],
    "phone": [
      {
        "value": "+14154873698",
        "metadata": {
          "raw_val": "+1 415-487-3698"
        }
      }
    ],
    "name": [
      {
        "value": "Ray Dreesen",
        "metadata": {}
      }
    ],
    "email": [
      {
        "value": "rdreesen@gmail.com",
        "metadata": {
            "primary": "false"
        }
      },
      {
        "value": "r.dreesen@imt.com",
        "metadata": {
            "stype": "work",
            "primary": "true"
        }
      }
    ]
  }
}

`POST /contacts

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
_upsert | Text (required) | The only value this parameter may have is "email".

### Payload
Parameter | Type | Description
--------- | ------- | -----------
updatedContact | JSON | A full Contact object including any updated Contact data should be included in the body of the request.