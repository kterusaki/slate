## Delete a List Item

> Request

```shell
curl 'https://api.salesforceiq.com/v2/lists/56f087b0e4b0584aa39fbba8/listitems/56f1b645e4b0d37eabea22b0'
  -X DELETE
  -u $API_KEY:$API_SECRET
```

> Response

```shell
HTTP/1.1 200 OK
true
```

`DELETE /lists/{listId}/listitems/{listItemId}`

A DELETE request which removes a Item from an List and returns true or false as to whether the deletion completed successfully.

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
listId | String | true | UUID for the List to be fetched.
listItemId | String | true | UUID for the List Item to be updated.