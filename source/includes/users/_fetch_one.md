## Get a Single User

> Request

```shell
curl 'https://api.salesforceiq.com/v2/users/56b12644e4b08b67fd722d75'
  -X GET
  -u $API_KEY:$API_SECRET
  -H 'Accept: application/json'
```

> Response

```shell
HTTP/1.1 200 OK
{
  "id" : d9013f21g411f3ea1b1cbd33,
  "name" : "James McSales",
  "email" : "james.mcsales@salesforceiq.com"
}
```
`GET /users`

### Query Parameters
Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
id | String | true | UUID for the User to be fetched.