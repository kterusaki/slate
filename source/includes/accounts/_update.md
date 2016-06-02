## Update an Account

> Request

```shell
curl 'https://api.salesforceiq.com/v2/accounts/568ed01fe4b0b69244577452'
  -X PUT
  -u $API_KEY:$API_SECRET
  -H 'Content-Type: application/json'
  -H 'Accept: application/json'
  -d '{
      "id" : "568ed01fe4b0b69244577452",
      "name": "Jamjilla"
    }'
```

```ruby
require 'riq'

account = RIQ.account('568ed01fe4b0b69244577452')
account.name = 'Jamjilla'
account.field_value('address', '502 Emerson Street, Palo Alto, CA 94301')
account.save

puts account.data
```

```python
from relateiq.client import RelateIQ
from relateiq.accounts import Account

account = Account('568ed01fe4b0b69244577452')
account.name('Jamjilla')

account.update()

print account
```

> Response

```shell
HTTP/1.1 200 OK
{ 
  "id": "568ed01fe4b0b69244577452",
  "modifiedDate": 1457546646286,
  "name":"Jameroo",
  "fieldValues": {}
}
```

```ruby
{ 
  :id => "568ed01fe4b0b69244577452", 
  :name => "Jamjilla", 
  :field_values => {
    :address => "502 Emerson Street, Palo Alto, CA 943015"
  }
}
```

```python
{
    "id" : "568ed01fe4b0b69244577452",
    "name" : "Jamjilla"
}
```

`PUT /accounts/{id}`

A PUT request which updates the details of a specific Account. The id and name are required keys in the body.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | true | The unique identifier for the Account to be updated.

### Payload
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
updatedAccount | Object | true | An Account object which includes only the fieldValues that need to be updated. This object should be included in the body of the request.

### Payload Attributes
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | true | UUID of the Account to be updated.
name | String | true | The existing or updated name of the Account.
fieldValues | Object | false | A collection of values for Account Property objects. For details about saving account property data, reference our in-depth explanation of [account properties](#account-properties).