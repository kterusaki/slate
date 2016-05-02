## Upsert a Contact

> Request

```shell
curl 'https://api.salesforceiq.com/v2/contacts?_upsert=email'
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "properties": {
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

```shell
HTTP/1.1 200 OK
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
```

`POST /contacts`

A POST request which creates or updates a Contact object. 

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
_upsert | String | true | The only value this parameter may have is "email".

### Payload
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
updatedContact | Object | true | A Contact object which includes only the properties that need to be updated. This object should be included in the body of the request.

### Payload Attributes
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
properties | Object | true | A collection of Contact properties that include name, email, phone, address, company, tite, experience, liurl (LinkedIn url), twhan (Twitter handle) for a Contact object.