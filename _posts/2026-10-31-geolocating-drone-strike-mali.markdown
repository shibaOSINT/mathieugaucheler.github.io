---
layout: post
title: "Geolocating a drone strike in Mali"
date: 2026-10-31 17:54:57 +0100
categories: Investigations
tags: [ Mali, Geolocation, FLA]
---


During the evening of the 29th of September 2026, the spokesperson of the Front de Libération de l’Azawad (FLA) posted a
video showing a first person view of two different drones strikes allegedly targeting the Malian army (FAMa) and the
Africa Corps. The post bears the following caption:

> Ce matin, le FLA a mené une série de frappes de drones contre des positions des FAMa et des éléments russes de
> l’Africa Corps à Goundam. Ces frappes ont infligé de lourds dégâts matériels et humains aux positions ciblées.

**Translation**
> This morning, the FLA carried out a series of drone strikes against positions held by the FAMa and Russian elements of
> the Africa Corps in Goundam. These strikes caused significant material damage and casualties at the targeted positions.

<video controls playsinline style="width: 100%; max-width: 800px; height: auto;">
  <source src="{{ 'medias/drone_strike_mali_FLA/original_video.mp4' | relative_url }}" type="video/quicktime">
  Your browser does not support this video.
</video>

When looking at Goundam on OpenStreetMap, it has one area tagged as military: an ex-MINUSMA base which we would expect
to be the area targeted by the FLA. However, nothing in the video matches this particular location.

<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/1_osm.png' | relative_url }}" alt="Map of Mali">
    <figcaption>The location of Goundam (Mali)</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/2_osm.png' | relative_url }}" alt="OSM screenshot">
    <figcaption>Goundam as shown on OpenStreetMap. <br>The area tagged as military is highlighted in orange.</figcaption>
  </figure>
</div>

## Finding a candidate location

In these stills from the video we can distinguish a few things which are mentioned in the captions below.



<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/Screenshot from 2026-10-28 20-32-04.png' | relative_url }}" alt="">
    <figcaption>Target of drone #1: a few trucks and a liquid container near a garage.</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/Pasted image 20261015190508.png' | relative_url }}" alt="">
    <figcaption>Several trees as well as a flat and empty area in the background.</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/Pasted image 20261013182310.png' | relative_url }}" alt="">
    <figcaption>Important detail on the right-hand side: a bridge crossing a river</figcaption>
  </figure>
</div>

This is a tremendous help as there is only one bridge fitting this description in Goundam: a part of the _Route Nationale 33._ The small size of the city allows us to verify this using OpenStreetMap and Google Earth Pro. The drone flies slowly, keeping the river on its right and dives before crossing the bridge. This would make this location (**16.41322°N 3.65451°W**) a likely candidate. Let’s confirm this with the rest of the video.



<div class="post-image">
  <img
    src="{{ 'medias/drone_strike_mali_FLA/1_Hdy8RpWunhccRqnmk9_gkw.png' | relative_url }}"
    alt="Google Earth imagery of 16.41322°N 3.65451°W"
  >
  <figcaption>Google Earth imagery of 16.41322°N 3.65451°W</figcaption>
</div>

## Confirming the location

Analyzing the trajectory of the first drone, we can draw a rudimentary scene: the drone flies over a wall, passes some trees and a first structure, possibly a shed, takes a quarter turn to the left and dives toward the liquid container. This fits the Google Earth satellite imagery of the candidate location.



<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/drone 1.drawio.png' | relative_url }}" alt="">
    <figcaption>Mockup of drone #1 flight path</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/drone 1 - annotated screens.png' | relative_url }}" alt="">
    <figcaption>Annotated screenshot highlighting certain elements.</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/drone 1 - justification.png' | relative_url }}" alt="">
    <figcaption>Annotated Google Earth imagery <br>with the same elements highlighted</figcaption>
  </figure>
</div>

Analyzing the video of drone #2, we can map several elements from the video to Google Earth’s imagery. This includes the bridge that helped us chose this location in the first place.


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/drone 2 - gg maps.png' | relative_url }}" alt="">
    <figcaption>Annotated Google Earth imagery</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/drone 2 - screen 1.png' | relative_url }}" alt="">
    <figcaption>Frame from the video with bridge highlighted</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/drone 2 - screen 2.png' | relative_url }}" alt="">
    <figcaption>Frame from the video with orchard highlighted</figcaption>
  </figure>
</div>


This gives us the following flight path for both drones. Using a more recent image from Vantor, dated 11 days before the attack, we can confirm the end of flight of drone #1. The setup of the trucks and liquid container matches with the first image of the video, helping us confirm the location.



<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/capture full flight path google earth.png' | relative_url }}" alt=""
    style="height: 450px;">
    <figcaption>Annotated Google Earth imagery (2025–06–13)</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/export QGIS SkyFi.png' | relative_url }}" alt=""
    style="height: 450px;">
    <figcaption>Vantor imagery (2026–09–18)</figcaption>
  </figure>
</div>

The position of the sun also matches our candidate: using footage from drone #1. In the screenshot below, the building in the lower left corner of the is the structure next to the liquid container targeted by the drone. Using [Suncalc](https://www.suncalc.org/#/16.4132,-3.6548,19/2026.09.29/08:16/1/1) we can assess that the footage does match that location and the time mentioned by the FLA spokesperson, **most likely around 8AM UTC**.

<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/sun - 1 - screen vid.png' | relative_url }}" alt="">
    <figcaption>Frame from drone #1's footage </figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/drone_strike_mali_FLA/sun - 2 - suncal.png' | relative_url }}" alt="">
    <figcaption>Suncalc positioned where the frame was taken</figcaption>
  </figure>
</div>

## Conclusion

According to the video, drone #2 seemingly ended its flights in a cluster of trees. A fact mocked by a Wagner adjacent Telegram channel a day after the attack.

The final frames of the video for each drone have been located to **16.41319°N 3.65451°W** (Drone #1) and **16.41358°N 3.65453°W** (Drone #2) with a high level of confidence. We can assess with low confidence that the attack happened around 8AM UTC.

<div class="post-image">
  <img
    src="{{ 'medias/drone_strike_mali_FLA/wagner reaction - cropped.png' | relative_url }}"
    alt="Telegram post"
  >
  <figcaption>Telegram post dated from 2026–09–30</figcaption>
</div>