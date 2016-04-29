## Get a Single List Item

> Request

```shell
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems/56f1dcefe4b047357c2c03e6'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
```

> Response

```shell
HTTP/1.1 200 OK
{
  "id": "56f1dcefe4b047357c2c03e6",
  "listId": "56f087b0e4b0584aa39fbba8",
  "version": 1,
  "createdDate": 1458691311000,
  "modifiedDate": 1458691311848,
  "name": "John Clam",
  "accountId": null,
  "contactIds": [ "56f1b2a8e4b0d37eabe91b9d" ],
  "fieldValues": {
    "0": [ { "raw": "1" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "3": [ { "raw": "1500" } ],
    "7": [ 
      { "raw": "1" },
      { "raw": "3" }
    ],
    "12": [ { "raw": "56df75a4e4b03009e48e8e76" } ],
    "14": [ { "raw": "Hello World" } ],
    "process_close_date": [ { "raw": "1558685591983" } ],
    "process_created_date": [ { "raw": "1458691311706" } ]
  },
  "linkedItemIds": {
    "5660e898e4b08148fc41667f.contacts": [
      { "itemId": "56f1b2a8e4b0d37eabe91b9d" }
    ]
  }
}
```
`GET /lists/{listId}/listitems/{listItemId}`

A GET request to a specified List which fetches a single List Item by it's unique identifier.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
listId | String (required) | UUID for the List to be fetched.
listItemId | String (required) | UUID for the List Item to be fetched.