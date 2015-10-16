## Create an Account

> Request

```shell
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

```ruby 
require 'riq'
RIQ.init(ENV['API_KEY'], ENV['API_SECRET'])

a = RIQ.account
a.name = 'Bruce Wayne'
a.field_value(3, 'Batmobile')
a.save
```

> Response

```shell
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

```ruby
a.data == {
    :id => "554ba25ae4b0d60ae8bf32b0", 
    :name => "Bruce Wayne", 
    :field_values => {
        :"3" => "10",
        :"5" => "15"
    }
}
```

`POST /accounts`

A POST request which creates a new Account object and returns the created Account with its new unique ID.

If you create a new account through the API it will only create new Accounts for unique names.