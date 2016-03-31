## Website Event

__Example use case: User registers for an Event through your website__

Through a form on your website, the user enters the following information to register for your training webinar:

- Name
- Email
- Job title
- Areas of interest

__Use the Contact service to identify an existing Contact or create a new Contact with the “name” and “email” fields.__
You can add multiple emails if relevant. You don’t need to check for an existing duplicate Contact — SalesforceIQ will automatically associate duplicate Contacts with each other based on the rules mentioned in the [Contact section](#contacts), and will keep all information in the merged Contact. The Contact service will provide an ID for the new or existing Contact.

__Use the Event service to create a new registration Event associated with the Contact you created or identified__

Event attribute | Data entered
--------- | -------
Identifier | Email
Title | Training webinar registration
Body text | [Name], [title] registered for a training webinar on 3/18/2014 at 10 AM PT. [Name] is interested in learning more about [areas of interest].
Activity timestamp | Use registration timestamp from your own website or leave blank
Created timestamp | Leave blank; will be populated automatically with the time you created the activity
Creator | Leave blank; will be populated with the name of your API Key

__Event will appear in the Stream for any List Item associated with the Contact__
Assuming the API has access to the relevant List(s), your company’s SalesforceIQ Users will see the Event registration in the Stream.