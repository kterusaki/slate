# List Items

A List Item is a row in a List. You can think about a List Item as a Contact (person) or an Account (company) who is being actively tracked as part of a List (process).

For example, your Organization may have a List of several sales leads. Each row (List Item/Relationship) in the List represents a lead. Each column describes an attribute of that lead (Field Values).

Any User who has access to edit List properties (depending on your admin controls) can create custom List fields through the UI. If you need to add a field to a List and you don’t have UI access, please contact an admin in your Organization.

Any changes to List Item status or other reportable fields in the List schema will be reflected in reporting.

## List Item Object

> Definition

```shell
# Contact-based List Item
{
  "id": "56f1b645e4b0d37eabea22b0",
  "listId": "56f087b0e4b0584aa39fbba8",
  "version": 1,
  "createdDate": 1458681413000,
  "modifiedDate": 1458681413814,
  "name": "Cecilia Avocado",
  "accountId": null,
  "contactIds": [
    "56b12644e4b08b67fd722d75"
  ],
  "fieldValues": {
    "0": [ { "raw": "0" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "8": [ { "raw": "http://linkedin.com/test" } ],
    "9": [ 
      { "raw": "+14152990341" }, 
      { "raw": "+15103139867" }
    ],
    "10": [ { "raw": "Avocado, Inc." } ],
    "process_close_date": [ { "raw": "1461273413819" } ],
    "process_created_date": [ { "raw": "1458681413819" } ]
  },
  "linkedItemIds": {
    "5660e898e4b08148fc41667f.contacts": [ { "itemId": "56b12644e4b08b67fd722d75" } ]
  }
}

# Account-based List Item
{
  "id": "56f1b20ee4b0d37eabe8e15f",
  "listId": "56f1b185e4b0d37eabe8c2b0",
  "version": 1,
  "createdDate": 1458680334000,
  "modifiedDate": 1458680509693,
  "name": "Avocado, Inc.",
  "accountId": "56abd666e4b07f4066b7bcdc",
  "contactIds": [
    "56f1b2a8e4b0d37eabe91b9d",
    "56b12644e4b08b67fd722d75"
  ],
  "fieldValues": {
    "0": [ { "raw": "0" } ],
    "1": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "process_close_date": [ { "raw": "1461272334831" } ],
    "process_created_date": [ { "raw": "1458680334831" } ]
  },
  "linkedItemIds": {}
}
```

Parameter | Type | Description
--- | --- | ---
id | String | UUID, The List's unique identifier within SalesforceIQ. ID's are unique alphanumeric strings, 24 characters long.
modifiedDate | Numeric | The time this object was last modified, in UTC milliseconds past the epoch. This field is automatically updated by writing queries and not directly editable.
createdDate | Numeric | The time this object was originally added to the List, in UTC milliseconds past the epoch. This field is automatically set when the entry is created and not directly editable.
listId | String | UUID for the List to which this Item belongs. ID's are unique alphanumeric strings, 24 characters long.
accountId | String | If this is on an Account List, this field will store the unique identifier for the Account tied to this entry. Otherwise it will be unused.
contactIds | String[] | This field will store an array of Contact identifiers associated with this entry if it is an Account List, or the single Contact for the entry if it is a Contact List.
name | String | List Items can have a separate display name within the list to differentiate the entry or add more information about that item. If this value is not defined, the name displayed will correspond to the type of List - using the Account's name if it is an Account based List, otherwise using the Contact's name.
fieldValues | String[] | A collection of Field definitions that are associated with the List. These Fields are stored as an array of Field objects, with each Field a mapping of an id, display name, and (in the case of pick list fields) an array of listOptions. The Field's id is a string containing the index of that field in the order they were created; these ids are used to map fields to their values within List Items. The listOptions property maps to an array of option objects, each containing an option id and the display value of that option. When setting the value of these types of fields, these list fields need to be set to this ID rather than their display value.
linkedItemIds | Object | This field linkedItemIds are used when linking data from other lists, accounts, or integrations into a particular list. This functionality will be expanded upon in a later release.