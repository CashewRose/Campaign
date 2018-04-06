# Practice
You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

Your job is to define the different objects and resources, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

1. Her congressional district (you can use yours here)
1. Her platform statements for the following issues.

    1. Taxes
    1. Jobs
    1. Infrastructure
    1. Health care
    1. Crime and enforcement
1. URL for donation form
1. Calendar of events
1. Volunteer information

    1. Name
    1. Address
    1. Email
    1. Phone number
    1. Availability
    1. What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
1. Biography
1. Image gallery

    1. Head shot
    1. Picture of family
    1. Picture of constituents
1. Mission statement
1. URL for registering to vote

# Challenge
After you have defined all the objects for representing the data, write a corresponding function for each one whose purpose is to change the state of the object. Then invoke each function, and pass a reference to the correct object to it and modify a property.

Example: 
```js
function changeBookState (anyBookObject, thePropertyToChange) {
    ...
}

const jest = {
    title: "The Infinite Jest",
    author: "David Foster Wallace",
    publishDate: "1 February 1996"
}

const lamb = {
    title: "Lamb: The Gospel According to Biff",
    author: "Christopher Moore",
    publishDate: "15 May 1004"
}
```
# Advanced Challenge
Use document.createElement() to build an <article> element representing Elizabeth. The id property of the element should be her congressional district, and its content should be her platform data. Once the element has been created, insert it into the DOM.