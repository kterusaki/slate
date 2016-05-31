# Introduction

```shell
WELCOME!

You are currently viewing examples for Curl. You can use these examples to test the code in your terminal console.

Toggle examples for different languages with the selector above.

To get your environment setup to run each curl command, open a terminal and run...

export API_KEY=your_api_key
export API_SECRET=your_api_secret
```

The SalesforceIQ API is a full-featured, RESTful interface for interacting with the objects in our system. It allows you to make a lot of the reading and writing actions you would be able to make from inside the app. 

## Accessing Your Data

API requests are authorized with [HTTP basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) consisting of an API Key and Secret. These are currently only available to certain SalesforceIQ [plans](https://help.salesforceiq.com/index.php?p=articles/compare-billing-plans). If you have API access, you can follow [these](https://help.salesforceiq.com/articles/set-up-api-access) instructions to generate your credentials. 

__Keep these credentials safe__. We can't regenerate the secret for you, so make sure it's recorded somewhere. Failure to do so will result in having to deactivate the old integrations and rebuilding them with new credentials, and nobody wants that. 

You'll include these with every request, either directly or through one of our sdks (which handle the inclusion for you). 

## Requests

All requests use the root url of `https://api.salesforceiq.com/v2`. For each route, we support one or more of the following HTTP methods: 

* `GET` retrieve one or more objects
* `POST` create a new object
* `PUT` update an existing object
* `DELETE` remove an existing object. __NOTE__: This is irreversible. 

## Responses

Each request is followed by a response in the form of a JSON object. Our sdk's usually process this JSON into a more natural language structure (such as a Ruby hash). Hopefully, this response will include the data you wanted. Otherwise it will detail the error.

## Errors

> Error object structure

```
{
    "statusCode": "[INT] roughly corresponds to the matching HTTP error code",
    "userMessage": "A high level overview of the issue",
    "errorMessage": "A more specific description of the issue"
}
```

Sometimes, requests don't work. When that happens, we respond with JSON that describes the nature of the problem. It will consist of three key pieces of information.



The error code does its best to describe the issue you're having. Generally, 

Error Code|Message|Description
---|---|---
200 | OK | normal successful request
400 | Bad Request | missing or malformed parameter
401 | Unauthorized | missing credentials
403 | Forbidden | provided key does not have access for that method
404 | Not Found | requested object does not exist
422 | Unprocessable Entity | often the posted object is malformed
429 | Too Many Requests | exceeded rate limits 
500 | Server Error | some sort of server issue
503 | Service Unavailable | likely a deploy is occurring, wait 2 minutes and retry

## Rate Limits

Each API key is limited to a certain number of requests per day. Currently, the limit is __100k requests__ per calendar day. Any further requests will return error code 429 until the next day begins.