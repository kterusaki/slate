# Lists

A List is an object that can be created and customized by a User to represent Accounts (companies) or Contacts (people) in a process (such as a sales pipeline). Each list has various Fields (columns) associated with them. 

A List Item is a relationship within your lists and are represented as a row in your SalesforceIQ list. Each List Item has values associated with the Fields (columns) called Field Values. For more information about List Items, go to this [section](#list-items).

A List can either be a Contact-based List or an Account-based List, but not both. Account-based Lists may have multiple Contacts (Points of Contact) associated with each List Item. Contact-based Lists may only have one Contact associated with each List Item.

The List endpoint provides metadata for the list (id, title, listType) including an array of field objects with corresponding field metadata (id, name, dataType etc.). Use this endpoint to intepret the Field Values of List Items.

Additionally, use this endpoint to retrieve the appropriate listOption ids if you are trying to interpret or update list-type or picklist-type fields.

## List Object

> Definition

```shell
# Contact-based List
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

# Account-based list
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
}
```

Parameter | Type | Description
--- | --- | ---
id | String | UUID, The List's unique identifier within SalesforceIQ. ID's are unique alphanumeric strings, 24 characters long.
modifiedDate | Numeric | The time this object was last modified, in UTC milliseconds past the epoch. This field is automatically updated by writing queries and not directly editable.
title | String | The title of the List as it will be displayed within SalesforceIQ.
listType | String | The type of relationships this list manages. Lists are either Contact-based lists which support only one Contact ID per List Item and no Account ID, or Account-based lists where each List Item has a mapped Account ID and one or more Contact IDs. For certain clients there is a legacy type 'both' which accepts either format, but this functionality has been deprecated for all new Lists and is no longer supported.
fields | Object[] | A collection of Field definitions that are associated with the List. These Fields are stored as an array of Field objects, with each Field a mapping of an id, display name, and (in the case of pick list fields) an array of listOptions. The Field's id is a string containing the index of that field in the order they were created; these ids are used to map fields to their values within List Items. The listOptions property maps to an array of option objects, each containing an option id and the display value of that option. When setting the value of these types of fields, these list fields need to be set to this ID rather than their display value.