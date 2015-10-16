# Accounts

## Account Object

> Definition

```ruby
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

```bash
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

```php
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
id | Text | The Account's unique identifier within SalesforceIQ. ID's are unique alphanumeric strings, 24 characters long created by SalesforceIQ at the time of account creation.
modifiedDate | Numeric | The time this object was last modified, in UTC milliseconds since the epoch. This field is automatically updated when the Account                          is changed and not directly editable.
name | Text | The name of the Account as it will be displayed within SalesforceIQ.
fieldValues | FieldValue{} | A collection of Field Values for this Account, with each value represented as a map from the Account Field's id (To find out which Field name maps to which Field ID, hit the Account Fields object) to that Account Field's value. Field Values are stored as an array of objects which map the key "raw" to it's value. If the field being updated is a Picklist or List, the raw value should be set to the List Option ID rather than the display value of that list option. When creating or updating Accounts, only the fields with values need to be included in the Account object, all other fields will be left unchanged or created with their default value.

## Create an Account

> Request

```bash
curl "http://api.salesforceiq.com/v2/accounts"
    -X POST
    -u [API Key] : [API Secret]
    -H 'Content-Type: application/json'
    -H 'Accept: application/json'
    -d '{
        "name" : "Account"
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
    }'
```

> Response

```bash
HTTP/1.1 200 OK
{
    "id" : "abcdef1234567890abcdef0b",
    "modifiedDate" : 1000000000000,
    "name" : "Wonka Industries",
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


A POST request which creates a new Account object and returns the created Account with its new unique ID.

If you create a new account through the API it will only create new Accounts for unique names. As an example SalesforceIQ Inc and SalesforceIQ Corp will create two separate Accounts.

## Get a Single Account

> Request

```bash
curl 'https://api.salesforceiq.com/v2/accounts/abcdef1234567890abcdef0b'
    -X GET
    -u :[API Secret]
    -H 'Accept: application/json'
```

> Response

```bash
HTTP/1.1 200 OK
{
    "id" : "abcdef1234567890abcdef0b",
    "modifiedDate" : 1389124003573,
    "name" : "Account"
}
```

A GET request which pulls a specific Account by ID. Accounts can only be queried by Account ID.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
id | Text (required) | The unique identifier for the Account to be fetched.


## Get All Accounts

> Request

```ruby
require 'riq'

RIQ.init(ENV['API\_KEY'], ENV['API_SECRET'])
RIQ.Accounts.each do |c|
    puts c
end
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```bash
curl 'https://api.salesforceiq.com/v2/accounts?_start=0&_limit=5'
    -X GET
    -u :[API Secret]
    -H 'Accept: application/json'
```

> Response


```bash
HTTP/1.1 200 OK
{
    "objects" : [
        {
            "id" : "abcdef1234567890abcdef0a",
            "modifiedDate" : 1000000000000,
            "name" : "Account 1"
        },
        {
            "id" : "abcdef1234567890abcdef0b",
            "modifiedDate" : 1000000000000,
            "name" : "Account 2"
        }
    ]
}
```

```ruby
[
    {
        :id=>"56208d5ee4b0ef897e468e0a",
        :properties=> {
            :name=>[{:value=>"Marty Levine", :metadata=>{}}],
            :email=>[{:value=>"mll2525@yahoo.com", :metadata=>{}}]
        }
    }
]
```

This endpoint fetches all Accounts. Responses are paginated, max of 200 at a time.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
_ids | String[] | An optional, comma separated list of Account identifiers.
_start | Numeric | An optional starting point for the returned page of records (defaults to 0). If you start at 50 you will retrieve records starting at the index 51 to your _limit.
_limit | Numeric | An optional page size for the returned result (defaults to 50, max size is 200).
modifiedDate | Numeric | Fetch all accounts modified at or after this timestamp (in milliseconds since epoch).

## Update an Account

> Request

```bash
curl 'https://api.salesforceiq.com/v2/accounts/abcdef1234567890abcdef0b'
    -X PUT
    -u :[API Secret]
    -H 'Content-Type: application/json'
    -H 'Accept: application/json'
    -d '{
        "id" : "abcdef1234567890abcdef0b",
        "name" : "Account 1"
    }'
```

> Response

```bash
HTTP/1.1 200 OK
{
    "id" : "abcdef1234567890abcdef0b",
    "modifiedDate" : 1000000000001,
    "name" : "Account 1"
}
```

A PUT request which updates the details of a specific Account.