## Update a Contact

> Request

```shell
curl 'https://api.salesforceiq.com/v2/contacts/56b12644e4b08b67fd722d75'
  -X PUT
  -u $API_KEY:$API_SECRET
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
id | String (required) | The unique identifier for the Contact to be updated.

### Payload
Parameter | Type | Description
--------- | ------- | -----------
updatedContact | Object | A Contact object which includes only the properties that need to be updated. This object should be included in the body of the request.

### Payload Attributes
Parameter | Type | Description
--------- | ------- | -----------
id | String (required) | UUID of the Contact to be updated.
properties | Object | A collection of Contact properties that include name, email, phone, address, company, tite, experience, liurl (LinkedIn url), twhan (Twitter handle) for a Contact object.