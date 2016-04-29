## Account Properties

> Request

```shell
curl 'https://api.salesforceiq.com/v2/accounts/fields' 
  -X GET 
  -u $API_KEY:$API_SECRET 
  -H 'Accept: application/json'
```

```ruby
require 'riq'

RIQ.initialize('[API_Key]', '[API_Secret]')
puts RIQ.account_props.data
```

```python
import requests
import json

headers = {'Accept': 'application/json'}
response = requests.get('https://api.salesforceiq.com/v2/accounts/fields', auth=('[API_Key]', 'API_Secret'), headers = headers).json()  
print response['fields']
```

> Response

```shell
HTTP/1.1 200 OK
{
  "fields": [
    {
      "id": "address",
      "name": "Address",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "Location"
    },
    {
      "id": "primary_contact",
      "name": "Primary Contact",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "Contact"
    },
    {
      "id": "2",
      "name": "Title",
      "listOptions": [
        {
          "id": "0",
          "display": "CEO"
        },
        {
          "id": "1",
          "display": "Sales Rep"
        },
        {
          "id": "2",
          "display": "Principal"
        }
      ],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "List"
    },
    {
      "id": "4",
      "name": "Email",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "Text"
    },
    {
      "id": "6",
      "name": "Collaborators",
      "listOptions": [],
      "isMultiSelect": true,
      "isEditable": true,
      "dataType": "User"
    },
    {
      "id": "12",
      "name": "SLA",
      "listOptions": [
        {
          "id": "0",
          "display": "Basic"
        },
        {
          "id": "1",
          "display": "Business"
        },
        {
          "id": "2",
          "display": "Premium"
        }
      ],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "List"
    },
    {
      "id": "14",
      "name": "CSAT",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "Numeric"
    },
    {
      "id": "16",
      "name": "Contract End Date",
      "listOptions": [],
      "isMultiSelect": false,
      "isEditable": true,
      "dataType": "Date"
    },
    {
      "id": "18",
      "name": "Industry",
      "listOptions": [
        {
          "id": "0",
          "display": "Tech"
        },
        {
          "id": "1",
          "display": "Energy"
        },
        {
          "id": "2",
          "display": "Restaurant"
        },
        {
          "id": "3",
          "display": "Services"
        },
        {
          "id": "4",
          "display": "IT"
        },
        {
          "id": "5",
          "display": "VC"
        },
        {
          "id": "6",
          "display": "Real Estate"
        },
        {
          "id": "7",
          "display": "Transportation"
        }
      ],
      "isMultiSelect": true,
      "isEditable": true,
      "dataType": "List"
    }
  ]
}
```

```ruby
[
  { 
    "id": "address", 
    "name": "Address", 
    "list_options": [], 
    "is_multi_select": false, 
    "is_editable": true, 
    "data_type":"Location" 
  },
  { 
    "id":"primary_contact", 
    "name":"Primary Contact", 
    "list_options": [], 
    "is_multi_select": false, 
    "is_editable": true, 
    "data_type": "Contact"
  },
  { 
    "id": "2", 
    "name": "Title", 
    "list_options": [ 
      { "id": "0", "display":"CEO" },
      { "id": "1", "display":"Sales Rep" },
      { "id": "2", "display": "Principal"}
    ],
    "is_multi_select": false, 
    "is_editable": true,
    "data_type": "List"
  },
  { 
    "id": "4",
    "name": "Email",
    "list_options": [],
    "is_multi_select": false,
    "is_editable": true,
    "data_type": "Text"
  }, 
  { 
    "id": "6",
    "name": "Collaborators",
    "list_options": [],
    "is_multi_select": true,
    "is_editable":true,
    "data_type": "User"
  },
  {
    "id": "12",
    "name": "SLA", 
    "list_options": [
      { "id": "0", "display": "Basic" },
      { "id": "1", "display": "Business"},
      { "id": "2", "display": "Premium"}
    ],
    "is_multi_select": false,
    "is_editable": true,
    "data_type": "List"
  },
  { 
    "id": "14",
    "name": "CSAT",
    "list_options": [],
    "is_multi_select": false,
    "is_editable":true,
    "data_type": "Numeric"
  },
  { 
    "id": "16",
    "name": "Contract End Date",
    "list_options": [],
    "is_multi_select": false,
    "is_editable": true,
    "data_type": "Date"
  }, 
  {
    "id": "18",
    "name": "Industry",
    "list_options": [
      { "id": "0", "display": "Tech" },
      { "id": "1", "display": "Energy"},
      { "id": "2","display": "Restaurant"},
      { "id": "3", "display": "Services"},
      { "id": "4", "display":"IT" },
      { "id": "5", "display": "VC"},
      { "id": "6", "display": "Real Estate" },
      { "id": "7", "display": "Transportation"}
    ],
    "is_multi_select": true,
    "is_editable": true,
    "data_type": "List"
  }
]
```

```python
[
  { 
    "id": "address", 
    "name": "Address", 
    "list_options": [], 
    "is_multi_select": false, 
    "is_editable": true, 
    "data_type":"Location" 
  },
  { 
    "id":"primary_contact", 
    "name":"Primary Contact", 
    "list_options": [], 
    "is_multi_select": false, 
    "is_editable": true, 
    "data_type": "Contact"
  },
  { 
    "id": "2", 
    "name": "Title", 
    "list_options": [ 
      { "id": "0", "display":"CEO" },
      { "id": "1", "display":"Sales Rep" },
      { "id": "2", "display": "Principal"}
    ],
    "is_multi_select": false, 
    "is_editable": true,
    "data_type": "List"
  },
  { 
    "id": "4",
    "name": "Email",
    "list_options": [],
    "is_multi_select": false,
    "is_editable": true,
    "data_type": "Text"
  }, 
  { 
    "id": "6",
    "name": "Collaborators",
    "list_options": [],
    "is_multi_select": true,
    "is_editable":true,
    "data_type": "User"
  },
  {
    "id": "12",
    "name": "SLA", 
    "list_options": [
      { "id": "0", "display": "Basic" },
      { "id": "1", "display": "Business"},
      { "id": "2", "display": "Premium"}
    ],
    "is_multi_select": false,
    "is_editable": true,
    "data_type": "List"
  },
  { 
    "id": "14",
    "name": "CSAT",
    "list_options": [],
    "is_multi_select": false,
    "is_editable":true,
    "data_type": "Numeric"
  },
  { 
    "id": "16",
    "name": "Contract End Date",
    "list_options": [],
    "is_multi_select": false,
    "is_editable": true,
    "data_type": "Date"
  }, 
  {
    "id": "18",
    "name": "Industry",
    "list_options": [
      { "id": "0", "display": "Tech" },
      { "id": "1", "display": "Energy"},
      { "id": "2","display": "Restaurant"},
      { "id": "3", "display": "Services"},
      { "id": "4", "display":"IT" },
      { "id": "5", "display": "VC"},
      { "id": "6", "display": "Real Estate" },
      { "id": "7", "display": "Transportation"}
    ],
    "is_multi_select": true,
    "is_editable": true,
    "data_type": "List"
  }
]
```
`GET /accounts/fields`

Account properties are custom properties that your organization's admin creates that allow you to store information at the Account level, rather than tied to a specific lead, opportunity, etc. on a List. If you find yourself tracking the same fields for Accounts on multiple Lists, think about leveraging Account properties to reduce the need to input redundant data. Read this <a href="https://help.salesforceiq.com/articles/overview-account-properties" target="_blank">article</a> for more information about Account properties.

A GET request which fetches metadata information of the Account Property fields.

When updating fieldValues on Accounts, make sure to use this endpoint first to programmatically pull back a mapping between the user defined field names and the field ids for Account Properties. You will need to use this map when passing fieldValue changes to the Accounts endpoint.