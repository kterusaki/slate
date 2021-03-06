## Get All Accounts

> Request

```shell
# Retrieve the first 50 Account in your Organization
curl 'https://api.salesforceiq.com/v2/accounts'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve two Accounts by Ids in your Organization
curl 'https://api.salesforceiq.com/v2/accounts?_ids=56abd666e4b07f4066b7bcdc, 56b3acf5e4b0a8f6a0711488'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'

# Retrieve all Accounts where modifiedDate > 1456874990000
curl 'https://api.salesforceiq.com/v2/accounts?modifiedDate=1456874990000'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json' 

# Retrieve two Accounts starting at index 1 
curl 'https://api.salesforceiq.com/v2/accounts?_start=1&_limit=2'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json' 
```

```ruby
require 'riq'

RIQ.init(ENV['API_KEY'], ENV['API_SECRET'])

# Retrieve the first 50 Account ins your Organization
RIQ.accounts.each do |a|
  puts a.data
end

# Retrieve two Accounts by Ids in your Organization
accounts = RIQ.accounts({:_ids = > ['56abd666e4b07f4066b7bcdc', '56b3acf5e4b0a8f6a0711488']})
accounts.each do |a|
  puts a.data
end

# Retrieve all Accounts where modifiedDate > 1456874990000
accounts = RIQ.accounts({ :modifiedDate => "1456874990000" })
accounts.each do |a|
  puts a.data
end

# Retrieve two Accounts starting at index 1
accounts = RIQ.accounts({ :_start => "1", :_limit => "2" })
accounts.each do |a|
  puts a.data
end
```

```python
from relateiq.client import RelateIQ
from relateiq.accounts import Account

RelateIQ("[API Key]", "[API Secret]")

# Retrieve the first 50 Account ins your Organization
account = Account()
print account.fetchPage()

# Retrieve two Accounts by Ids in your Organization
account = Account()
account.setFetchOptions({ '_ids': '56abd666e4b07f4066b7bcdc, 56b3acf5e4b0a8f6a0711488' })
print account.fetchPage()

# Retrieve all Accounts where modifiedDate > 1456874990000
account = Account()
account.setFetchOptions({ "modifiedDate": "1456874990000" })
print account.fetchPage()

# Retrieve two Accounts starting at index 1
account = Account()
print account.fetchPage(1, 2)
```

> Response

```shell
HTTP/1.1 200 OK
{
  "objects": [
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
        "primary_contact": [ { "raw": "56b11a80e4b0b5663a53403e" } ]
      }
    },
    {
      "id": "56df7a47e4b0f4b562879dfb",
      "modifiedDate": 1457486407906,
      "name": "Fitbot",
      "fieldValues": {}
    }
  ],
  "nextPage": null
}
```

```ruby
{ :id => "56abd666e4b07f4066b7bcdc", 
  :name => "Avocado, Inc.", 
  :field_values =>  {    
    :"4" => "avocado@gmail.com", 
    :"6 "=> "56155a21e4b0fee51b1cb043", 
    :"12" => "2",     
    :"14" => "94", 
    :"16" => "2017-02-01", 
    :"18" => ["0", "1"], 
    :address => "117 University Ave, Palo Alto, CA 94301", 
    :primary_contact=>"56b11a80e4b0b5663a53403e"
  }
}
{
  :id => "56df6186e4b0e5148565a763", 
  :name => "Java Tango", 
  :field_values => {
    :"6" => "54eb546ae4b07744e41db75c", 
    :"12" => "0", 
    :"14" => "74", 
    :"16" => "2016-08-24",     
    :"18" => ["7", "0"]
  }
}
{ 
  :id => "56b3acf5e4b0a8f6a0711488", 
  :name => "Model Minutes Inc", 
  :field_values => {    
    :"4" => "tminutes@gmail.com", 
    :"6" => "54eb546ee4b07744e41db93b", 
    :"16" => "2016-03-25", 
    :"12" => "2", 
    :"14" => "82", 
    :"18" => ["0", "3"], 
    :address => "50 Fremont Street, San Francisco, CA 94105", 
    :primary_contact => "56df75a4e4b03009e48e8e76"
  }
}
{
  :id => "56df7a47e4b0f4b562879dfb", 
  :name => "Fitbot", 
  :field_values => {}
}
```

```python
[
  {
    "id" : "56abd666e4b07f4066b7bcdc",
    "name" : "Avocado, Inc."
  },  
  {
    "id" : "56df6186e4b0e5148565a763",
    "name" : "Java Tango"
  },
  {
    "id" : "56b3acf5e4b0a8f6a0711488",
    "name" : "Model Minutes Inc"
  },  
  {
    "id" : "56df7a47e4b0f4b562879dfb",
    "name" : "Fitbot"
  }
]
```
`GET /accounts`

This endpoint fetches all Accounts. Responses are paginated, max of 200 at a time.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
_ids | String[] | false | An optional, comma separated list of Account identifiers.
_start | Numeric | false | An optional starting point for the returned page of records (defaults to 0). If you start at 50 you will retrieve records starting at the index 51 to your _limit.
_limit | Numeric | false | An optional page size for the returned result (defaults to 50, max size is 200).
modifiedDate | Numeric | false | Fetch all accounts modified at or after this timestamp (in milliseconds since epoch).