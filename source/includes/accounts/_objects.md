# Accounts

Accounts in SalesforceIQ generally represent companies or groups of people. Accounts can have any kind of relationship with your Organization - they could be leads, clients, former clients, or partners of your company.

The API can access all of your Organization’s Accounts, and all Accounts created by the API can be seen by your entire Organization. If you are trying to create an Account within a List please refer to the [List Items (Relationship) API endpoint](#list-items).

## Account Object

> Definition

```shell
{
  "id": "56abd666e4b07f4066b7bcdc",
  "modifiedDate": 1456874998553,
  "name": "Avocado, Inc.",
  "fieldValues": {
    "4": [ { "raw": "avocado@gmail.com" } ],  # Email (Text)
    "6": [ { "raw": "56155a21e4b0fee51b1cb043" } ], # Collaborators (User)
    "12": [ { "raw": "2" } ], # SLA (List)
    "14": [ { "raw": "94" } ],  # CSAT (Number)
    "16": [ { "raw": "2017-02-01" } ],  # Contract End Date (Date)
    "18": [                             # Industry (Picklist)
      { "raw": "0" },
      { "raw": "1" }
    ],
    "address": [ { "raw": "117 University Ave, Palo Alto, CA 94301" } ],  # Address (Location)
    "primary_contact": [ { "raw": "56b11a80e4b0b5663a53403e" } ]  # Primary Contact (Contact)
  }
}
```

```ruby
{ 
  :id=>"56abd666e4b07f4066b7bcdc", 
  :name=>"Avocado, Inc.", 
  :field_values => {    
    :"4" => "avocado@gmail.com",  # Email (Text)
    :"6" => "56155a21e4b0fee51b1cb043", # Collaborators (User)
    :"12" => "2", # SLA (List)
    :"14" => "94",  # CSAT (Number)     
    :"16" => "2017-02-01",  # Contract End Date (Date)
    :"18" => ["0", "1"],  # Industry (Picklist)
    :address => "117 University Ave, Palo Alto, CA 94301", # Address (Location)
    :primary_contact=>"56b11a80e4b0b5663a53403e"  # Primary Contact (Contact)
  }
}
```

```python
{
  "id" : "56abd666e4b07f4066b7bcdc",
  "name" : "Avocado, Inc."
}
```

Parameter | Type | Description
--- | --- | ---
id | String | UUID, created by the system
modifiedDate | Numeric | When the Account was last edited, measured in milliseconds since (UTC) the epoch
name | String | Account name as it will appear in SalesforceIQ
fieldValues | Object | A collection of values for Account Property objects. For details about saving account property data, reference our in-depth explanation of [account properties](#account-properties).