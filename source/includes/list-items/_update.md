## Update a List Item

> Request

```shell

# Updating a List Item (Contact-based List)
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems/56f1b645e4b0d37eabea22b0'
  -X PUT
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "fieldValues": {
          "0": [ { "raw": "5" }]
        }
      }'

# Updating a List Item (Account-based List)
curl 'https://api.salesforceiq.com/v2/lists/56f1b185e4b0d37eabe8c2b0/listitems/56f1b20ee4b0d37eabe8e15f'
  -X PUT
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "fieldValues": {
          "0": [ { "raw": "5" } ]
        }
      }'
```

> Response

```shell
# Updating a List Item (Contact-based List)
HTTP/1.1 200 OK
{
  "id": "56f1b645e4b0d37eabea22b0",
  "listId": "56f087b0e4b0584aa39fbba8",
  "version": 2,
  "createdDate": 1458681413000,
  "modifiedDate": 1458864805968,
  "name": "Cecilia Avocado",
  "accountId": null,
  "contactIds": [
    "56b12644e4b08b67fd722d75"
  ],
  "fieldValues": {
    "0": [ { "raw": "5" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "6": [ { "raw": "03397194-1219-431c-a055-bc03a1d70cef" } ],
    "8": [ { "raw": "http://linkedin.com/cavocado" } ],
    "9": [ { "raw": "+14152990341" } ],
    "10": [ { "raw": "Avocado, Inc." } ],
    "process_close_date": [ { "raw": "1461273413819" } ],
    "process_created_date": [ { "raw": "1458681413819" } ]
  },
  "linkedItemIds": {
    "5660e898e4b08148fc41667f.contacts": [ { "itemId": "56b12644e4b08b67fd722d75" } ]
  }
}

# Updating a List Item (Account-based List)
HTTP/1.1 200 OK
{
  "id": "56f1b20ee4b0d37eabe8e15f",
  "listId": "56f1b185e4b0d37eabe8c2b0",
  "version": 1,
  "createdDate": 1458680334000,
  "modifiedDate": 1458931299914,
  "name": "Avocado, Inc.",
  "accountId": "56abd666e4b07f4066b7bcdc",
  "contactIds": [
    "56f1b2a8e4b0d37eabe91b9d",
    "56b12644e4b08b67fd722d75"
  ],
  "fieldValues": {
    "0": [ { "raw": "5" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "process_close_date": [ { "raw": "1461272334831" } ],
    "process_created_date": [ { "raw": "1458680334831" } ]
  },
  "linkedItemIds": {}
}
```
`PUT /lists/{listId}/listitems/{listItemId}`

A PUT request which updates the details of a specific List Item.

Note: If you want to add a Point of Contact to a list item, you need to append the contactId to the existing contactIds array.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
listId | String | true | UUID for the List to be fetched.
listItemId | String | true | UUID for the List Item to be updated

### Payload
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
listItem | Object | true | A JSON representation of a List Item, without the id, modifiedDate, or createdDate fields (which will be generated on creation).