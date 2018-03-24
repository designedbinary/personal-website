---
title:  "Send and Read Secure Emails from Office 365's Web Email Client"
description: In an effort to expand further into the enterprise market, Virtru sought to integrate their easy-to-use email encryption services into Microsoft's Web Email client. Its unique design language, tech stack, and users presented some interesting challenges
goal: Apply all Virtru's send and read capabilities into OWA in a way that minimizes learning effort for users. 
results: Qualitatively validated satisfied customers who value ease-of-use, ability to expand to a different market 
role: UX Lead, UI/UX Design, User Research and Validation, Copywriting, Illustration
year: '2017'
layout: work
---

{% include figure.html image_asset="/assets/virtru_owa_logos.PNG" image_caption="This projects goal was to integrate Virtru features into an existing interface." %}

As Virtru expanded further into the B2B space with enterprises, integration into the Microsoft ecosystem became a necessity. Not only would it allow Virtru to expand into a new and larger market, but it also provided a safety net in the form of diversification. 

The integration task involved porting all of our features from Gmail to Microsoft's ecosystem, starting with: 
- Encrypt a new email
- Managing an encrypted email 
- Reading and responding to encrypted emails
- Activation and Onboarding

{% include figure.html image_asset="/assets/virtru_owa_no_virtru.png" image_caption="NOTE: This is what the Outlook web app looked like without the Virtru integration. You'll see many images below that have a few more elements added in. Those are the parts that I worked on." %}

## Discovery

Once the decision was made to move forward with the integration, we started the project with a general goal of porting all the same functionality from our other products. To better clarify the direction we were moving, I brought a series of questions to our kickoff, with the most important being: 
- Who were we targeting and why would they use this over competing products?
- Are the end-users materially different from users on our Gmail product? 
- Constraints? 
- Success Criteria? 

Working with various stakeholders on the team, I was able to collect answers. Some answers were collected through customer development, other answers had to be derived from additional user interviews that I planned and conducted.

## Multiple solutions 

Considering all the constraints and goals, we eventually centered on two potential solutions: 1) Integration with the Microsoft Office store or 2) Creating our own separate web extension. 

The Office store integration was a very appealing solution because it offered us wide reach with a potentially low development cost ( integration into all Mobile apps, desktop apps, and websites). The potential risks were unknown limitations and level of effort. We had no idea what exactly we could control, what this meant for the user experience, and if we would actually save on the development effort. 

The web extension solution was much more familiar. We generally knew the development cost, based on past experience, and we had absolute control of the UI. The risks and limitations were unknown technical limitations as well as integration only with Outlook web app on a single browser. 

From my perspective, the Office store integration seemed like a silver bullet. It provided us with familiar interaction patterns that we could leverage without much effort as well as a potentially lower maintenance cost with greater reach. Past experience has taught me that a high maintenance cost can detrimentally affect a user's experience. So, I was very much in favor of exploring this solution. 

The rest of the team came to similar conclusions and we started work to de-risk this solution. This was done through research, experiments, and user tests of key experiences. 

{% include figure.html image_asset="/assets/virtru_owa_ms_store_mockup.gif" image_caption="An animated mockup of of the read and reply experience for the store integration. Ultimately what was possible through the store was simply too awkward of an experience." %}

The results of our work revealed that the store integration was not a viable solution. What we were able to control was much too limited, resulting in an awkward user experience. To help the user through this awkward experience would require significant training, which defeated our core value proposition: ease-of-use. We abandoned this solution and moved into the next option: a web extension.

## The one solution (…to rule them all?)

Or at least the best solution that would help us meet our goals.

While we abandoned the initial solution, we learned a lot. So, we didn't have to redo everything from scratch, but we still needed to work out what the key experiences looked/felt like. With our stakeholders, we started by sketching and brainstorming potential experiences. Expanding on those brainstorming session, I wanted to make sure we wholistically considered the entire experience, so I would create quick maps to help us understand how everything fit together. 

{% include figure.html image_asset="/assets/virtru_owa_sketches1.png" image_caption="Some sketches of the secure compose experience, derived from brainstorm session with stakeholders." %}

{% include figure.html image_asset="/assets/virtru_owa_whole_experience.png" image_caption="With an eye on the whole experience, I created various journey maps to ensure the entire experience was constantly considered." %}

Once we were confident enough about the experience we created, I made a variety of high fidelity prototypes, ranging from simple click-throughs to animated videos to better understand the experience. In addition, I put these in front of our customers to get feedback. This allowed us to iteratively make improvements and course correct. (Yup, I skipped over low-fidelity prototypes as Microsoft's design language provided us with enough material to go straight into high fidelity to get higher quality feedback.) 

{% include figure.html image_asset="/assets/virtru_owa_explorations1.png" image_caption="Sketches can only communicate so much. Here are some examples of exploring a problem space through sheer volume." %}

{% include figure.html image_asset="/assets/virtru_owa_compose_security_options_selected_upgrade.png" image_caption="Leveraging Microsoft's design language, I skipped low fidelity for high fidelity mockups to produce higher quality feedback." %}

{% include figure.html image_asset="/assets/virtru_owa_virtru_on.gif" image_caption="In certain situations, animation helped to receive appropriate feedback. Here is a prototype created to better understand if the right feedback was being communicated." %}  

## Results

Working with our customers, we were able to build a product that met their business requirements and made it easy for their employees to use. Furthermore, we were able to expand Virtru into the Microsoft ecosystem, providing a larger set of potential customers. At the time of this writing, the web extension had not been widely rolled out. So, our qualitative results have yet to be validated through quantitative data, but I am confident it will be generally positive. 

Here are a few images of the final results. The entire experience was much larger than what is depicted here, but hopefully it will give you a glimpse into the work that was done. 

{% include figure.html image_asset="/assets/virtru_owa_install_confirm.png" image_caption="A view of the Installation Success screen and the illustration I created to engage the user." %}

{% include figure.html image_asset="/assets/virtru_owa_activation_install.png" image_caption="To use Virtru, users must activate the extension. The activation prompt generally strives to appear when the user is within the context of wanting to use Virtru. In this way, we avoid annoying users who do not want to use Virtru right now." %}

{% include figure.html image_asset="/assets/virtru_owa_activation_compose.png" image_caption="As a security measure, the user must reactivate their extension. This is an example of a contextual prompt." %}

{% include figure.html image_asset="/assets/virtru_owa_activation_read.png" image_caption="Contextual activation when reading a secure email." %} 

{% include figure.html image_asset="/assets/virtru_owa_virtru_decrypt.gif" image_caption="A prototype of the decryption experience." %}

{% include figure.html image_asset="/assets/virtru_owa_read_receipt_group_expanded.png" image_caption="Read receipt allowed senders to know when recipients have read a secure email." %}

{% include figure.html image_asset="/assets/virtru_owa_read_intcheck_potentially_malicious_open.png" image_caption="In addition to the core experience, error states were accounted for and created following Microsoft's design language." %}
