# Account Properties

These are a set of values that can apply to every Account in the Organization. Data is stored as a hash of keys and either naked value or id of the picklist value.

If the field being updated is a Picklist, make sure to save the When creating or updating Accounts, only the fields with values need to be included in the Account object, all other fields will be left unchanged or created with their default value.

# Accounts

Accounts in SalesforceIQ represent companies. Accounts can have any kind of relationship with your Organization- they could be leads, clients, former clients, or partners of your company.

The API can access all of your Organization’s Accounts, and all Accounts created by the API are shared with your entire Organization.

## Account Object

> Definition

```ruby
{
    :id => "554ba25ae4b0d60ae8bf32b0", 
    :name => "Bruce Wayne", 
    :field_values => {
        :"3" => "10",
        :"5" => "15"
    }
}
```

```shell
{
    "id" : "5605c007e4b070cf77fe1458",
    "modifiedDate" : "1443217415405",
    "name" : "Initech",
    "fieldValues": {
        "12": [
            {
                "raw": "1"
            }
        ],
        "16": [
            {
                "raw": "2015-03-17"
            }
        ],
        "17": [
            {
                "raw": "Yes"
            }
        ],
        "18": [
            {
                "raw": "2014-09-17"
            }
        ],
        "28": [
            {
                "raw": "1400.00"
            }
        ]
    }
}
```

```python
{
    "id" : "5605c007e4b070cf77fe1458",
    "modifiedDate" : "1443217415405",
    "name" : "Initech",
    "fieldValues": {
        "12": [
            {
                "raw": "1"
            }
        ],
        "16": [
            {
                "raw": "2015-03-17"
            }
        ],
        "17": [
            {
                "raw": "Yes"
            }
        ],
        "18": [
            {
                "raw": "2014-09-17"
            }
        ],
        "28": [
            {
                "raw": "1400.00"
            }
        ]
    }
}
```


Parameter | Type | Description
--- | --- | ---
id | Text | UUID, created by the system
modifiedDate | Numeric | milliseconds since (UTC) epoch
name | Text | Account name as it will appear in SalesforceIQ
fieldValues | Hash | A collection of values for Account Property objects. For details about saving account propery data, see [that section](#account-properties).

