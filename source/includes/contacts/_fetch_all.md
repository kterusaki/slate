## Get All Contacts

> Request

```shell
// Retrieve all Contacts in your Organization
curl 'https://api.salesforceiq.com/v2/contacts'
  -X GET
  -u [API Key]:[API Secret]
  -H 'Accept: application/json'

// Retrive two Contacts by Ids in your Organization
curl 'https://api.salesforceiq.com/v2/contacts?_ids=56b12644e4b08b67fd722d75, 56df75a4e4b03009e48e8e76'
  -X GET
  -u [API Key]:[API Secret]
  -H 'Accept: application/json'

// Retrieve all Contacts where modifiedDate > 1458165069813
curl 'https://api.salesforceiq.com/v2/contacts?modifiedDate=1458165069813'
  -X GET
  -u [API Key]:[API Secret]
  -H 'Accept: application/json'

// Retrieve two Contacts starting at index 1
curl 'https://api.salesforceiq.com/v2/contacts?_start=1&limit=2'
  -X GET
  -u [API Key]:[API Secret]
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

// All Contacts in your Organization
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
    },
    {
      "id": "56df75a4e4b03009e48e8e76",
      "modifiedDate": 1458165069813,
      "requestedIds": [ "56df75a4e4b03009e48e8e76" ],
      "mergedIds": [],
      "properties": {
        "liurl": [
          {
            "value": "https://www.linkedin.com/in/tminutes",
            "metadata": {}
          }
        ],
        "address": [
          {
            "value": "22 E 3rd Ave, San Mateo, CA 94401",
            "metadata": {}
          }
        ],
        "phone": [
          {
            "value": "415763022",
            "metadata": {
              "stype": "work",
              "raw_val": "415763022",
              "primary": "false"
            }
          },
          {
            "value": "+14159365347",
            "metadata": {
              "stype": "mobile",
              "raw_val": "+1 415-936-5347",
              "primary": "true"
            }
          }
        ],
        "twhan": [
          {
            "value": "@tminutes",
            "metadata": {}
          }
        ],
        "name": [
          {
            "value": "Tim Minutes",
            "metadata": {}
          }
        ],
        "experience": [
          {
            "value": "Model Minutes",
            "metadata": {
              "company_name": "Model Minutes",
              "job_title": "CEO"
            }
          },
          {
            "value": "Google",
            "metadata": {
              "company_name": "Google",
              "job_title": "Software Architect"
            }
          }
        ],
        "email": [
          {
            "value": "t.minutes@modelminutes.com",
            "metadata": {
              "stype": "work",
              "primary": "true"
            }
          },
          {
            "value": "tminutes@gmail.com",
            "metadata": {
              "stype": "personal",
              "primary": "false"
            }
          }
        ]
      },
      "state": "ACTIVE"
    },
    {
      "id": "56e9d27de4b0b397dfa971cb",
      "modifiedDate": 1458164995844,
      "requestedIds": [ "56e9d27de4b0b397dfa971cb" ],
      "mergedIds": [],
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
            "metadata": {}
          }
        ]
      },
      "state": "ACTIVE"
    }
  ],
  "nextPage": null
}

// Two Contacts by Ids in your Organization
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
    },
    {
      "id": "56df75a4e4b03009e48e8e76",
      "modifiedDate": 1458165069813,
      "requestedIds": [ "56df75a4e4b03009e48e8e76" ],
      "mergedIds": [],
      "properties": {
        "liurl": [
          {
            "value": "https://www.linkedin.com/in/tminutes",
            "metadata": {}
          }
        ],
        "address": [
          {
            "value": "22 E 3rd Ave, San Mateo, CA 94401",
            "metadata": {}
          }
        ],
        "phone": [
          {
            "value": "415763022",
            "metadata": {
              "stype": "work",
              "raw_val": "415763022",
              "primary": "false"
            }
          },
          {
            "value": "+14159365347",
            "metadata": {
              "stype": "mobile",
              "raw_val": "+1 415-936-5347",
              "primary": "true"
            }
          }
        ],
        "twhan": [
          {
            "value": "@tminutes",
            "metadata": {}
          }
        ],
        "name": [
          {
            "value": "Tim Minutes",
            "metadata": {}
          }
        ],
        "experience": [
          {
            "value": "Model Minutes",
            "metadata": {
              "company_name": "Model Minutes",
              "job_title": "CEO"
            }
          },
          {
            "value": "Google",
            "metadata": {
              "company_name": "Google",
              "job_title": "Software Architect"
            }
          }
        ],
        "email": [
          {
            "value": "t.minutes@modelminutes.com",
            "metadata": {
              "stype": "work",
              "primary": "true"
            }
          },
          {
            "value": "tminutes@gmail.com",
            "metadata": {
              "stype": "personal",
              "primary": "false"
            }
          }
        ]
      },
      "state": "ACTIVE"
    }
  ],
  "nextPage": null
}

// All Contacts where modifiedDate > 1458165069813
{
  "objects": [
    {
      "id": "56df75a4e4b03009e48e8e76",
      "modifiedDate": 1458165069813,
      "requestedIds": null,
      "mergedIds": [],
      "properties": {
        "liurl": [
          {
            "value": "https://www.linkedin.com/in/tminutes",
            "metadata": {}
          }
        ],
        "address": [
          {
            "value": "22 E 3rd Ave, San Mateo, CA 94401",
            "metadata": {}
          }
        ],
        "phone": [
          {
            "value": "415763022",
            "metadata": {
              "stype": "work",
              "raw_val": "415763022",
              "primary": "false"
            }
          },
          {
            "value": "+1 415-936-5347",
            "metadata": {
              "stype": "mobile",
              "raw_val": "+1 415-936-5347",
              "primary": "true"
            }
          }
        ],
        "name": [
          {
            "value": "Tim Minutes",
            "metadata": {}
          }
        ],
        "twhan": [
          {
            "value": "@tminutes",
            "metadata": {}
          }
        ],
        "experience": [
          {
            "value": "Model Minutes",
            "metadata": {
              "company_name": "Model Minutes",
              "job_title": "CEO"
            }
          },
          {
            "value": "Google",
            "metadata": {
              "company_name": "Google",
              "job_title": "Software Architect"
            }
          }
        ],
        "email": [
          {
            "value": "t.minutes@modelminutes.com",
            "metadata": {
              "stype": "work",
              "primary": "true"
            }
          },
          {
            "value": "tminutes@gmail.com",
            "metadata": {
              "stype": "personal",
              "primary": "false"
            }
          }
        ]
      },
      "state": "ACTIVE"
    }
  ],
  "nextPage": null
}

// Two Contacts starting at index 1
{
  "objects": [    
    {
      "id": "56df75a4e4b03009e48e8e76",
      "modifiedDate": 1458165069813,
      "requestedIds": [ "56df75a4e4b03009e48e8e76" ],
      "mergedIds": [],
      "properties": {
        "liurl": [
          {
            "value": "https://www.linkedin.com/in/tminutes",
            "metadata": {}
          }
        ],
        "address": [
          {
            "value": "22 E 3rd Ave, San Mateo, CA 94401",
            "metadata": {}
          }
        ],
        "phone": [
          {
            "value": "415763022",
            "metadata": {
              "stype": "work",
              "raw_val": "415763022",
              "primary": "false"
            }
          },
          {
            "value": "+14159365347",
            "metadata": {
              "stype": "mobile",
              "raw_val": "+1 415-936-5347",
              "primary": "true"
            }
          }
        ],
        "twhan": [
          {
            "value": "@tminutes",
            "metadata": {}
          }
        ],
        "name": [
          {
            "value": "Tim Minutes",
            "metadata": {}
          }
        ],
        "experience": [
          {
            "value": "Model Minutes",
            "metadata": {
              "company_name": "Model Minutes",
              "job_title": "CEO"
            }
          },
          {
            "value": "Google",
            "metadata": {
              "company_name": "Google",
              "job_title": "Software Architect"
            }
          }
        ],
        "email": [
          {
            "value": "t.minutes@modelminutes.com",
            "metadata": {
              "stype": "work",
              "primary": "true"
            }
          },
          {
            "value": "tminutes@gmail.com",
            "metadata": {
              "stype": "personal",
              "primary": "false"
            }
          }
        ]
      },
      "state": "ACTIVE"
    },
    {
      "id": "56e9d27de4b0b397dfa971cb",
      "modifiedDate": 1458164995844,
      "requestedIds": [ "56e9d27de4b0b397dfa971cb" ],
      "mergedIds": [],
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
            "metadata": {}
          }
        ]
      },
      "state": "ACTIVE"
    }
  ],
  "nextPage": null
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
Parameter | Type | Description
--------- | ------- | -----------
_ids | String[] | An optional, comma separated list of Contact identifiers.
_start | Numeric | An optional starting point for the returned page of records (defaults to 0). If you start at 50 you will retrieve records starting at the index 51 to your _limit.
_limit | Numeric | An optional page size for the returned result (defaults to 50, max size is 200).
modifiedDate | Numeric | Fetch all accounts modified at or after this timestamp (in milliseconds since epoch).