---
layout: post
title:  "L3akCTF 2025 — Fidget Spinner Writeup"
date:   2025-07-14 17:54:57 +0100
categories: CTFWriteup
tags: [CTF, Geolocation, OverpasTurbo]
---

This is a writeup for an OSINT challenge part of the [2025 L3ak CTF](https://ctf.l3ak.team/). The format was similar to GeoGuessr: you are given a random location on Google Street View and have to pinpoint this location on a map, as accurately as possible.

This write-up will explore the methods through which our team [THEM?!](http://discord.gg/its-them) solved this challenge.

## Finding the general area

You can access the [challenge here](https://geosint.ctf.l3ak.team/L3akCTF-fidget_spinner). In case it gets taken down, here are a few images:






<div class="image-grid">
  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_6REYv1j5Zu5u-By5YsAOyw.png' | relative_url }}" alt="">
  </figure>

  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_oI4QXYj3c0-7NLYeUjT1lA.png' | relative_url }}" alt="">
  </figure>

  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_etLs0RGLB5tHjCJ7a2OsaQ.png' | relative_url }}" alt="">
  </figure>

  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_u0mezeBVSI-eSlY---MJPw.png' | relative_url }}" alt="">
  </figure>
</div>

Searching the windmill, the most notable element in these picture, in Google Lens yields the following results:



<div class="post-image">
  <img
    src="{{ 'medias/fidget_spinner_leak_ctf/1_HGNUYh5NqopPhCkFoAsiEA.png' | relative_url }}"
    alt="Google Lens output"
  >
  <figcaption>Google Lens output suggesting the island of Öland as a location</figcaption>
</div>

This kind of AI overview is powerful but always need to be checked, in case of hallucinations. Here, we can use the street sign, near the yellow building in our second image. Searching for “priority road sign sweden” yield the [following image from Wikipedia](https://commons.wikimedia.org/wiki/File:Sweden_road_sign_A29-1.svg), confirming that this is likely a Swedish sign.



<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_5W6gxp_BeHyENaayEkc8lA.webp' | relative_url }}" alt="Detail of the second image showing a road sign">
    <figcaption>Detail of the second image showing a road sign</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_cbQV8uOW6pJnVv8qw7fmLA.webp' | relative_url }}" alt="Swedish street sign matching the sign in the image">
    <figcaption>Swedish street sign matching the sign in the image</figcaption>
  </figure>
</div>

Assuming that Google Lens is right, we restricted our search to the island of Öland. According to [Wikipedia](https://en.wikipedia.org/wiki/%C3%96land), this means we had to cover an area of more than 1300 km square kilometers.

## Taking a shortcut

To avoid looking at thousands of kilometers of road, I used [Overpass-turbo.eu](https://overpass-turbo.eu/) to generate a list of all the windmills on the island.

```sql
[out:json][timeout:25];
//restrict our search to the island
area[name="Öland"];
(
  // search for windmills
  nwr["man_made"="windmill"](area);
);
// print results
out geom;
```

This gives us quite a [large number of results](https://overpass-turbo.eu/s/27MX), to check every pin in Google Street View in a data set this size, it is often best to export it as a .kml file and drop it into Google Earth. This will allow you to thoroughly examine each points by going down the list pin by pin.



<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_PyNHCAj8Q1tdgBKDK-iOoQ.webp' | relative_url }}" alt="The results of the query above on OverpassTurbo">
    <figcaption>The results of the query above on OverpassTurbo</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_wXgLhtDIgI98yRuPW9QTfg.webp' | relative_url }}" alt="The resulting KML file imported to Google Earth Pro">
    <figcaption>The resulting KML file imported to Google Earth Pro</figcaption>
  </figure>
</div>

Unfortunately, this did not lead us to the solution: Open Street Map (Overpass-turbo’s data source) is a collaborative initiative, relying on its vast community to maintain its database. This means that some elements can be missing for it: if nobody bothered adding this particular windmill, it will not appear in our search results. OSM is an invaluable source of information for GEOINT, but it is not infallible.

Please note that this windmill [has since been added](https://www.openstreetmap.org/way/1414503638/history), however it was not present at the time of the CTF.

## Reducing the area of research

After realizing that the list from Overpass-turbo.eu did not contain our target, we had to think of another way to narrow down our area of research.

### Road Orientation

Because of the low altitude of the sun, we assumed this was either early or late in the day, which would position the sun in the east or the west. Because of its position in the picture, it would indicate that our road is roughly oriented North to South.

### Type of road

The road shown in the picture is a very small road with no markings on the sides nor the center. This points to a remote area, separated from the main roads. This helped us to steer clear of the two main roads: [road 136](https://en.wikipedia.org/wiki/Swedish_county_road_136) and its, albeit smaller, equivalent on the east side of the island.

---

After this, the only thing left to do was to methodically check suitable roads. Unfortunately we quickly noticed that our assumption regarding the direction of the road was most likely false: because of how far north the island is. See below this screenshot from Google Street View with similar lighting as our target, in which you can see the sun while facing south. This [Suncalc.org](https://www.suncalc.org/#/56.994,16.8684,8/2020.12.16/12:22/1/3) overview shows the sun’s behavior in December 2020. The orange line representing sunrise and the red line sunset.


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_UcSWN7XmPA8e7kNEYEcvVQ.webp' | relative_url }}" alt="">
  </figure>

  <figure>
    <img src="{{ 'medias/fidget_spinner_leak_ctf/1_aJNiFMqObkJ9Z8apR3LTDg.webp' | relative_url }}" alt="">
  </figure>
</div>


By broadening the search to roads facing any direction and focusing on the northern part of the island due to architectural similarities, I was able to find the [correct address](https://www.google.com/maps/@57.1249237,16.9466817,3a,75y,199.06h,78.41t/data=!3m11!1e1!3m9!1sdjp1E7_D87fFjNq_13B33A!2e0!5s20201201T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D11.590226465768325%26panoid%3Ddjp1E7_D87fFjNq_13B33A%26yaw%3D199.0632248964988!7i16384!8i8192!9m2!1b1!2i18?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D) here: **57.12492, 16.94668**.

## Tools

[Google Street View](https://www.google.com/maps/), [Overpass Turbo](https://overpass-turbo.eu/), [Google Maps](https://www.google.com/maps), Google Earth Pro, [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) and [Suncalc.org](https://www.suncalc.org/#/56.994,16.8684,8/2020.12.16/12:22/1/3).

