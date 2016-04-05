## Get a Single List

> Request

```shell
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'
```

> Response

```shell
{
  "id": "56f087b0e4b0584aa39fbba8",
  "title": "Leads",
  "listType": "contact",
  "modifiedDate": 0,
  "fields": [
    {
      "id": "led",
      "name": "Last Event Date (sort)",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "DateTime"
    },
    {
      "id": "process_created_date",
      "name": "Created Date",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "DateTime"
    },
    {
      "id": "0",
      "name": "Status",
      "listOptions": [
        {
          "id": "0",
          "display": "Lead"
        },
        {
          "id": "1",
          "display": "Qualified"
        },
        {
          "id": "2",
          "display": "Negotiation"
        },
        {
          "id": "3",
          "display": "Verbal Commitment"
        },
        {
          "id": "4",
          "display": "Deal Won"
        },
        {
          "id": "5",
          "display": "Revisit Later"
        },
        {
          "id": "6",
          "display": "Deal Lost"
        }
      ],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "List"
    },
    {
      "id": "process_close_date",
      "name": "Close Date",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "DateTime"
    },
    {
      "id": "3",
      "name": "Revenue",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "Numeric"
    },
    {
      "id": "1",
      "name": "Owner",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "User"
    },
    {
      "id": "6",
      "name": "Contract",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "File"
    },
    {
      "id": "7",
      "name": "Products",
      "listOptions": [
        {
          "id": "0",
          "display": "Aria"
        },
        {
          "id": "1",
          "display": "Charge"
        },
        {
          "id": "2",
          "display": "Charge HR"
        },
        {
          "id": "3",
          "display": "Blaze"
        }
      ],
      "isMultiSelect": true,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "List"
    },
    {
      "id": "9",
      "name": "Phone",
      "listOptions": [],
      "isMultiSelect": true,
      "isEditable": false,
      "isLinkedField": true,
      "dataType": "Phone"
    },
    {
      "id": "8",
      "name": "LinkedIn URL",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": false,
      "isLinkedField": true,
      "dataType": "LinkedIn"
    },
    {
      "id": "10",
      "name": "Current Company",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": false,
      "isLinkedField": true,
      "dataType": "Text"
    },
    {
      "id": "12",
      "name": "Referer",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "Contact"
    },
    {
      "id": "14",
      "name": "Notes",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "isLinkedField": false,
      "dataType": "Text"
    }
  ],
  "size": 0
}
```
`GET /lists/{id}`

A GET request which fetches a single List by its unique identifier.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
id | String (required) | UUID for the List to be fetched.