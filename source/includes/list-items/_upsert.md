## Upsert a List Item

> Request

```shell
# Upsert a List Item by contactIds
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems?_upsert=contactIds'
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "name": "Cecilia Avocado",
        "contactIds": ["56b12644e4b08b67fd722d75"],
        "fieldValues": {
          "0": [ { "raw": "5" }]
        }
      }'

# Upsert a List Item by accountId
curl 'https://api.salesforceiq.com/v2/lists/56f1b185e4b0d37eabe8c2b0/listitems?_upsert=accountId'
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "accountId": "56abd666e4b07f4066b7bcdc"
        "fieldValues": {
          "0": [ { "raw": "3" }]
        }
      }'  
```

> Response

```shell
# Upserted List Item by contactIds
{
  "id": "56f99519e4b0c3f938097ceb",
  "listId": "56f1b185e4b0d37eabe8c2b0",
  "version": 1,
  "createdDate": 1459197209000,
  "modifiedDate": 1459197209579,
  "name": "Avocado, Inc.",
  "accountId": "56abd666e4b07f4066b7bcdc",
  "contactIds": [
    "56f1b2a8e4b0d37eabe91b9d",
    "56b12644e4b08b67fd722d75"
  ],
  "fieldValues": {
    "0": [ { "raw": "5" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "3": [ { "raw": "2500" } ],
    "process_close_date": [ { "raw": "1558685591983" } ],
    "process_created_date": [ { "raw": "1458690891320" } ]
  },
  "linkedItemIds": {}
}

# Upserted List Item by accountId
{
  "id": "56f1b20ee4b0d37eabe8e15f",
  "listId": "56f1b185e4b0d37eabe8c2b0",
  "version": 1,
  "createdDate": 1458680334000,
  "modifiedDate": 1459184818410,
  "name": "Avocado, Inc.",
  "accountId": "56abd666e4b07f4066b7bcdc",
  "contactIds": [
    "56f1b2a8e4b0d37eabe91b9d",
    "56b12644e4b08b67fd722d75"
  ],
  "fieldValues": {
    "0": [ { "raw": "3" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "process_close_date": [ { "raw": "1459183098119" } ],
    "process_created_date": [ { "raw": "1458680334831" } ]
  },
  "linkedItemIds": {}
}
```
`POST /lists/{listId}/listitems/{listItemId}`

A POST request which updates/inserts the details of a List Item.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
listId | String (required) | UUID for the List to be fetched.
listItemId | String (required) | UUID for the List Item to be updated
_upsert | String (required) | The String literal 'contactIds' or 'accountId'

### Payload
Parameter | Type | Description
--------- | ------- | -----------
listItem | Object (required) | A JSON representation of a List Item, without the id, modifiedDate, or createdDate fields (which will be generated on creation).

### Payload Attributes
Parameter | Type | Description
--------- | ------- | -----------
accountId | String (required for upsert by accountId) | UUID for the Account of the List Item
contactIds | String\[\] (required for upsert by contactIds) | An array of unique identifiers for the Points of Contact of an Account or a Contact