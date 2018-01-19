---
title:  "Send and Read Secure Emails from Office 365's Web Email Client"
description: In an effort to expand further into the enterprise market, Virtru sought to integrate their easy-to-use email encryption services into Microsoft's Web Email client. Its unique design language, tech stack, and users presented some interesting challenges
goal: Apply all Virtru's send and read capabilities into OWA in a way that minimizes learning effort for users. 
results: A polished experience that follow's OWA's design language (Fabric UI) while maintaining Virtru's core experience of simple reading and sending. 
role: UX Lead, UI/UX Design, User Research and Validation, Copywriting, Illustrator
year: '2017'
layout: work
---

{% include figure.html image_asset="/assets/virtru_owa_final1.png" image_caption="An overview of the variety of screens and scenarios that needed some UX work." %}

### Task

Revive and rework the Virtru experience on Outlook Web App (OWA) and Outlook.com.

### Goals

  * Improve upon what has been learned from grafting Virtru onto other web mail platforms
  * Allow users to use Virtru on OWA, including all core features (read secure, write secure) and ancillary features (Read receipt, CKS error handling)
  * Make the Virtru experience as seamless as possible from Native OWA experience
 

Almost three years ago, Virtru did integrate with OWA/Outlook.com. Unfortunately, due to low usage and changing business objectives, further support and development on the platform was shelved. Now, Virtru was ready to once again dive into OWA/Outlook.com, and I was tasked with leading the UX effort.

 

## Setting up
While we have learned a lot over the past 3 years, before I could really dive into this task, I needed to make sure I understood the problem space and opportunities.

I started by establishing a few basics (primary audience, technical limitations, timeline, other considerations, etc) to make sure I captured all relevant information.

Since I was grafting an existing experience into a new platform, I was able to leverage journey maps from old projects.

The biggest issues with this project revolved around 1) discovering all the idiosyncrasies of OWA's current experience and 2) working with Microsoft's new and evolving design language for the office products (Fabric UI). For Virtru to be successful on any platform, it is important that it feels like an extension of the native experience. Otherwise, there is a potential for confusion which could easily discourage users from securing their email. Therefore, I spent a lot of time studying the design language, as well as pressing ALL the buttons to see how things behaved.

 

## Practice Makes Perfect
{% include figure.html image_asset="/assets/virtru_owa_sketches1.png" image_caption="Sketching out the reading experience allowed me to inexpensively explore multiple options" %}

Feeling confident with my findings, I dived into the designs. I sketched out a few of the core experiences, then dived straight into high fidelity mockups. All the tools and existing assets that I've built over the past few years I have been at Virtru gave me the luxury to jump into higher fidelity mockups and produce mockups in a relatively short time. Furthermore, mockups at this fidelity would produce the most accurate feedback with regards to if our experience is seamless in the OWA environment.

{% include figure.html image_asset="/assets/virtru_owa_explorations1.png" image_caption="Thoroughly exploring a variety of solutions." %}

For certain key experiences, such as reading and writing, we elevated the designs by adding animation. As much as we wanted to fit into the native experience, it was also important to stand out a bit, partly for brand emphasis, but mostly for useability. Its important for our users to know when an email is secure, and when it is not. As such, this experience needed to grab the users' attention just enough.

{% include figure.html image_asset="/assets/virtru_owa_virtru_on.gif" image_caption="Animation prototypes helped us to understand how animation could help users better acclimate to a new status." %}

 

## Final results and next steps
*Compose experience for free tiered users*

*Integrating with Outlook, every aspect of the experience had to be considered. In this case, we had to notify users that we could not securely support OneDrive.*

*The read receipt experience had to be modified a bit to better align with Outlook's interaction paradigms.*

*Security checks also needed to fit Outlooks Visual design language*

After a few weeks of design-feedback-iterate, the experience came together and fits in pretty seamlessly. The next major tasks from here are to 1) measure how successful users are with the experience and 2) an improved onboarding. Onboarding in particular was a project that we decided to tackle separately from the grafting of Virtru functionality. It’s a much larger project that requires more research and tighter iterations than the time we had budgeted allowed for. 