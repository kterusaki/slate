## Get All List Items

> Request

```shell
# Request first 50 List Items on a List
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'

# Request a set of List Items on a List based on an array of Ids
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems?_ids=56f1dcefe4b047357c2c03e6,56f1b645e4b0d37eabea22b0'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'

# Request List Items modified after 1458691311848
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems?modifiedDate=1458691311848'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'

# Request all List Items by contactIds (Account-based List)
curl 'https://api.salesforceiq.com/v2/lists/56f1b185e4b0d37eabe8c2b0/listitems?contactIds=56b12644e4b08b67fd722d75'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'

# Request all List Items by accountIds (Account-based List)
curl 'https://api.salesforceiq.com/v2/lists/56f1b185e4b0d37eabe8c2b0/listitems?accountIds=56abd666e4b07f4066b7bcdc'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'

# Paginating

# Retrieve the First Page
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems?_start=0&_limit=200'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'

# Retrieve the Second Page
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems?_start=200&_limit=200'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
```

> Response

```shell
HTTP/1.1 200 OK
{
  "totalSize": 0,
  "offset": 0,
  "limit": 0,
  "queryId": null,
  "objects": [
    {
      "id": "56f1b645e4b0d37eabea22b0",
      "listId": "56f087b0e4b0584aa39fbba8",
      "version": 2,
      "createdDate": 1458681413000,
      "modifiedDate": 1458685100530,
      "name": "Cecilia Avocado",
      "accountId": null,
      "contactIds": [ "56b12644e4b08b67fd722d75" ],
      "fieldValues": {
        "0": [ { "raw": "0" } ],
        "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
        "6": [ { "raw": "03397194-1219-431c-a055-bc03a1d70cef" } ],
        "8": [ { "raw": "http://linkedin.com/in/cavocado" } ],
        "9": [ { "raw": "+14152990341" } ],
        "10": [ { "raw": "Avocado, Inc." } ],
        "process_close_date": [ { "raw": "1461273413819" } ],
        "process_created_date": [ { "raw": "1458681413819" } ]
      },
      "linkedItemIds": {
        "5660e898e4b08148fc41667f.contacts": [ { "itemId": "56b12644e4b08b67fd722d75" } ]
      }
    },
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
        "5660e898e4b08148fc41667f.contacts": [ { "itemId": "56f1b2a8e4b0d37eabe91b9d" } ]
      }
    },
    {
      "id": "56f4623be4b07e586ec446da",
      "listId": "56f087b0e4b0584aa39fbba8",
      "version": 1,
      "createdDate": 1458856507000,
      "modifiedDate": 1458456507164,
      "name": "Tim Minutes",
      "accountId": null,
      "contactIds": [
        "56df75a4e4b03009e48e8e76"
      ],
      "fieldValues": {
        "0": [ { "raw": "0" } ],
        "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
        "8": [ { "raw": "https://www.linkedin.com/in/tminutes" } ],
        "9": [ { "raw": "+14159365347" } ],
        "10": [ { "raw": "Model Minutes" } ],
        "process_close_date": [ { "raw": "1461448507176" } ],
        "process_created_date": [ { "raw": "1458856507176" } ]
      },
      "linkedItemIds": {
        "5660e898e4b08148fc41667f.contacts": [ { "itemId": "56df75a4e4b03009e48e8e76" } ]
      }
    }
  ],
  "size": 0,
  "errorSize": 0
}
```
`GET /lists/{listId}/listitems/`

Fetches a paginated collection of all of Items on a specified List.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
_ids | String[] | false | An optional, comma separated list of List Item identifiers.
_start | Numeric | false | An optional starting point for the returned page of records (defaults to 0).
_limit | Numeric | false | An optional page size for the returned result (defaults to 50, max size is 200).
modifiedDate | Numeric | false |Fetch all List Items modified at or after this timestamp (in milliseconds since epoch).
contactIds | String[] | false | An optional, comma separated list of contact identifiers.
accountIds | String[] | false | An optional, comma separated list of account identifiers. 