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

### Task

Make the reading experience as easy as possible


### Design Goals
  * Unobtrusive
    * As much as possible, I designed the experience to be out of the way. It should feel like it belongs with your normal email.
  * Friendly
    * Encryption is scary. One of our early goals was to make encryption accessible to everyone. Making encryption familiar would help make people more amenable to encryption
  * Secure
    * While friendly, it should give you confidence, particularly if you are sending sensitive information
 

If you've ever used "traditional" encryption software, you quickly realize just how much of a pain it is to use. With regards to secure email, it’s a pain to set up, it’s a pain to send a secure email, and it’s a pain to receive a secure email. Both the sender and the recipient must be incredibly motivated to keep something a secret and very technically capable.

Bring it to a practical situation, such as a doctor sending medical information to a patient, she would be very inclined to slog through configuration and set up screens to send a secure message, but the patient would probably not have the same patience to go through the same experience just to read an email that might simply have dosage instructions. So, for Virtru, we knew that not only was it necessary to make the experience of sending encrypted emails seamless, the path to reading a secure email MUST be equally, if not more, easy.

## Version 1
*An early mockup of the Virtru reading experience*

The first version of Virtru focused on ease of set up and removed the burden of exchanging encryption keys. Reading a secure email was just an "install" away. Working with the development team, I distilled the experience to these steps:

  1. Open Secure email
  2. Click on link to go to Virtru.com
  3. Install Browser plugin from Virtru.com
  4. Go back to your gmail inbox and find the secure email
  5. Activate Virtru by clicking a button
  6. Read Secure email

The first time reading experience was a little long because of the installation. But, once it was installed, reading a secure email was as easy as reading a normal email!

Compared to traditional encryption software, we were far easier to use. But feedback from our users taught us that we still had a way to go.

 

## Attachments?
*attachments.png*
Attachments were another problem with the initial experience. The technical limitations meant that even if you had Virtru installed and had no problem reading an email, its attachment had to be downloaded, then reuploaded to a portal to be decrypted.

Considering our limitations at the time, we thought this was a pretty simple solution.

Overtime, Useability tests showed us again and again that users simply had no idea how to open attachments, regardless of how much instructions they were given.

Clearly, if we wanted to make this accessible to non-tech individuals, there had to be a radical change from the tech side.

 

## Learning, Validating
Over time, we collected feedback from various sources. We also conducted a few user tests, watching real users who matched our very general audience, stumble through our interface. Here's some of the lessons we learned:

  * With Virtru installed, the reading experience was smooth and quick
  * Unfortunately, no one wants to install anything, no matter how fast or easy you make it.  Especially if they do not see its value.
  * Attachments needed to take less steps to decrypt and consume
  * Recipients thought the secure email was spam

To inform our next move, we also conducted a few experiments, particularly with a focus on making the secure email not look like spam, since the technical limitations at the time did not allow for alternative steps for the other user experience problems.

*email templates.png*

The email template experiments helped to improve our clickthrough rate a bit. But, what was interesting was that regardless of what we did, there will still be users who perceive a secure email as spam. At least, from a non-business context. In a business setting, we found that users were more willing to verify the authenticity of an email and then try to read it.

 

## Engineering saves the day!
With the insight we gained through feedback and user tests, the development team knew that the ultimate solution should not require recipients to install anything. Eventually, the development team discovered a breakthrough that not only allowed recipients to view a secure email without installing, but also make the attachment experience like normal attachments! 

In its most ideal experience, a user simply needs to click on the secure email, verify their identity, and the email decrypts in the secure reader, a secure web portal. The images below outline the general experience. Furthermore, I redesigned the secure reader to better emphasize an email experience.

*Here's the current experience for reading a secure email without installing the browser extension.*

 

## Where do we go from here?
The reworked path to reading experience allowed Virtru to scale to a larger audience. Senders no longer had to get their recipients to install new software. Instead, they just login and go.

However, the experience still has a lot of work that needs to get done, both from an engineering and a user experience perspective. More data needs to be collected, experiments need to be run to test hypothesis, tools to implement changes need to be built, and more user research needs to happen.