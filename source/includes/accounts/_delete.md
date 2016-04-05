## Delete an Account

> Request

```shell
curl "https://api.salesforceiq.com/v2/accounts/56fc1244e4b0cb31e6288c61"
  -X DELETE
  -u $API_KEY:$API_SECRET
```

> Response

```shell
true
```
`DELETE /accounts/{id}`

A DELETE request which removes an Account from the Organization and returns true or false as to whether the deletion completed successfully.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
id | String (required) | UUID for the Account to be deleted.