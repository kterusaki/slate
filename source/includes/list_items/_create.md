## Create a List Item

> Request

```shell
# Contact-based List
{
  "listId": "56f087b0e4b0584aa39fbba8",
  "contactIds": ["56f1b2a8e4b0d37eabe91b9d"],
  "fieldValues": {
      "0": [ { "raw": "1" } ],
      "1": [ { "raw": "jmcsales@gmail.com" } ],
      "3": [ { "raw": "1500" } ],      
      "7": [ { "raw": "1" }, { "raw": "3" } ],
      "12": [ { "raw": "t.minutes@modelminutes.com" } ],
      "14": [ { "raw": "Hello World" }],
      "process_close_date": [ { "raw": "1558685591983" }]
  }
}

# Account-based List

```

> Response

```shell
# Contact-based List

# Account-based List
```

`POST lists/{list_id}/listitems`

A POST request which creates a new List Item object and returns the created List Item with it's new ID.

### Payload
Parameter | Type | Description
--------- | ------- | -----------
newListItem | Object (required) | A JSON representation of a List Item, without the id, modifiedDate, or createdDate fields (which will be generated on creation).