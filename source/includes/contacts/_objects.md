# Contacts

Contacts represent people in an Organization’s address book. SalesforceIQ has two types of Contacts: private and shared. Shared Contacts are accessible by the entire Organization and can be viewed and updated by the API. If you are trying to associate a Contact within a List please refer to the [List Items (Relationship) API endpoint](#list-items).

SalesforceIQ is designed to handle and merge multiple Contacts for the same person elegantly based on the Contact properties. Lets say that we have two Cecilia Avocado Contacts. Cecilia Avocado (1) has four properties A,B,C,D and Cecilia Avocado (2) has three properties A,B,C, then the two Contacts will be automatically merged to be Cecilia Avocado with properties A,B,C,D.

Now lets say we have two Contacts Tim Minutes. Tim Minutes (1) has three properties A,B,C and Tim Minutes (2) has properties A,D, then the two Contacts will not be merged because the properties of Tim Minutes (2) are not a subset of the other proprties.

The API can access all of your Organization’s Contacts, and all Contacts created by the API can be seen by your entire Organization. If you are trying to associate an Contact within a List please refer to the [List Items (Relationship) API endpoint](#list-items).

## Contact Object

> Definition

```shell
{
  "id": "56b12644e4b08b67fd722d75",
  "modifiedDate": 1457564297403,
  "requestedIds": [
    "56b11a80e4b0b5663a53403e"
  ],
  "mergedIds": null,
  "properties": {
    "liurl": [
      {
        "value": "https://www.linkedin.com/in/cavocado",
        "metadata": {}
      }
    ],
    "address": [
      {
        "value": "117 University Ave, Palo Alto, CA 94301",
        "metadata": {}
      }
    ],
    "phone": [
      {
        "value": "+14152990341",
        "metadata": {
          "stype": "work",
          "raw_val": "+1 415-299-0341",
          "primary": "true"
        }
      },
      {
        "value": "+15103139867",
        "metadata": {
          "raw_val": "+1 510-313-9867"
        }
      }
    ],
    "twhan": [
      {
        "value": "@cavocado",
        "metadata": {}
      }
    ],
    "name": [
      {
        "value": "Cecilia Avocado",
        "metadata": {}
      }
    ],
    "company": [
      {
        "value": "Avocado, Inc.",
        "metadata": {}
      }
    ],
    "title": [
      {
        "value": "CEO",
        "metadata": {}
      }
    ],
    "experience": [
      {
        "value": "Avocado, Inc.",
        "metadata": {
          "company_name": "Avocado, Inc.",
          "job_title": "CEO"
        }
      },
      {
        "value": "IQ.Tempo",
        "metadata": {
          "company_name": "IQ.Tempo",
          "job_title": "VP of Sales"
        }
      }
    ],
    "email": [
      {
        "value": "c.avocado@gmail.com",
        "metadata": {
          "stype": "personal",
          "primary": "false"
        }
      },
      {
        "value": "c.avocado@avocado.com",
        "metadata": {
          "stype": "work",
          "primary": "true"
        }
      }
    ]
  },
  "state": "ACTIVE"
}
```

```ruby
{
  :id => "56b12644e4b08b67fd722d75", 
  :properties => {
    :liurl => [
      {
        :value => "https://www.linkedin.com/in/cavocado", 
        :metadata => {}
      }
    ], 
    :address => [
      {
        :value => "117 University Ave, Palo Alto, CA 94301", 
        :metadata => {}
      }
    ], 
    :phone => [
      {
        :value => "+14152990341", 
        :metadata => {
          :stype => "work", 
          :raw_val => "+1 415-299-0341",
          :primary => "true"
        }
      }, 
      {
        :value => "+15103139867", 
        :metadata => {
          :raw_val => "+1 510-313-9867"
        }
      }
    ], 
    :twhan => [
      {
        :value => "@cavocado", 
        :metadata => {}
      }
    ], 
    :name => [
      { 
        :value => "Cecilia Avocado", 
        :metadata => {}
      }
    ], 
    :company => [
      {
        :value => "Avocado, Inc.", 
        :metadata => {}
      }
    ], 
    :title => [
      { 
        :value => "CEO", 
        :metadata => {}
      }
    ], 
    :experience => [
      {
        :value => "Avocado, Inc.", 
        :metadata => {
          :company_name => "Avocado, Inc.", 
          :job_title => "CEO"
        }
      }, 
      { 
        :value => "IQ.Tempo", 
        :metadata => {
          :company_name => "IQ.Tempo", 
          :job_title => "VP of Sales"
        }
      }
    ], 
    :email => [
      { 
        :value => "c.avocado@gmail.com", 
        :metadata => {
          :stype => "personal", 
          :primary => "false"
        }
      }, 
      {
        :value => "c.avocado@avocado.com", 
        :metadata => {
          :stype => "work", 
          :primary => "true"
        }
      }
    ]
  }
}
```

```python
{
  "id" : "56b12644e4b08b67fd722d75",
  "modifiedDate" : 1457564297403,
  "properties" : {
    "liurl" : [
      {
        "metadata" : {},
        "value" : "https://www.linkedin.com/in/cavocado"
      }
    ],
    "address" : [
      {
        "metadata" : {},
        "value" : "117 University Ave, Palo Alto, CA 94301"
      }
    ],
    "phone" : [
      {
        "metadata" : {
          "primary" : "true",
          "raw_val" : "+1 415-299-0341",
          "stype" : "work"
        },
        "value" : "+14152990341"
      },
      {
        "metadata" : {
          "raw_val" : "+1 510-313-9867"
        },
        "value" : "+15103139867"
      }
    ],
    "twhan" : [
      {
        "metadata" : {},
        "value" : "@cavocado"
      }
    ],        
    "name" : [
      {
        "metadata" : {},
        "value" : "Cecilia Avocado"
      }
    ],
    "company" : [
      {
        "metadata" : {},
        "value" : "Avocado, Inc."
      }
    ],    
    "title" : [
      {
        "metadata" : {},
        "value" : "CEO"
      }
    ],
    "experience" : [
      {
        "metadata" : {
          "company_name" : "Avocado, Inc.",
          "job_title" : "CEO"
        },
        "value" : "Avocado, Inc."
      },
      {
        "metadata" : {
          "company_name" : "IQ.Tempo",
          "job_title" : "VP of Sales"
        },
        "value" : "IQ.Tempo"
      }
    ],
    "email" : [
      {
        "metadata" : {
          "primary" : "false",
          "stype" : "personal"
        },
        "value" : "c.avocado@gmail.com"
      },
      {
        "metadata" : {
          "primary" : "true",
          "stype" : "work"
        },
        "value" : "c.avocado@avocado.com"
      }
    ]
  }
}
```

Parameter | Type | Description
--- | --- | ---
id | String | UUID, created by the system
modifiedDate | Numeric | milliseconds since (UTC) epoch
properties | Object | A collection of properties that are associated with the Contact.