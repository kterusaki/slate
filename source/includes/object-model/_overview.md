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
  -----------         ------------           ------------
  |  Events | ------  | Contacts |           | Accounts |
  -----------         ------------           ------------

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
                    ------------             ------------
                    | Contacts |  ---------  |  Events  |
                    ------------             ------------

```

- [Lists](#lists)
- [List Items](#list-items)
- [Accounts](#accounts)
- [Contacts](#contacts)
- [Events](#events)
- [Users](#users)

The SalesforceIQ Object Model is centered around [__Lists__](https://help.salesforceiq.com/articles/overview-lists). Lists are where you will spend the majority of your time in SalesforceIQ. A List models a business process and contains fields that you want to track for that process.

There are two types of Lists that define the structure of List Items: Account-based List and Contact-based Lists. A List can either be a Contact-based List or an Account-based List, but not both. Account-based Lists may have multiple Contacts (Points of Contact) associated with each List Item. Contact-based Lists may only have one Contact associated with each List Item.

[__List Items__](#list-items) are rows in a List. At a high level, a List Item is a Contact (person) or an Account (company) who is being tracked as part of a process defined by a List. You'll notice that on Account-based Lists, List Items reference information from two objects ([Accounts](#accounts) & [Contacts](#contacts)). Whereas List Items on Contact-based Lists reference information just from the Contact Object.

[Events](#events) are only tied to Contacts and will only show up in the Stream View.

The [User](#users) object is referenced by List Items in Collaborator fields (Standard) like the Default Owner field.

### What kind of information gets referenced?
All properties found on the Account Profile or Contact Profile are referenced. These can also be surfaced on the grid by adding fields under the *Account* or *Contact* section. By linking an Account to a List Item, you're also able to reference *Company* information. Company information is automatically provided to you by our database of a million plus companies. 

### How do Accounts and Contacts get associated with List Items?

In the SalesforceIQ UI, you're prompted to "Find or create an account" when you create a new List Item. By selecting an existing Account or creating a new one you associate an Account to a List Item. That association is reflected in the *accountId* property of the [List Item](#list-item-object).

Once you've associated an Account to a List Item, you'll be prompted to associate Contacts (Points of Contact) to the List Item. Points of Contact are reflected in the *contactIds* property of the [List Item](#list-item-object).

For Contact-based Lists, you will only be prompted to "Find or create a Contact" when you create a new List Item.