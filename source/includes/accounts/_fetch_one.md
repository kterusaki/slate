## Get a Single Account

> Request

```shell
curl 'https://api.salesforceiq.com/v2/accounts/56abd666e4b07f4066b7bcdc'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'
```

```ruby
require 'riq'

RIQ.init(ENV['API_KEY'], ENV['API_SECRET'])

a = RIQ.account('56abd666e4b07f4066b7bcdc')
puts a.data
```

```python
from relateiq.client import RelateIQ
from relateiq.accounts import Account

RelateIQ("[API Key]", "[API Secret]")

account = Account('56abd666e4b07f4066b7bcdc')
print account
```

> Response

```shell
HTTP/1.1 200 OK
{
  "id": "56abd666e4b07f4066b7bcdc",
  "modifiedDate": 1456874998553,
  "name": "Avocado, Inc.",
  "fieldValues": {
    "2": [ { "raw": "0" } ],                       
    "4": [ { "raw": "avocado@gmail.com" } ],
    "6": [ { "raw": "56155a21e4b0fee51b1cb043" } ],
    "12": [ { "raw": "2" } ],
    "14": [ { "raw": "94" } ],
    "16": [ { "raw": "2017-02-01" } ],
    "18": [ 
      { "raw": "0" },
      { "raw": "1" }
    ],
    "address": [ { "raw": "117 University Ave, Palo Alto, CA 94301" } ],
    "primary_contact": [ { "raw": "56b11a80e4b0b5663a53403e@Cecilia Avocado" } ]
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
    :primary_contact=>"56b11a80e4b0b5663a53403e@Cecilia Avocado"
  }
}
```

```python
{
  "id" : "56abd666e4b07f4066b7bcdc",
  "name" : "Avocado, Inc."
}
```

`GET /accounts/{id}`

A GET request which pulls a specific Account by ID. Accounts can only be queried by Account ID.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | true | UUID of the Account to be fetched.