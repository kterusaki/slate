## Get All Contacts

> Request

```shell
# Retrieve all Contacts in your Organization
curl 'https://api.salesforceiq.com/v2/contacts'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrive two Contacts by Ids in your Organization
curl 'https://api.salesforceiq.com/v2/contacts?_ids=56b12644e4b08b67fd722d75, 56df75a4e4b03009e48e8e76'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve all Contacts where modifiedDate > 1458165069813
curl 'https://api.salesforceiq.com/v2/contacts?modifiedDate=1458165069813'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve two Contacts starting at index 1
curl 'https://api.salesforceiq.com/v2/contacts?_start=1&limit=2'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve Contacts by email address
curl 'https://api.salesforceiq.com/v2/contacts?properties.email="c.avocado@avocado.com"
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve Contacts by phone number
curl 'https://api.salesforceiq.com/v2/contacts?properties.phone="14152990341"
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
  "objects": [
    {
      "id": "56b12644e4b08b67fd722d75",
      "modifiedDate": 1457564297403,
      "requestedIds": [ "56b12644e4b08b67fd722d75" ],
      "mergedIds": [ "56b11a80e4b0b5663a53403e" ],
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
  ]
}
```

```ruby
TBD
```

```python
TBD
```
`GET /contacts`

This endpoint fetches all Contacts. Responses are paginated, max of 200 at a time.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
_ids | String[] | false | An optional, comma separated list of Contact identifiers.
_start | Numeric | false | An optional starting point for the returned page of records (defaults to 0). If you start at 50 you will retrieve records starting at the index 51 to your _limit.
_limit | Numeric | false | An optional page size for the returned result (defaults to 50, max size is 200).
modifiedDate | Numeric | false | Fetch all accounts modified at or after this timestamp (in milliseconds since epoch).