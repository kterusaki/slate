# Users

Users are individuals with login access to your SalesforceIQ organization. The user object consists of a name, email address, and unique identifier. The unique identifier can be queried through the API end point to return the user's name and email address for a specific contactID and userID.

> Definition

```shell
  {
    "id" : d9013f21g411f3ea1b1cbd33,
    "name" : "James McSales",
    "email" : "james.mcsales@salesforceiq.com"
  }
```

Parameter | Type | Description
--- | --- | ---
id | String | UUID, created by the system
name | String | Name of the User
email | String | The Email address used to sign in by the User