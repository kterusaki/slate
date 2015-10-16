## Get a Single Account

> Request

```shell
curl 'https://api.salesforceiq.com/v2/accounts/abcdef1234567890abcdef0b'
    -X GET
    -u :[API Secret]
    -H 'Accept: application/json'
```

> Response

```shell
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