## Get All Lists

> Request

```shell
# Retrieve all Lists in your Organization
curl 'https://api.salesforceiq.com/v2/lists'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve two Lists starting at index 1
curl 'https://api.salesforceiq.com/v2/lists?_start=1&_limit=2'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'
```

> Response

```shell
# Retrieve all Lists in your Organization
{
  "objects": [
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
    },
    {
      "id": "56f1b185e4b0d37eabe8c2b0",
      "title": "Customers",
      "listType": "account",
      "modifiedDate": 0,
      "fields": [
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
          "id": "process_created_date",
          "name": "Created Date",
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
          "id": "led",
          "name": "Last Event Date (sort)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": true,
          "isLinkedField": false,
          "dataType": "DateTime"
        }
      ],
      "size": 0
    },
    {
      "id": "5672e3b8e4b071e7d1c0b100",
      "title": "Opportunities",
      "listType": "account",
      "modifiedDate": 0,
      "fields": [
        {
          "id": "0",
          "name": "Status",
          "listOptions": [
            {
              "id": "0",
              "display": "Identifying Opportunity"
            },
            {
              "id": "1",
              "display": "Determining Problem, Impact, Ideal"
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
          "id": "led",
          "name": "Last Event Date (sort)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": true,
          "isLinkedField": false,
          "dataType": "DateTime"
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
          "id": "process_created_date",
          "name": "Created Date",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": true,
          "isLinkedField": false,
          "dataType": "DateTime"
        },
        {
          "id": "6",
          "name": "Inactive (days)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": false,
          "isLinkedField": false,
          "dataType": "Numeric"
        },
        {
          "id": "25",
          "name": "All Time (events)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": false,
          "isLinkedField": false,
          "dataType": "Numeric"
        }
      ],
      "size": 0
    }
  ],
  "nextPage": null
}

# Retrieve two Lists starting at index 1
{ 
  "objects": [
    {
      "id": "56f1b185e4b0d37eabe8c2b0",
      "title": "Customers",
      "listType": "account",
      "modifiedDate": 0,
      "fields": [
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
          "id": "process_created_date",
          "name": "Created Date",
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
          "id": "led",
          "name": "Last Event Date (sort)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": true,
          "isLinkedField": false,
          "dataType": "DateTime"
        }
      ],
      "size": 0
    },
    {
      "id": "5672e3b8e4b071e7d1c0b100",
      "title": "Opportunities",
      "listType": "account",
      "modifiedDate": 0,
      "fields": [
        {
          "id": "0",
          "name": "Status",
          "listOptions": [
            {
              "id": "0",
              "display": "Identifying Opportunity"
            },
            {
              "id": "1",
              "display": "Determining Problem, Impact, Ideal"
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
          "id": "led",
          "name": "Last Event Date (sort)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": true,
          "isLinkedField": false,
          "dataType": "DateTime"
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
          "id": "process_created_date",
          "name": "Created Date",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": true,
          "isLinkedField": false,
          "dataType": "DateTime"
        },
        {
          "id": "6",
          "name": "Inactive (days)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": false,
          "isLinkedField": false,
          "dataType": "Numeric"
        },
        {
          "id": "25",
          "name": "All Time (events)",
          "listOptions": [],
          "isMultiSelect": false,
          "isEditable": false,
          "isLinkedField": false,
          "dataType": "Numeric"
        }
      ],
      "size": 0
    }
  ],
  "nextPage": null
}
```
`GET /lists`

Retrieve a paginated collection of all Lists in your Organization.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
_ids | String[] | An optional, comma separated list of List identifiers.
_start | Numeric | An optional starting point for the returned page of records (defaults to 0). If you start at 5 you will retrieve records starting at the index 6 to your _limit.
_limit | Numeric | An optional page size for the returned result (defaults to 50, max size is 200).