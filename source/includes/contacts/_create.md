## Create a Contact

>Request

```shell
curl 'https://api.salesforceiq.com/v2/contacts'
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{      
        "properties": {
          "liurl": [ { "value": "https://www.linkedin.com/in/cavocado" } ],
          "address": [ { "value": "117 University Ave, Palo Alto, CA 94301" } ],
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
              "metadata": {
                "raw_val": "+1 510-313-9867"
              }
            }
          ],
          "twhan": [ { "value": "@cavocado" } ],
          "name": [ { "value": "Cecilia Avocado" } ],
          "company": [ { "value": "Avocado, Inc." } ],
          "title": [ { "value": "CEO", } ],
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
        }
      }'
```

```ruby
require 'riq'

contact = RIQ.contact()
contact.add('name', 'Cecilia Avocado')
contact.add('address', '117 University Ave, Palo Alto, CA 94301')
contact.add('phone', ['14152990341', '15103139867'])
contact.save

puts contact.name
puts contact.address
puts contact.phone
```

```python
```

>Response

```shell
{
  "id": "56b12644e4b08b67fd722d75",
  "modifiedDate": 1457564297403,
  "requestedIds": [
    "56b11a80e4b0b5663a53403e"
  ],
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
        "metadata": {
          "raw_val": "+1 510-313-9867"
        }
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
Cecilia Avocado
117 University Ave, Palo Alto, CA 94301
14152990341
15103139867
```

```python
TBD
```
`POST /contacts`

A POST request which creates a new Contact object and returns the created Contact with its new unique ID.

### Payload
Parameter | Type | Description
--------- | ------- | -----------
newContact | Object (required) | A JSON representation of a Contact, without the id or modifiedDate fields (which will be generated on creation).