---
layout: post
title:  "Looking at an arms convoy in Mali"
date:   2025-04-07 17:54:57 +0100
categories: Investigations
tags: [Mali, Geolocation]
---

Thanks to social media, it is increasingly easy to find footage of military activity. Before the 2022 invasion of Ukraine, several OSINTers found out that [Russia was massing troops at the border](https://observers.france24.com/en/europe/20220211-meet-the-anonymous-internet-investigators-tracking-russian-movements-on-the-ukrainian-border), hinting at an imminent invasion. In this post, we will look at a video shared by a Telegram channel showing a convoy in the streets of Bamako, Mali.

The 27th of March, the Telegram channel White Uncles in Africa shared the following video with this accompanying text:

>🌴🇲🇱 В столице Мали снова замечен военный конвой с техникой и контейнерами. Западные теребоньки предполагают, что это для “Африканского Корпуса” (МО РФ).

<video controls playsinline style="width: 100%; max-width: 800px; height: auto;">
  <source src="{{ 'medias/arms_convoy_mali/1743414271840.mp4' | relative_url }}" type="video/quicktime">
  Your browser does not support this video.
</video>


Here is what Google Translate makes of this text: “🌴🇲🇱 A military convoy with equipment and containers has been spotted in the capital of Mali again. Western terebonki assume that this is for the “Africa Corps” (RF MoD).”

The first thing we need to do is verify if the caption is indeed correct.

To corroborate that this is a military convoy, we can focus on the **licenses plates** (white letters on a black background) which match the ones used by the **Malian army** ([see examples here](https://francoplaque.fr/af/rmm/5882-MILIT)). The presence of men in military fatigue aboard several vehicles is also a strong indicator. Let’s geolocate the video to confirm it was taken in Bamako.

## Where was the video taken?

Looking at the video, a large monument with a golden apex can be seen in the background. By searching it on **Google Lens** and adding “mali” as a search keyword, we can establish that this structure is the _Monument de l’indépendance_ in Bamako (**2.6371, -8.0047**).


<div class="post-image">
  <img
    src="{{ 'medias/arms_convoy_mali/1_f_JwyWw4BNmOZf-qvBJq8g.png' | relative_url }}"
    alt="Google Lens used on a frame of the video."
  >
  <figcaption>Google Lens used on a frame of the video</figcaption>

</div>

This monument is connected to three different roads: _boulevard du 22 Octobre_, _Avenue de la Nation_ and _Avenue de l’indépendance._ Let’s determine which road was taken by the convoy.

## No Google Street View? No problem

Normally, we would simply drop in Google Street view, look around and match specific features in the surrounding area to what is shown in the video. Unfortunately for us, **Google Street View is not available** in that zone. As an alternative, we have to search for footage of this area.

To demonstrate how to do so, we can take the big blue building visible in the top left corner of the central screenshot below.


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1__BeloOCn5wP1bEub4E6x5Q.webp' | relative_url }}" alt="TikTok screenshot of the location">
    <figcaption>TikTok screenshot of the location</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_yVafMFPWU-GD82yys7LsKA.webp' | relative_url }}" alt="Frame from the original video">
    <figcaption>Frame from the original video</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_uCYEES9KPh3l2c57oW7c6w.webp' | relative_url }}" alt="Screenshot from Google Earth Pro">
    <figcaption>Screenshot from Google Earth Pro</figcaption>
  </figure>

</div>

This is most likely the building inside the red rectangle in the Google Earth Pro screenshot. This [TikTok post](https://www.tiktok.com/@mammakalakare190/video/7459189702948588822?q=avenue%20de%20l%27ind%C3%A9pendance%20bamako&t=1743172139876) from January 2025 shows a similar view of this building (left). This post was filmed roughly at the same place where our video was filmed, at the yellow dot on the Google Earth screenshot above, at 12.638027°, -8.005047°.


We successfully verified what the fact cited by the caption. However we have one problem: the **video is edited**, we cannot estimate how long the convoy is or its composition.

## A second video of the convoy

Looking for other sightings of that convoy, we find a longer, unedited video published by the Bamako based media _Cap Mali_:

<iframe width="915" height="515" src="https://www.youtube.com/embed/xeaqBIBi49k" title="26 mars 2025 arrivé des nouveaux équipements militaires, écouter Boubou Mabel pour les commentaires" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This 20 minutes video is a from a live broadcast and shows the convoy in its entirety:

- 104 trucks with a container
- 19 pickup trucks with a mounted gun
- 12 pickup trucks or cars
- 3 tank trucks (possibly carrying fuel)
- 1 car bearing red crosses
- 1 truck carrying a boat
- 1 truck carrying a Lonking LG100DT diesel forklift
- 1 towing and recovery unit Century 5230 from Miller Industries
- 1 QY50KD crane from XCMG

To confirm that these two videos show the same convoy, we search for the same vehicles being present in both videos, as shown in the screenshots below. This is made easier by the colored stripes on their push bars.


1_cJZNd_lKzFwk96WMFwQtyg.png
1_NukithvgQo6biyaiGf0OXA.png
1_TQBNzZ5l5iNJYTfeVZTQ_g.png
1_aRPHKVND3iy-tbkpLuB9hQ.png

<div class="image-grid">
  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_cJZNd_lKzFwk96WMFwQtyg.png' | relative_url }}" alt="">
    <figcaption>Boat carried on a truck found on the original video</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_NukithvgQo6biyaiGf0OXA.png' | relative_url }}" alt="">
    <figcaption>The same vehicles found in the Cap Mali video</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_TQBNzZ5l5iNJYTfeVZTQ_g.png' | relative_url }}" alt="">
    <figcaption>Truck with yellow, white, red, white push bars.</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_aRPHKVND3iy-tbkpLuB9hQ.png' | relative_url }}" alt="">
    <figcaption>The same truck found in the Cap Mali videos</figcaption>
  </figure>
</div>

While doing interviews, the camera pans around and gives us some precious information to help geolocate this footage: showing a gas station called _Soleil Oil_. By typing that name in **Google Maps**, we can easily establish that this footage was taken from the roundabout at **12.612658°, -8.044582°**.




<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_vs-ydCJRNDddCD1uAiR__g.png' | relative_url }}" alt="">
  </figure>

  <figure>
    <img src="{{ 'medias/arms_convoy_mali/1_zp1jyDk7KA5NtoLVjlO9TQ.png' | relative_url }}" alt="">
  </figure>


</div>

To better understand the path taken by the convoy, we can take a look at a map and add the direction taken by the vehicles in each video.



<div class="post-image">
  <img
    src="{{ 'medias/arms_convoy_mali/1_kz088ypaNya-flFL_W6-2g.png' | relative_url }}"
    alt="Google Earth screenshot with pins where both video where taken and the direction the convoy took"
  >
  <figcaption>Google Earth screenshot with pins where both video where taken and the direction the convoy took</figcaption>

</div>

## Tools and Websites  
[Google Lens](https://www.google.com/?olud=), [Google Earth Pro](https://www.google.com/earth/about/versions/), [TikTok](https://www.tiktok.com/) and [Francoplaque](https://francoplaque.fr/af/rmm/5882-MILIT).

I hope that this short blogpost was informative, to go further on that subject, you can read this excellent post focused on a similar convoy spotted earlier that year: [Special Report: A Convoy of Over One Hundred Russian Vehicles Arrives in Mali](https://frontelligence.substack.com/p/special-report-a-convoy-of-over-one) .
