---
title:  "For Encrypted Emails, the Recipient UX is Key."
description: The key experience for a useful email exchange is the recipient experience. Even "simple" barries can discourage a recipient from continuing forward. Once that happens, they would eventually encourage senders to stop using Virtru. 
goal: Make the reading experience as painless as possible 
results: An ongoing journey with continued improvements that have allowed more and more organizations to use Virtru in more practical situations. 
role: UX Lead, UI/UX Design, User Research and Validation, Copywriting, Illustrator
year: '2015'
layout: work
---
---

{% include figure.html image_asset="/assets/virtru_recipient_example_primary.gif" image_caption="The reading experience for a Virtru email recipient without Virtru installed" %}

Below are some of the major challenges we tackled through iterative UX and clever development.

## A bit of background

Traditional email encryption software, such as PGP, has been around since the 90's. Yet, its not widely adopted. In terms of encryption, it is tried and true. In terms of UX, all parties in communication need to be technically savvy enough to install it, generate keys, and exchange keys with those they communicate with, prior to communication. In short, its hard to use. Hard enough that its not practical for day to day communication. (Here's a [short video](https://youtu.be/irYluSTChIY) on how to get PGP up and running)

Senders might be motivated enough to implement the software on their end. But they would be hard pressed to convince most recipients. If you couldn't convince your recipients to use a particular service, you'll eventually cease to see the value of a service that doesn't help you communicate.

## Click to install, click to setup

With the most difficult part of traditional encryption software being the install and setup process, the theory behind the very first version of Virtru was simple: make this part as easy as a click, then non-technical senders and recipients will start encrypting their emails. As a chrome plug-in for Gmail, installation was a simple click. Setup was also another click to activate the service. After that, sending a secure email was a flip of a switch, and decrypting a secure email to read it was automatic. The experience was more or less like normal email.

{% include figure.html image_asset="/assets/virtru_recipient_first_iteration.jpg" image_caption="The first version brought recipients to an install screen where they could install the Virtru plugin." %}

So, we started here, put it in front of users and discovered a major shortcoming of this strategy. Senders loved the ease at which they could install Virtru and send encrypted messages Recipients, however, had a different reaction. Recipients who installed the software thought it was great! Unfortunately, a majority of recipients did not want to install anything, particularly in less-than-sensitive situations, such as casual conversations.

## Nobody wants to install anything

If first time virtru email recipients didn't want to install anything, we had to find a solution that accommodated this expectation. Our next iteration still allowed for the installation of Virtru, but gave an option to simply read the message through a secure portal. The idea was to include an attached copy of the secure content. Recipients would then download that attachment and drop it into a secure portal for decryption. The secure portal required the recipient to verify their identity using an oauth option. Once verified, the recipient would simply drop the file into the secure portal to decrypt and read.

{% include figure.html image_asset="/assets/virtru_recipient_attachments_dropped.png" image_caption="An early wireframe of how a recipient would consume a secure message dropped into the secure reader." %}

With prototypes created, we put them in front of users. We soon discovered that while we eliminated the cognitive barrier of installing something, we added significant cognitive load by requiring downloading, verification, then uploading the secure message attachment to a portal. There were simply too many steps for most recipients. Furthermore, for recipients who took the time to try to read the message, there were too many places to make mistakes. Some users wondered what the file format was, others simply got lost along the way and gave up.

## Auto load secure content

Luckily, at a certain point, the development team discovered a solution that allowed us to auto-populate the encrypted content into the secure reader. 

So, we revised the recipient experience again, making the link to the auto-populated secure reader as the primary action for recipients. In addition, we completely removed the secure message attachment experience as it was deemed utterly confusing. In addition, we added an email auth option, as user testing indicated that some users thought we might be stealing their email credentials when they went through the Oauth process. 

{% include figure.html image_asset="/assets/virtru_recipient_read_experience_email.png" image_caption="A simplified email brought recipients straight to the secure reader." %}

{% include figure.html image_asset="/assets/virtru_recipient_read_experience_decrypt.png" image_caption="The secure reader allows recipients to consume secure email content without having to install Virtru. Furthermore, it provides recipients an option to reply securely as well." %}

These revisions proved to be the most successful, making Virtru a viable solution and allowing it to expand into more markets.  

## What's next?

By chipping away at the recipient pain points, we've dramatically improved the reading experience. Where the recipient experience used to turn customers away, our incremental improvements now allow Virtru to be used in day to day professional settings. There are still a bunch of other things we need to improve and a bunch of other pain points we've discovered, but will continue to chip away at this problem. 