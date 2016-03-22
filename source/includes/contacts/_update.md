## Update a Contact

> Request

```shell
curl 'https://api.salesforceiq.com/v2/contacts/56b12644e4b08b67fd722d75'
  -X PUT
  -u [API Key]:[API Secret]
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "id": "56b12644e4b08b67fd722d75", // required
        "properties": {
          "email": [
            {
              "value": "c.avocado@gmail.com",
              "metadata": {
                "stype": "personal",
                "primary": "true"
              }
            },
            {
              "value": "c.avocado@avocado.com",
              "metadata": {
                "stype": "work",
                "primary": "false"
              }
            }
          ]
        }
      }'
```
{
  "id": "56b12644e4b08b67fd722d75",
  "modifiedDate": 1458168762562,
  "requestedIds": [
    "56b11a80e4b0b5663a53403e"
  ],
  "mergedIds": null,
  "properties": {
    "email": [
      {
        "value": "c.avocado@gmail.com",
        "metadata": {
          "stype": "personal",
          "primary": "true"
        }
      },
      {
        "value": "c.avocado@avocado.com",
        "metadata": {
          "stype": "work",
          "primary": "false"
        }
      }
    ]
  },
  "state": "ACTIVE"
}

> Response

```shell
{
  "id": "56b12644e4b08b67fd722d75",
  "modifiedDate": 1458168762562,
  "requestedIds": null,
  "mergedIds": null,
  "properties": {
    "email": [
      {
        "value": "c.avocado@gmail.com",
        "metadata": {
          "stype": "personal",
          "primary": "true"
        }
      },
      {
        "value": "c.avocado@avocado.com",
        "metadata": {
          "stype": "work",
          "primary": "false"
        }
      }
    ]
  },
  "state": "ACTIVE"
}
```
`PUT /contacts/{id}`

A PUT request which updates the details of a specific Contact.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
id | Text (required) | The unique identifier for the Contact to be updated.

### Payload
Parameter | Type | Description
--------- | ------- | -----------
updatedContact | Object | A JSON representation of a Contact object including any updated Contact data should be included in the body of the request. The id attribute is required in the Contact object.
