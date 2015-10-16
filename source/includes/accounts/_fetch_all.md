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

```shell
curl 'https://api.salesforceiq.com/v2/accounts?_start=0&_limit=5'
    -X GET
    -u :[API Secret]
    -H 'Accept: application/json'
```

> Response


```shell
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