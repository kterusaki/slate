# Contacts

## Get All Contacts

> Request

```ruby
require 'riq'

RIQ.init(ENV['API\_KEY'], ENV['API_SECRET'])
RIQ.contacts.each do |c|
    puts c
end
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```bash
curl "http://example.com/api/kittens"
  -H "Authorization: meow"
```

> Response

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

This endpoint fetches all contacts. Responses are paginated, max of 200 at a time.