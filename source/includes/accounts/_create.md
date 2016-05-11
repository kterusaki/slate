## Create an Account

> Request

```shell
curl "http://api.salesforceiq.com/v2/accounts"
  -X POST
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{ 
        "name": "Avocado, Inc.",
        "fieldValues": { 
          "address": [ { "raw": "502 Emerson St, Palo Alto, CA 94301" } ],
          "primary_contact": [{"raw": "56b11a80e4b0b5663a53403e"}],
          "2": [ { "raw": "CEO" } ],
          "6": [ { "raw": "jmcsales@sales.com" } ],
          "12": [ { "raw": "2" } ],
          "14": [ { "raw": "93" } ],
          "16": [ { "raw": "2017-2-1" } ],
          "18": [ 
            { "raw": "0" }, 
            { "raw": "1" } 
          ]
        }
      }'
```

```ruby 
require 'riq'

RIQ.init(ENV['API_KEY'], ENV['API_SECRET'])

a = RIQ.account
a.name = 'Avocado, Inc.'
a.field_value('address', '502 Emerson St, Palo Alto, CA 94301')
a.field_value('primary_contact', 'c.avacado@avocado.com')
a.field_value(2, 'CEO')
a.field_value(6, 'jmcsales@sales.com')
a.field_value(12, 2)
a.field_value(14, 93)
a.field_value(16, '2017-2-1')
a.field_value(18, ['1', '2']) # Not possible via ruby wrapper
a.save

puts a.data
```

```python
from relateiq.client import RelateIQ
from relateiq.accounts import Account

RelateIQ("[API Key]", "[API Secret]")
account = Account()
account.name('Avocado, Inc.')
account.create()

print account
```

> Response

```shell
HTTP/1.1 200 OK
{
  "id": "56abd666e4b07f4066b7bcdc",
  "name": "Avocado, Inc.",
  "fieldValues": { 
    "address": [ { "raw": "502 Emerson St, Palo Alto, CA 94301" } ],
    "primary_contact": [{"raw": "56b11a80e4b0b5663a53403e"}],
    "2": [ { "raw": "CEO" } ],
    "6": [ { "raw": "jmcsales@sales.com" } ],
    "12": [ { "raw": "2" } ],
    "14": [ { "raw": "93" } ],
    "16": [ { "raw": "2017-2-1" } ],
    "18": [ 
      { "raw": "0" }, 
      { "raw": "1" } 
    ]
  }
}
```

```ruby
{ 
  :id=>"56abd666e4b07f4066b7bcdc", 
  :name=>"Avocado, Inc.", 
  :field_values => {    
    :"2" => "0", 
    :"4" => "avocado@gmail.com", 
    :"6" => "56155a21e4b0fee51b1cb043",     
    :"12" => "2", 
    :"14" => "94",     
    :"16" => "2017-02-01",     
    :"18" => ["0", "1"], 
    :address => "117 University Ave, Palo Alto, CA 94301", 
    :primary_contact=>"56b11a80e4b0b5663a53403e"
  }
}
```

```python
{
  "id" : "56abd666e4b07f4066b7bcdc",
  "name" : "Avocado, Inc."
}
```
`POST /accounts`

A POST request which creates a new Account object and returns the created Account with its new unique ID.

The API will de-dupe any Accounts by name. In other words, if you attempt to POST with an Account name that already exists in your SalesforceIQ Instance, the request will update field values on the existing Account with any new data that you're passing in your POST, but will not create a net new Account

### Payload
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
newAccount | Object | true | A JSON representation of an Account, without the id or modifiedDate fields (which will be generated on creation).

### Payload Attributes
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
name | String | true | The name of the Account to be created.
fieldValues | Object | false | A collection of values for Account Property objects. For details about saving account propery data, see [that section](#account-properties).