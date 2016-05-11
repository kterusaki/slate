## Field Datatypes

dataType | Description
-------- | -----------
Contact  | This type of field stores a Contact within your SalesforceIQ Organization. The value stored is a contactID (UUID for a Contact). To edit this type of field you can pass in the contactID or the contact's email address.
Datetime | This type of field stores a particular Date & Time in UTC milliseconds past the epoch.
Email    | This type of field stores an email address of a Contact. (Contact Object only)
File     | This type of field stores a file that gets uploaded via the web. The value stored is a UUID for the file. (List Item Object only)
List     | This type of field stores a key which identifies the single select or multiselect list value. Passing in an invalid id for an option will return an error.
Numeric  | This type of field stores a number. Passing in non-numeric characters will return an error.
Phone    | This type of field stores a phone number. (Contact Object only)
Text     | This type of field stores raw text.
Url      | This type of field stores a url. This field only appears for the LinkedIn URL Contact property. We only accept LinkedIn Profile URLs such as "https://www.linkedin.com/in/jmcsales" (Contact Object only)
User     | This type of field stores a User within your SalesforceIQ Organization. The value stored is a userID (UUID for a User). To edit this type of field you can pass in the userID or the user's email address.


## Field Metadata Attributes

attribute   | Description
---------   | -----------
listOptions | The listOptions property maps to an array of option objects, each containing an option id and the display value of that option. When setting the value of these types of fields, these list fields need to be set to this ID rather than their display value.
isMultiSelect | Boolean value that determines whether a List field is a Single Select picklist or Mutli Select picklist.
isEditable | Boolean value that determines whether a field can be updated.
isLinkedField | Boolean value that determines whether the value of the field is populating from another field.