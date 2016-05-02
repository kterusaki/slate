## Web Form

Many of our clients capture information about potential leads from a form on their website. Entering these leads into SalesforceIQ using the API is an easier and less error-prone process than having someone enter the data manually.

Let’s say the “contact us” form collects the following information:

- Name
- Email
- Phone
- Company Name
- Address
- Best time to call

To represent this new lead, you would want to take the following steps:

__Use the Contact endpoint to create a new Contact with the “name,” “email,” and ‘“phone” fields__
You can add multiple emails or phone numbers if relevant. You don’t need to check for an existing duplicate Contact — SalesforceIQ will automatically associate duplicate Contacts with each other based on the rules mentioned in the [Contact section](#contacts), and will keep all information in both Contact entries. The Contact endpoint will provide an ID for the new Contact.

__Use the Account edpoint to create a new Account with the “Company name” as the name and “address” as the address__
You don’t need to check for an existing duplicate Account — SalesforceIQ will automatically associate duplicate Accounts with each other based on name, and will keep all information in both Contact entries. The Account endpoint will return an ID for the new Account.

__Create a new List Item in an existing List__
Make sure the API has access to this List; if you can’t see it through the List endpoint, you will need to ask the List administrator for access.

For this example, let’s say the List you are updating is called “Leads.” Let’s assume this is an “Account” type List and has the following schema:

List Field | Information to Populate Account
--------- | -------
Account | ID for the new Account you just created. Optional: Associate the ID of the Contact you just created to the Account in this List. This will cause email between the Contact and List collaborators to be captured in the Stream.
Status | Choose from among the existing “status” options, or leave blank to set to the default value (status options and default value are defined by the List administrator)
Owner | ID for a SalesforceIQ User associated with this List, or leave blank
Contact Preferences  | Text from the “best time to call” field on the form
Lead Source | “Contact us” form (or another label that’s helpful for your users)
Time of Contact | Timestamp when the user submitted the form
Additional Information | Can leave blank

*The new lead from the web form will now be available in your SalesforceIQ List*

 
