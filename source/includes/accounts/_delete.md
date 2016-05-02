## Delete an Account

> Request

```shell
curl "https://api.salesforceiq.com/v2/accounts/56fc1244e4b0cb31e6288c61"
  -X DELETE
  -u $API_KEY:$API_SECRET
```

> Response

```shell
HTTP/1.1 200 OK
true
```
`DELETE /accounts/{id}`

A DELETE request which removes an Account from the Organization and returns true or false as to whether the deletion completed successfully.

The request will fail if the Account is associated with a List Item.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | true | UUID for the Account to be deleted.