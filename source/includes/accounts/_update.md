## Update an Account

> Request

```shell
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

```shell
HTTP/1.1 200 OK
{
    "id" : "abcdef1234567890abcdef0b",
    "modifiedDate" : 1000000000001,
    "name" : "Account 1"
}
```

A PUT request which updates the details of a specific Account.