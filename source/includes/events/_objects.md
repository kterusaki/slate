# Events

Events represent interactions involving a Contact associated with a List Item. Instead of appearing as new content in List columns, Events appear in the “Stream View” associated with the appropriate List Item. If the same Contact is associated with more than one List Item, then the Event will appear in all relevant Stream Views.

For example, let’s say a sales rep (James) using SalesforceIQ takes calls with a lead (Cecilia) and an Event (the call, with notes) is recorded through the API. Let’s say Cecilia or his company have List Items in two Lists to which James has access -- one List that tracks active clients, and another which tracks upsell opportunities. James' call Event will appear in both List Item’s Stream views as an Event. The Event will not appear in reporting for either List. Alternatively, if Sam is not in any SalesforceIQ List, then no Event appears in any Stream.

IS THERE A CHAR LIMIT? DOCS SAY 1000 CHAR, BUT I JUST TESTED WITH LEN(BODY) > 1000

Events do not appear in reporting. If you build an integration with your VOIP system which logs calls, the calls logged by the API will not appear as phone calls in SalesforceIQ reporting.

## Event Object

> Definition

```shell
{
  "subject": "Call with Cecilia Avocado",
  "body": "Negotiated pricing and sent out a contract during the call."
  "participantIds": [
    { 
      "type": "email",
      "value": "james.mcsales@salesforceiq.com"
    },
    {
      "type": "phone",
      "value": "14152990341"
    }
  ]
}
```

Parameter | Type | Description
--- | --- | ---
subject | String (required) | a title or subject of the event
body | String (required) | notes about the event
participantIds | Object\[\] (required) | A collection of Contact emails or phone numbers