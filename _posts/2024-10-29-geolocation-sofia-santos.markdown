---
layout: post
title:  "Geolocation: OSINT Exercise #026 from Sofia Santos"
date:   2024-10-29 17:54:57 +0100
categories: geolocation
tags: [geolocation, OverpassTurbo, Suncalc]
---

This is a write-up for Sofia “Gralhix” Santos’ OSINT exercise #026. The goal of this exercise is to use the four pictures below and one video to answer several questions:

 - At which train stations did the person board and alight?
 - What is the mode of transportation in each image?
 - What is the type of train they rode?
 - What is the speed at which the train was traveling when the footage was recorded?
 - Approximately how far did the person travel overall?

This goal of this article is to show you how to geolocate the places shown in each files, using different tools and methods. The files are sorted by difficulty, with each methods and locations listed in bold. After locating the files, we will focus on answering the questions.

# Starting material

<div class="image-grid">
  <figure>
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2597.jpg' | relative_url }}" alt="A picture taken in a urban area with someone pushing a shopping cart.">
    <figcaption>IMG_2597.jpg</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2626.jpg' | relative_url }}" alt="A paved pedestrian street with a ferris wheel in the background.">
    <figcaption>IMG_2626.jpg</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2658.jpg' | relative_url }}" alt="A large city road with multiple brand logos in the background.">
    <figcaption>IMG_2658.jpg</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2747.jpg' | relative_url }}" alt="An overpass with a snowy hill behind it.">
    <figcaption>IMG_2747.jpg</figcaption>
  </figure>
</div>

<br>

<video controls playsinline style="width: 100%; max-width: 800px; height: auto;">
  <source src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2677.MOV' | relative_url }}" type="video/quicktime">
  Your browser does not support this video.
</video>


# Helva Art Café Shop — Easy

### Method: Google Maps


<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2626.jpg' | relative_url }}"
    alt="A paved pedestrian street with a ferris wheel in the background."
  >
</div>

The first thing that jumps out in this picture is the wooden sign with the word “HALVA” written on it. After zooming on 
the sign, we can see that it reads “HALVA Art café shop”.

<div class="post-image">
  <img
    src="{{ '/medias/osint_exercise_26_sofia_santos/1_VVddtA_1RJg157ZhsiqCjw.webp' | relative_url }}"
    alt="Wooden sign reading HALVA Art café shop"
  >
</div>

A quick search on Google Maps gives us only one results: [a store in Tashkent (Uzbekistan)](https://www.google.com/maps/place/Halva+Art+Cafe+Shop/@41.3255517,69.2655227,283m/data=!3m1!1e3!4m10!1m2!2m1!1sHALVA+Art+caf%C3%A9+shop!3m6!1s0x38ae8bbdeb9cbff5:0x34e6a1a936429ff7!8m2!3d41.3260747!4d69.2661864!15sChRIQUxWQSBBcnQgY2Fmw6kgc2hvcFoWIhRoYWx2YSBhcnQgY2Fmw6kgc2hvcJIBC2NvZmZlZV9zaG9w4AEA!16s%2Fg%2F11sr9nwknx!5m1!1e2?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D). A white Ferris wheel can be spotted a 100m south of it, matching the one in the picture’s background.

Given the location where that picture was taken (pedestrian area) and the type of street in the picture, we can assume that this picture was taken by someone walking.

**Location of the picture: 41.326065, 69.265462.**

# Chorsu Bazaar — Easy
### Method: Reverse Image Search

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2597.jpg' | relative_url }}"
    alt="A picture taken in a urban area with someone pushing a shopping cart."
  >
</div>

After loading the picture in Chrome, Google Lens matches it to the Chorsu Bazaar in the same city as the first picture: 
Tashkent (Uzbekistan). Unfortunately Google Street Views is not available there, to confirm that this is the correct
location, we can search for social media post of the place: [this YouTube vlog](https://www.youtube.com/watch?v=KOgDI8KYeQM)
shows the same ads and white arches as seen on the picture.

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_w8n0u8Tg4X9d3IggTLGULA.webp' | relative_url }}"
    alt="A picture taken in a urban area with someone pushing a shopping cart."
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Screenshot from the Youtube vlog</figcaption>
</div>

Given that the exercise's picture is taken from an elevated point of view, we can assume that the photograph was standing on the 
stairs entering the main building of the bazaar. This also aligns nicely with the building in the background behind the 
lamppost. The person was walking when taking the picture.

**Location of the picture: 41.326295, 69.235048.**

# Subway entrance — Medium
### Method: Overpass Turbo

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2658.jpg' | relative_url }}"
    alt="A large city road with multiple brand logos in the background."
  >
</div>

This is the first picture in this exercise which is not trivial to geolocate: reverse image search did not give any useful results and neither did googling elements of the pictures such as the Samsung Galaxy sign.

Looking at the picture we can isolate two useful features for geolocation: two bus stops and a metro station. After a quick google search, it appears that the red sign adorned with a white “M” matches the logo of Tashkent’s metro. This narrows it down but there are more than 50 metro stations in Tashkent, we have to reduce the number of places to check.

This is where Open Street Maps comes in: we can use it to query places in Tashkent that fit the following description: a metro entrance near a bus stop. If. you want to learn more about OSM and Overpass-tubo.eu, read this great [three part tutorial from Nixintel](https://nixintel.info/osint-tools/getting-started-with-overpass-turbo-part-1/).

After positioning our bbox over Tashkent, we can run the following query on overpass-turbo.eu:

```sql
[out:json][timeout:25];
// store all subway entrances in subway
(nwr["railway"="subway_entrance"]({{bbox}});)->.subway;
// store all bus stops in busstop
(nwr["highway"="bus_stop"]({{bbox}});)->.busstop;
// keep only subway entrances that are 30m or closer to a bus stop
nwr.subway(around.busstop:30);
out geom;
```

This gives us the following 13 results:

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_a1C7Ocya7qKomVc1V60W9Q.webp' | relative_url }}"
    alt="An OSM map with features selected by the above code highlighted."
  >
  <figcaption>Results of the above query on Tashkent</figcaption>
</div>

After inspecting them, only one location matches our picture. Using Google Street View, we can confirm the location:


<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_SR-vdBh47h44woZ4G3MRUA.webp' | relative_url }}"
    alt="Google Street View screenshot."
  >
  <figcaption>Google Street View screenshot</figcaption>
</div>

The same railing, the same partial red sign in the top left corner and of course our bus stops with the nearby subway entrance.

Given that the picture was taken on a road, we can assume that the photograph was in a car or a bus.

**Location of the picture: 41.299362, 69.272522.**

# View from the train — Hard
### Method: Overpass Turbo + Suncalc

For this video, we need to think about the context: the images we are analyzing seem to be from someone’s camera roll. 
They are titled like a digital camera would name images: incrementally. Thus, this video, _IMG_2677_, has been taken after 
the three images we already localised: _IMG_2597_ (Chorsu Bazaar), _IMG_2626_ (Halva Café) and _IMG_2658_ (Subway entrance). 
It would stand to reason that the train this person took departed from Tashkent.

If we take a look at a [map of the railways in Uzbekistan](https://railway.uz/upload/iblock/b73/b736cc5a0ba5a820a2e91a6941a9b52d.jpg), there are 4 railways leaving Tashkent:



<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_OF7PD2t3016ueJfKVcOLzg.webp' | relative_url }}"
    alt="A map of the main railways in Uzbekistan, zoomed in on Tashkent."
    style="width: 400px; max-width: 100%;"
  >
  <figcaption>Map of the railways linked to Tashkent</figcaption>
</div>

Now, let’s consider the following screenshots from the video:

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_kONZ9Aom2t2TOLXp4BLwIw.png' | relative_url }}"
    alt="Screenshot of the video at around 8 seconds."
  >
  <figcaption>Screenshot of the video at around 8 seconds</figcaption>
</div>

Two crucial piece of information are on this picture:

- The sun is on the left of the screen, behind the train.
- There are mountains in the background.

While keeping the position of the sun in mind, let’s [go to suncalc.org](https://www.suncalc.org/#/41.3005,69.333,8/2024.02.14/12:01/1/3):



<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_Yo0lxFNY2VDmjTp1zi5XMA.png' | relative_url }}"
    alt="Position of the sun in Tashkent on the 15th of February 2024 at 12:01"
  >
  <figcaption>Position of the sun in Tashkent on the 15th of February 2024 at 12:01</figcaption>
</div>

This shows that the train was likely traveling southwest, thus using railway number four on our map. The next major city
along that railway is Samarkand. Looking at this region on Google Earth, only the last third of the itinerary (circled in 
red below) seems to have the kind of mountainous landscape seen on the video.


<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_Pco0E0zekQLdmcqjvZ1meQ.png' | relative_url }}"
    alt="Screenshot of Google Earth with Samarkand on the bottom left and Tashkent on the top right"
  >
  <figcaption>Screenshot of Google Earth with Samarkand on the bottom left and Tashkent on the top right</figcaption>
</div>

We now have narrowed it down to an area small enough to use overpass-turbo.eu, we just need to find distinctive features.
Still using the same screenshot, we can make out what looks like a gas station (could also be a filling station for natural 
gas). 
Let's use Overpass turbo to search for a railway that has a gas/filling station nearby.

```sql
[out:json][timeout:25];
// store fueling amenities in fuel
(nwr["amenity"="fuel"]({{bbox}});)->.fuel;
// store railway ways in railw
(nwr["railway"]({{bbox}});)->.railw;
// keep elements in fuel that are 50m or closer to a railway
nwr.fuel(around.railw:50);
out geom;
```

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/1_AJUyny5LP-IcjLpJL7M60w.png' | relative_url }}"
    alt="Results of the above query on the last third of the railway between Tashkent and Samarkand"
  >
  <figcaption>Results of the above query on the last third of the railway between Tashkent and Samarkand</figcaption>
</div>

This leaves us with 3 possible location near Jizzax (the Samarkand results are too close to the city to match). After a
quick inspection with Google Earth, we find the location. Unfortunately, there are no Google Street View to confirm this.
Here are some element that are easy to spot from a satellite view that match the video:




<figure class="image-row-figure">
  <div class="image-row">
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/1_a5JjtD_QciIINgfpBWIm0A.png' | relative_url }}" alt="Screenshot 1">
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/1_emkgvu1hW9x-Bl9juM8ZJA.png' | relative_url }}" alt="Screenshot 2">  
    <img src="{{ 'medias/osint_exercise_26_sofia_santos/1_vPpA5zrpaQOOjmEnlJm3Mw.png' | relative_url }}" alt="Screenshot 3">
  </div>
  <figcaption>Screenshots from the video with notable features highlighted, ordered in chronologically</figcaption>
</figure>


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_xLaCA1n-rJ9W8cs1lTTt5Q.png' | relative_url }}"
    alt="Google Earth screenshots with the same features highlighted"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Google Earth screenshots with the same features highlighted</figcaption>
</div>

**Location of the picture: 40.097460, 67.803247.**

# Overpass — Hard

### Method: Overpass Turbo

<div class="post-image">
  <img
    src="{{ 'medias/osint_exercise_26_sofia_santos/IMG_2747.jpg' | relative_url }}"
    alt="An overpass with a snowy hill behind it."
  >
  <figcaption>An overpass with a snowy hill behind it.</figcaption>
</div>

So far here is what we know: this person visited Tashkent then took the train towards Samarkand. They might have disembarked there or might have gone further. Given the fact that there is a taxi in the image and a large overpass, we will assume they are in a large city. We can then use overpass-turbo.eu in the same manner: identify specific features and build a query to isolate them on the map.

The bridge is an obvious feature that we should include, something more subtle would be the crowd in the background: lots of people waiting, some of them carrying large bags. This hints at public transport. After a bit of research Samarkand seems to have two main public transport: tram and bus. With that said, we can build the following query:

```sql
[out:json][timeout:25];
// gather all bridges in the bridges set
(nwr[bridge]({{bbox}});)->.bridges;
// gather all bus stops and tram railways in public_transport
(
  nwr["highway" = "bus_stop"]({{bbox}});
  nwr["railway"="tram"]({{bbox}});
)->.public_transport;
// get all bridges that are 50m or less from an element of public_transport
nwr.bridges(around.public_transport:50);
out geom;
```


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_ww1_psm-qIcf8JkyZqIJsQ.png' | relative_url }}"
    alt="Results of the above query on Samarkand"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Results of the above query on Samarkand</figcaption>
</div>

We only have 3 results on the entire city. Using Google Street View, we can identify the correct location. Please note that this picture was captured in May 2024 according to Google Maps, which would explain the railings on the median (absent in the exercise’s picture).


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_RPjuAJW1OOWavy0emJyp0g.jpg' | relative_url }}"
    alt="Google Street View screenshot"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Google Street View screenshot</figcaption>
</div>

To determine which vehicle was used is a bit more tricky, there is a window reflection in the top right corner, thus this person is not walking. Although there are tram tracks nearby, they stop before getting close enough to the bridge. This leaves us with two possibilities: car or bus. Given the shape of the seat seen in the reflection, a bus seems more likely. As the picture was taken closer to the ground, maybe a minibus.

**Location of the picture: 39.665003, 66.979783.**

# At which train stations did the person board and alight?

We know that this person visited Tashkent then took the train to Samarkand. According to 
[Uzbek Railways’ schedule](https://eticket.railway.uz/en/pages/schedule), there
are two train stations that could be the start of a journey to Samarkand (САМАРКАНД): ТАШКЕНТ Ц or ТАШКЕНТ ЮЖ. One key 
difference separates them: all the earliest train to depart from ТАШКЕНТ ЮЖ leaves the station at 14:20.

Let’s remember what we know from the video: the sun was behind the train. If we use 
[suncalc.org](https://www.suncalc.org/#/40.0939,67.7774,11/2024.02.14/14:20/1/3), and carefully select 
the date and time, we see a train passing at 14:20 would have had the sun in front of it.


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_H6hMegWgXpb0AywsFyYmgw.png' | relative_url }}"
    alt="Position of the sun on the 15th of February 2024 at 14:20"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Position of the sun on the 15th of February 2024 at 14:20</figcaption>
</div>

This means that the train from which the video was taken, left the station before 14:20, thus it left from 
ТАШКЕНТ Ц (41.291364, 69.286933). As for where they alighted: there is only one train station in Samarkand according
to Google Maps and Uzbek Railways' schedule (39.685484, 66.929131).

**The person boarded their train at ТАШКЕНТ Ц and disembarked at the Samarkand train station.**

# What is the speed at which the train was travelling when the footage was recorded?
Now that we know where the video was taken, we can easily determine where it begins. The first image shows this 
location: **40.097428, 67.806656**.


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_yxLUgSuly4004vI_9cw8kA.png' | relative_url }}"
    alt="Screenshot of the beginning of the video"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Screenshot of the beginning of the video</figcaption>
</div>

While the last image shows this location: **40.097675, 67.793114**. Using Google Earth, we can measure the distance between 
the two locations which gives us 1.16 kilometer.


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_m_V21qef-4Wh4cYAlP8gNQ.png' | relative_url }}"
    alt="Screenshot of the end of the video (around 31 seconds)"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Screenshot of the end of the video (around 31 seconds)</figcaption>
</div>

Since we know the video is 31 seconds long, we can proceed with the formula: speed = distance / time, we can determine
the **speed to be approximately 37.41 m/s (134.7 km/h or 83.7 mph)**.

# What is the type of train they rode?

Fortunately for us, the [Wikipedia page for Uzbek Railways](https://en.wikipedia.org/wiki/Uzbek_Railways) lists the different model of passenger trains currently 
operated by the company: [ER9E](https://en.wikipedia.org/wiki/ER9_electric_trainset), 
[ER2](https://en.wikipedia.org/wiki/ER2_electric_trainset) and [Talgo 250](https://en.wikipedia.org/wiki/Talgo_250) 
(also named Afrosiyob). According to its Wikipedia page, ER2 maximum 
speed is 100 km/h which disqualifies it. We are left with the older ER9E or the modern high-speed Talgo 250. Several
other pages also mention a third type of train: Sharq trains ([rome2rio.com](https://www.rome2rio.com/map/Tashkent/Samarkand#trips/transport/Tashkent/Samarkand/r/Train/s/0) 
and [this travel agency](https://www.tourstouzbekistan.com/en/trains/type/sharq.html)), to complicate 
things, it also has a suitable speed: 160 km/h.

The speed of the train from the video would match the ER9E, which has a speed of 130 km/h, roughly the same as what we
deduced. However, this is not a definitive proof, since a high speed train like the Afrosiyob would likely have decelerated 
near a residential area like Jizzax, which is located near the area where the footage was taken.

**I did not manage to find a definitive answer to that question.**

# Approximately how far did the person travel overall?

Now that we have the location and order of all the different places we know this person has visited, we can simply add the distances between all of them:

- Chorsu Bazaar to Halva Art café shop: 3.5 km on foot according to Google Maps.
- Halva Art café shop to Tashkent train station: 5.3 km by car. The itinerary proposed by Google Maps passes by the location of the subway entrance picture.
- Tashkent train station to Samarkand train station: 328 km. I could not find any information online about the length of that journey. Fortunately, Google Earth allowed us to manually create a path following the train tracks from Tashkent to Samarkand then calculate the length of this path.
- Samarkand train station to the overpass: 5.2 km. Using [Moovit to list the bus lines](https://moovitapp.com/samarkand-6104/poi/Chosen%20location/Samarkand%20Railway%20Station/itinerary/en?metroSeoName=Samarkand&customerId=4908&ref=5&af_sub8=%2Findex%2Fen%2Fpublic_transit-Samarkand-6104&af_sub9=Search%20bar%20button&fll=39.685414_66.92833&tll=39.663487_66.981078) going from the train station to that bridge, we find four lines doing the same segment (ignoring the other lines as they take a detour). According to Google Earth, this segment is 5.2 km long.


<div class="post-image">
  <img
    src="{{'medias/osint_exercise_26_sofia_santos/1_Ym-1FDGZ6aai3jmBpP94VA.png' | relative_url }}"
    alt="Screenshot from moovitapp.com of the bus ride from the train station to the location of the fourth picture"
    style="width: 800px; max-width: 100%;"
  >
  <figcaption>Screenshot from moovitapp.com of the bus ride from the train station to the location of the fourth picture</figcaption>
</div>

**This gives us an approximate traveled distance of 342 km.**

---

I hope you enjoyed this article, it’s the first piece of content focusing on geolocation I ever wrote; given 
how much fun I had, I hope it will not be the last.