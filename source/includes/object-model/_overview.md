# Object Model

## Overview

> Definition

```shell
# Account-based List


            ------------
            |   List  |
            ------------
                 |
                 |
                 |
           --------------
           | List Items |
           --------------
           /            \
          /              \
         /                \
        /                  \                 
  ------------        ------------
  | Contacts |        | Accounts |
  ------------        ------------
      |
      |
      |
  ------------
  |  Events  | 
  ------------

# Contact-based List


      ------------
      |   List  |
      ------------
           |
           |
           |
     --------------
     | List Items |
     --------------
           |
           |
           |    
      ------------             
      | Contacts |             
      ------------             
           |
           |
           |
      ------------
      |  Events  |
      ------------

```

- [Lists](#lists)
- [List Items](#list-items)
- [Accounts](#accounts)
- [Contacts](#contacts)
- [Events](#events)
- [Users](#users)

To end users, everything in the SalesforceIQ UI is attributed to the List. The List name, list settings, the Stream and Grid View, and the relationsips/rows are all part of the List. In our backend, these components that make up a List are actually multiple objects within the system. For example, the rows on a List are actually instances of the List Item object. Accounts and Contacts are associated with those List Items and Stream Events are actually attributed to the Event Object instead of the List.

In the API, a [__List__](#lists) contains schema that defines the types of values that a List Item can have for each column.
There are two types of Lists that define the structure of List Items: Account-based Lists and Contact-based Lists. A List can either be a Contact-based List or an Account-based List, but not both. Account-based Lists may have multiple Contacts (Points of Contact) associated with each List Item. Contact-based Lists may only have one Contact associated with each List Item.

To end users, we say that the List is where users will spend most of their time in SalesforceIQ. For the SalesforceIQ API, you will be spending most of your time handling [__List Items__](#list-items). List Items are rows on a List. At a high level, a List Item is a junction object between a [Contact](#contacts) (person) or an [Account](#accounts) (company) and a List.

[Events](#events) are objects that represent individual touch points with a Contact(s). Default events of the system are meetings, phone calls, and emails. The event object in the API is a separate event type that appears in the Stream View based on the Contact the event is associated with. The Contact needs to be associated to a particular List Item for the Event to show up in the Stream.

The [User](#users) object represents an individual user of SalesforceIQ. Users are reflected in List Items as Owners or Collaborators of a Relationship.

### What kind of information gets referenced?
All properties found on the Account Profile or Contact Profile are referenced. These can also be surfaced on the grid by adding fields under the *Account* or *Contact* section.

### How do Accounts and Contacts get associated with List Items?

In the SalesforceIQ UI, you're prompted to "Find or create an account" when you create a new List Item. By selecting an existing Account or creating a new one you associate an Account to a List Item. That association is reflected in the *accountId* property of the [List Item](#list-item-object).

Once you've associated an Account to a List Item, you'll be prompted to associate Contacts (Points of Contact) to the List Item. Points of Contact are reflected in the *contactIds* property of the [List Item](#list-item-object).

For Contact-based Lists, you will only be prompted to "Find or create a Contact" when you create a new List Item.