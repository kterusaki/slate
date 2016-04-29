## Create a List Item

> Request

```shell
# Contact-based List
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems'
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "contactIds": ["56f1b2a8e4b0d37eabe91b9d"],
        "fieldValues": {
            "0": [ { "raw": "1" } ],
            "1": [ { "raw": "jmcsales@gmail.com" } ],
            "3": [ { "raw": "1500" } ],      
            "7": [ { "raw": "1" }, { "raw": "3" } ],
            "12": [ { "raw": "t.minutes@modelminutes.com" } ],
            "14": [ { "raw": "Hello World" }],
            "process_close_date": [ { "raw": "1558685591983" }]
        }
      }'

# Account-based List
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems'
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
        "name": "Avocado, Inc.",
        "accountId": "56abd666e4b07f4066b7bcdc",
        "contactIds": [
            "56b12644e4b08b67fd722d75",
            "56f1b2a8e4b0d37eabe91b9d"
        ],
        "fieldValues": {
            "0": [ { "raw": "4" } ],
            "1": [ { "raw": "jmcsales@gmail.com" } ],
            "3": [ { "raw": "2500" } ],
            "process_close_date": [ { "raw": "1558685591983" }]
        }
      }'

```

> Response

```shell
# Contact-based List
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

# Account-based List
HTTP/1.1 200 OK
{
  "id": "56f1db4be4b0336869dce48f",
  "listId": "56f1b185e4b0d37eabe8c2b0",
  "version": 1,
  "createdDate": 1458690891000,
  "modifiedDate": 1458690891433,
  "name": "Avocado, Inc.",
  "accountId": "56abd666e4b07f4066b7bcdc",
  "contactIds": [
    "56b12644e4b08b67fd722d75",
    "56f1b2a8e4b0d37eabe91b9d"
  ],
  "fieldValues": {
    "0": [ { "raw": "4" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "3": [ { "raw": "2500" } ],
    "process_close_date": [ { "raw": "1558685591983" } ],
    "process_created_date": [ { "raw": "1458690891320" } ]
  },
  "linkedItemIds": {}
}
```
`POST /lists/{listId}/listitems`

A POST request which creates a new List Item object and returns the created List Item with it's new ID.

For Contact-based Lists, at least one contactId is required.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
listId | String (required) | The unique identifier for the List to be fetched.


### Payload
Parameter | Type | Description
--------- | ------- | -----------
newListItem | Object (required) | A JSON representation of a List Item, without the id, modifiedDate, or createdDate fields (which will be generated on creation).