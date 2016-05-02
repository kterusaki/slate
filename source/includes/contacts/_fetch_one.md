## Get a Single Contact

> Request

```shell
curl 'https://api.salesforceiq.com/v2/contacts/56b12644e4b08b67fd722d75'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'
```

```ruby
TBD
```

```python
TBD
```

> Response

```shell
HTTP/1.1 200 OK
{
  "id": "56b12644e4b08b67fd722d75",
  "modifiedDate": 1457564297403,
  "requestedIds": [ "56b11a80e4b0b5663a53403e" ],
  "mergedIds": null,
  "properties": {
    "liurl": [
      {
        "value": "https://www.linkedin.com/in/cavocado",
        "metadata": {}
      }
    ],
    "address": [
      {
        "value": "117 University Ave, Palo Alto, CA 94301",
        "metadata": {}
      }
    ],
    "phone": [
      {
        "value": "+14152990341",
        "metadata": {
          "stype": "work",
          "raw_val": "+1 415-299-0341",
          "primary": "true"
        }
      },
      {
        "value": "+15103139867",
        "metadata": { "raw_val": "+1 510-313-9867" }
      }
    ],
    "twhan": [
      {
        "value": "@cavocado",
        "metadata": {}
      }
    ],
    "name": [
      {
        "value": "Cecilia Avocado",
        "metadata": {}
      }
    ],
    "company": [
      {
        "value": "Avocado, Inc.",
        "metadata": {}
      }
    ],
    "title": [
      {
        "value": "CEO",
        "metadata": {}
      }
    ],
    "experience": [
      {
        "value": "Avocado, Inc.",
        "metadata": {
          "company_name": "Avocado, Inc.",
          "job_title": "CEO"
        }
      },
      {
        "value": "IQ.Tempo",
        "metadata": {
          "company_name": "IQ.Tempo",
          "job_title": "VP of Sales"
        }
      }
    ],
    "email": [
      {
        "value": "c.avocado@gmail.com",
        "metadata": {
          "stype": "personal",
          "primary": "false"
        }
      },
      {
        "value": "c.avocado@avocado.com",
        "metadata": {
          "stype": "work",
          "primary": "true"
        }
      }
    ]
  },
  "state": "ACTIVE"
}
```

```ruby
TBD
```

```python
TBD
```
`GET /contacts/{id}`

A GET request which pulls a specific Contact by ID. Contacts can only be queried by Contact ID.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | true | The unique identifier for the Account to be fetched.