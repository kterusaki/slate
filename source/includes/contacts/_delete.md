## Archive a Contact

> Request

```shell
curl "https://api.salesforceiq.com/v2/contacts/56fc1244e4b0cb31e6288c61"
  -X DELETE
  -u $API_KEY:$API_SECRET
```

> Response

```shell
true
```
`DELETE /contacts/{id}`

A DELETE request which *archives* a Contact and returns true or false as to whether the deletion completed successfully.

### Query Parameters
Parameter | Type | Description
--------- | ------- | -----------
id | String (required) | UUID for the Contact to be deleted.