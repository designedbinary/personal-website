---
title:  "Send and Read Secure Emails from Office 365's Web Email Client"
description: In an effort to expand further into the enterprise market, Virtru sought to integrate their easy-to-use email encryption services into Microsoft's Web Email client. Its unique design language, tech stack, and users presented some interesting challenges
goal: Apply all Virtru's send and read capabilities into OWA in a way that minimizes learning effort for users. 
results: A polished experience that follows/echos OWA's design language (and therefore, user expectations) while maintaining Virtru's core experience of simple reading and sending. 
role: UX Lead, UI/UX Design, User Research and Validation, Copywriting, Illustrator
year: '2017'
layout: work
---

{% include figure.html image_asset="/assets/virtru_owa_final1.png" image_caption="An overview of the variety of screens and scenarios that needed some UX work." %}

Virtru's integration into Outlook's Web App (OWA), also known as Office 365's Web Email Client, was an interesting challenge. Unlike Gmail, it was a much newer product, which meant that it was a moving target both from a technical aspect, and a user experience one. 

The over arching objective was to allow OWA users to take advantage of all Virtru features within OWA. I worked on all user experience aspects (along with two very talented engineers) including, but not limited to: user interviews, research, mapping work flows, sketches, high fidelity mockups, illustrations, and minor front-end development. 

Here are a few of the more interesting UX challenges. 

## A shortened attachment experience

As much as possible, when integrating with a service, my goal is to make Virtru feel like a natural extension of the service.

For the attachment experience, the solution seemed pretty straightforward: disable any OneDrive options, provide some indication that encryption was on, but otherwise reuse all existing UI for attaching a specific file. (OneDrive integration was the only real technical constraint we knew about when we started)

*Show screens about old attachment experience*

Collaborating with the dev team all along the way, we built and brought this feature into beta. While in beta, we discovered that the DOM selectors we were using to identify certain UI elements were constantly in flux. The DOM selectors allowed us to pinpoint a location by which we could inject Virtru UI on top of OWA. Any selector changes resulted in missing Virtru UI elements and broken experiences. 

A technical solution was devised to make it easier to adjust and identify mutating selectors, but it was a continuous uphill battle to make adjustments. Furthermore, when UI did break, we often could not even notify the user as these selectors were the basis for injecting our UI on top of OWA. 

The constant selector battle was eating up resources, delaying other projects, and aggrevating users with disappearing UI elements. As much as we wanted to stay as native as possible with the experience, we knew we had to change our strategy. Not communicating with our users that things are broken was much worse than applying a non-native experience.

Ultimately, the solution was a tiered approach to battling selector changes and a simplification of the attachment experience to reduce our reliance on selectors. 

*show a screen with new attachment experience*

While this experience, is different from the native experience, it provided a much more stable experience for users. The initial encounter might be a little awkward, but once the user learns this behavior, it quickly becomes second nature. A consistent experience is much preferred than one that constantly keeps you guessing.

## Where does this switch go?

The switch is a metaphor everyone encounters on a daily basis. Flip it, you change states. Flip it back, you revert back. Simple!

For Virtru, the switch has even become a brand element, appearing on most of Virtru's integrations. Its consistency across email clients makes it easy for users to jump to different services and use Virtru without skipping a beat. 

For the OWA integration, the question then was where was the most intuitive place for OWA users to discover the switch. 

{% include figure.html image_asset="/assets/virtru_owa_explorations1.png" image_caption="Thoroughly exploring a variety of solutions." %}

Working with various stakeholders, I identified various locations where it might make sense and still followed Microsoft's Fabric UI guidelines.

After some testing, we concluded that the top left of the compose window was the best option. It was prominent in terms of reading order, keeping it outside of the input box allowed us to make the state change more obvious, and it sat on top of everything which helped to imply it affected the entire compose area. 

{% include figure.html image_asset="/assets/virtru_owa_virtru_on.gif" image_caption="Adding animation helped the user to understand the transition from normal to encrypted." %}  

## Contextual Activation vs Onboarding Activation 

All users are required to Activate Virtru to use its services. Furthermore, activation is required every 30 days for security purposes. 

In the early days of Virtru, we decided to make activation contextual on all email clients. Our feature library at the time was very simple and this interaction minimized "annoying" activation requests. We sought to present the request only in the context when users are in the mindset to interact with Virtru. So, on our first iteration, we simply applied this interaction pattern. 

*show image of activation requests*  

During the beta period, we received feedback that Virtru wasn't working as expected. As we dug into the issue, we did indeed discover that a newer Virtru feature wasn't working for some folks. This newer feature was a Data Loss Prevention (DLP) rule set. This feature was intended to automate the process of encrypting an email. Essentially, Virtru would scan the contents of an email and check it against a customer made rule set. If it found a match, Virtru would encrypt the email before completing the send action. 

New users would create those DLP rules, install Virtru, go through the onboarding process, and then send out a regular email. The intended result was to have Virtru automatically encrypt that email. Unfortuantely, Virtru did not start working until you activated. The contextual activation required users to hit the switch first when composing, or read a secure email to be prompted to activate. So, if a user didn't do this, their DLP rules would not trigger. 

The ideal solution would be to automate the activation for the user. Due to security concerns, user opt-in is necessary. So, I proposed a multi-pronged approach to activation. Initial activation would happen prior to onboarding when the user first installs Virtru. In addition, contextual activation would remain for certain follow-up activation scenarios. 

*Show image of new activation screen*

The result was much less confusion about when you can start using Virtru. 

## A few more images of Virtru's integration into OWA

{% include figure.html image_asset="/assets/virtru_owa_sketches1.png" image_caption="Sketching out the reading experience allowed me to inexpensively explore multiple options" %}

*Compose experience for free tiered users*

*Integrating with Outlook, every aspect of the experience had to be considered. In this case, we had to notify users that we could not securely support OneDrive.*

*The read receipt experience had to be modified a bit to better align with Outlook's interaction paradigms.*

*Security checks also needed to fit Outlooks Visual design language*
