---
layout: post
title:  "Bellingcat Challenges: Bellingcat Globetrotters"
date:   2024-12-20 17:54:57 +0100
categories: Bellingcat_Challenges
tags: [Geolocation, Satellite Imagery, Suncalc, PeakVisor]
---



Christmas came early this year thanks to the excellent people at Bellingcat. They provided us with OSINT challenges. This is a write-up of the first week of exercise: Bellingcat Globetrotters. The tools used are listed at the end of each section. I am not affiliated with Bellingcat.

As per Bellingcat’s wishes, **the complete images are not included to avoid polluting the image reverse search results**, however a description in italic has been added. The pictures and the challenges are available here.

The answer to each challenge is highlighted at the end of its section.

# 1 — A Sticky Situation
>In August of 2022, Bellingcat’s Foeke Postma found himself looking over this beautiful view, complete with a Bellingcat sticker!
>But where was this enviable mountaineering adventure taking place?
>What is the name of the mountain on which Foeke was standing?

>Puzzle by [Foeke, Bellingcat](https://www.bellingcat.com/author/foekepostma/)


_The accompanying picture shows a green zigzag shaped valley, set between mountains. On the right side, close to the camera, is a wooden structure with several stickers on it._

## Reducing the area of research

Zooming in on the stickers on the right of the image, we can see some text written in German as well as the Tyrol region being mentioned several times.
Uploading the picture on Google Lens and focusing the tool on the mountains in the left part also leads us to the same area. The vegetation, mostly coniferous, also matches that part of the world.

The Tyrol is a large region spanning several countries, finding the valley in the picture seems like a safe way to find the mountain we are searching for. To do so, we need to list characteristics that will allow us to find it using satellite imagery.

## Orientation of the valley

We know that the picture was taken in August 2022 and looking at the picture, trees cast shadows longer than their own heights which indicate that this is likely toward the end of the day or early morning. Using suncalc.org, we can determine the approximative position of the sun in the picture. Which in turn allows us to determine the orientation of the valley: roughly North West to South East.

## Is that a lake that I see?

Looking at the background of the picture, we can distinguish a uniform blue mass at the bottom of a valley, most likely a lake. The shape of the valley leading to it, forming a Z, should also be noted.



<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_globetrotters/1_DYFbNz7-JCelAtMsGkM7oA.png' | relative_url }}"
    alt="Close up of the exercise picture, centered around the lake."
  >
  <figcaption>Close up of the exercise picture, centered around the lake.</figcaption>
</div>

## Take it to the sky

Using Google Earth Pro, let’s take a look at the Austrian part of the Tyrol. To make this easier, we have to reduce the amount of information on our screen, disable any layers except borders. After a bit of searching, a suitable location present itself.



<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_globetrotters/1_McNTa3lsKsclskpZz1HBjg.png' | relative_url }}"
    alt="Google Earth imagery centered around 47.387921, 11.936367"
  >
  <figcaption>Google Earth imagery centered around 47.387921, 11.936367</figcaption>
</div>

This particular area does fit our criteria:

1. A lake in the background. 
2. Z-shaped valley leading up to it. 
3. The valley is roughly oriented NW-SE.

Let’s take a dive using the ground-level view feature of Google Earth Pro Please note that a better
alternative might have been [PeakVisor](https://peakvisor.com/peak/wiedersberger-horn.html?yaw=-59.05&pitch=-9.12&hfov=60.00),
which Bellingcat [has used in the past](https://www.bellingcat.com/resources/2023/07/13/more-than-mountaineering-using-peakvisor-for-geolocation/). Regardless of the tool, we are able to obtain a picture that looks very much
like the one from the exercise.

Use the slider below to progressively overlay a Google Earth screenshot with the challenge's picture.

<div class="image-compare">
  <div class="image-compare__stage">
    <img
      class="image-compare__first"
      src="{{ 'medias/bellingcat_globetrotters/google earth screen.png' | relative_url }}"
      alt="Google Earth screenshot of the candidate location"
    >
    <img
      class="image-compare__second"
      src="{{ 'medias/bellingcat_globetrotters/google earth screen with challenge image overlayed.png' | relative_url }}"
      alt="Same Google Earth screenshot with the challenge image overlayed on it"
    >
  </div>

  <label class="image-compare__control">
    Opacity Control
    <input class="image-compare__slider" type="range" min="0" max="100" value="0">
  </label>
</div>


According to PeakVisor, the name of the mountain from which the screenshot was taken is the **Wiedersberger horn**.

## Tools used

Google Earth Pro, PeakVisor and SunCalc.

# 2 — Flamin-Go Find It!

>When Kolina was out and about she snapped this shot of some friendly flamingos.
>These wading birds are known for their long legs and bright pink plumage, and can be found all around the world. Can you wade through this challenge to find them?
>What is the name of the area in which you’d find these flamingos?

>Puzzle by [Kolina, Bellingcat](https://www.bellingcat.com/author/kolinakoltai/)

_The accompanying picture displays a group of flamingos. A shallow pond occupies the lower third of the image. In the background, a chain-link fence and a wooden shack blend with a hedge._

Analyzing the picture, we can notice a few things: there are man-made structures in the background, seemingly forming an enclosure. Moreover, a majority of the flamingos have one or two rings on their legs. This could indicate that the picture was taken in a zoo.

A vast number of zoos have flamingos amongst their residents, to narrow it down we can identify the exact species of flamingo on the picture.

Google Lens identifies these birds as **Chilean flamingos** (_Phoenicopterus chilensis_), we can corroborate this by looking at their white and black beak, grey legs, and the paler shade of pink of their plumage.

Interestingly enough, the author of this challenge is
[Kolina Koltai](https://www.bellingcat.com/author/kolinakoltai/), who
co-authored this [compelling article about OSINT done wrong](https://www.bellingcat.com/resources/2024/04/25/oshit-seven-deadly-sins-of-bad-open-source-research/).
A quick Google search leads us to her [Twitter account](https://x.com/KolinaKoltai), which bio indicates that she is
located in Seattle, WA.

Searching for “chilean flamingo zoo seattle” on Google yields the [following link](https://www.zoo.org/temperateforest) 
from the **Woodland Park Zoo**, 
describing the animals they house in the Temperate Forest area of the zoo.

To confirm that we have the right place, let’s search for 
[pictures of the enclosure in Flickr](https://www.flickr.com/search/?text=woodland+park+zoo+flamingo).
Several picture [such as this one](https://www.flickr.com/photos/findwell/9281212658/), look similar to the challenge’s picture.



<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_globetrotters/1_KTYV7iUqhoTOi2LsArz6Pg.jpg' | relative_url }}"
    alt="A picture of seemingly the same enclosure"
  >
  <figcaption>A picture of seemingly the same enclosure</figcaption>
</div>

This confirms **Woodland Park Zoo** as the correct location.

## Tools used

Google and Google Lens.

# 3 — Pulling Focus

>When Aiganysh was travelling by car, she took this photograph of a building. Despite her best efforts, the building came out a little blurry. 
> Can you figure out what the building is used for? 
> What is the function of this building? 

> Puzzle by [Aiganysh, Bellingcat](https://www.bellingcat.com/author/aiganysh/)

_The accompanying picture shows a house with a two lines written in Cyrillic on its front. It is seemingly taken from a moving car, on account of the blurriness of the image and the road in the foreground. Hills with little vegetation can be seen in the background_

When it comes to geolocation, a building name is often the quickest way to know where a picture was snapped. 
This is no exception. However, the picture is slightly blurry, making it difficult to read. 
Especially for people that do not know how to read Cyrillic.

Luckily, Google Lens has OCR capabilities:

<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_globetrotters/1_7iQx6x0pj2jyB34Yi9ynKQ.png' | relative_url }}"
    alt="Google Lens’ results on the text of the central building"
  >
  <figcaption>Google Lens’ results on the text of the central building</figcaption>
</div>

This leads us to the village of **Kazan-Kuygan** in **Kyrgyzstan**. Fortunately for us, this hamlet has **only one main 
road** that would match the one from which the picture was taken. Traveling across it using Google Street View, 
we come across this location that seemingly matches the exercise (**41.629530, 75.845130**).


<figure class="image-row-figure">
  <div class="image-row">
    <img src="{{ 'medias/bellingcat_globetrotters/1_ElrHy-EFsqUQlqMvu3vo4g.png' | relative_url }}" alt="Google Street View screenshot">
    <img src="{{ 'medias/bellingcat_globetrotters/1_nNXfpEixD72RNL4NnZyBGw.png' | relative_url }}" alt="Challenge’s picture">
  </div>
  <figcaption>Left: Google Street View screenshot — Right: Challenge’s picture</figcaption>
</figure>

One small detail remain: the building that we are supposed to identify is missing from the Street View imagery. Luckily, this is explained by looking at the imagery date on Google Earth Pro: 10/2015. The same location, viewed with satellite images from March 2023 has the building from the challenge.

Google Maps does not have further information on this particular building, but fortunately, Open Street Map does: it is tagged as a **library**.

## Tools used

Open Street Map, Google Earth Pro and Google Lens.

# 4 — The Rider's View

>This street scene was captured by Giancarlo, but perhaps he left out an historic detail. 
> What nearby monument can the rider see from their vantage point? 
> The monument is to a person, what is their name? 

> Puzzle by [Giancarlo, Bellingcat](https://www.bellingcat.com/author/giancarlofiorella/)

_The accompanying pictures shows a busy street. White and yellow markings can be seen on the ground as well as a few cars and a motorcycle. Mid-rise buildings are spread alongside the road._

Using Google Lens on the picture yields several results linked with **Colombia**. To verify this, we can take a look at several details in our picture:



<figure class="image-row-figure">
  <div class="image-row">
    <img src="{{ 'medias/bellingcat_globetrotters/1_flchT2N2V-mAoc-45qRB-w.png' | relative_url }}" alt="Close up of a traffic light">
    <img src="{{ 'medias/bellingcat_globetrotters/1_bm1xCJnw_NgNF0MAmrV3Mw.png' | relative_url }}" alt="Close up of a Bancolombia logo">
    <img src="{{ 'medias/bellingcat_globetrotters/1_nTjZCV77saLJ3k69ATYAIA.png' | relative_url }}" alt="Close up of a license plate">
  </div>
  <figcaption>Three close-ups. From left to right: a traffic light, a Bancolombia logo and a license plate</figcaption>
</figure>

1. Traffic light: matches the ones that can be found in Colombia. As shown in [this article](https://www.motor.com.co/industria/Semaforos-en-Colombia-que-clases-hay-20220707-0010.html).
2. Bancolombia logo: This bank is present in 4 latin American countries according to [their website](https://www.grupobancolombia.com/corporativo/conocenos): Colombia, Panama, Guatemala and El Salvador.
3. License plate: This plate matches the format of Colombian license plate for a private car [as per Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Colombia). Unfortunately, the quality of the image does not allow us to see the city which issued it.

This picture has very likely been taken in Colombia, but to determine where exactly, we will have to continue using Google Lens.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_globetrotters/1_FMa4CLI5R9vc7-MD-rViuQ.png' | relative_url }}"
    alt="Google Lens’ applied on the right-hand side buildings"
  >
  <figcaption>Google Lens’ applied on the right-hand side buildings</figcaption>
</div>

Focusing on the peculiar looking buildings on the left yields a link to a [video posted on a Colombian realtor page](https://www.facebook.com/102543085695000/videos/614857342919063/). The selected building can be seen at the 0:15 second timestamp, thus proving that it is the same street captured by our picture. The video begins by panning on some giant multicolored letters spelling “**BOGOTÁ**” which is a strong clue as to where the picture was taken. We will use them to search that specific street.

Searching for the words “letras bogota” in Google Images produces the[ following link](https://bogota.gov.co/mi-ciudad/cultura-recreacion-y-deporte/historia-del-nombre-de-bogota-por-que-la-ciudad-se-llama-asi) from the city official website, linking the letters with _el parque de Los Hippies_.

By searching “parque de los hippies bogota” on Google, we find [this TikTok post](https://www.tiktok.com/@fabricantedehistorias/video/7359353241991269638) which tells us the park used to be called **Julio Flórez** and that a bust of the poet is located in the park. This is the monument mentioned in this challenge.

## Tool used
Google Lens

# 5 — Lost in the Fog
> For this photo Nick was stood in a field shrouded in a thick fog. At least it looks like there’s an airport nearby. 
> But what airport is it? It’s not complex if you know how to look!
> What is the ICAO code for the airport?

> Puzzle by [Nick, Bellingcat](https://www.bellingcat.com/author/nick-waters/)

_The accompanying picture displays a foggy field. There is grass on the grounds as well as a few shrubs. A biplane lurks in the background._

Several things could help in this image: the vegetation, the weather, the biplane in the background, the fact that there is an airport nearby, etc. This challenge is much simpler than that. Using the EXIF Viewer Pro extension or [ExifTool](https://exiftool.org/), we can take a look at the metadata data linked with this image. Coordinates are attached, linking to the **Lundy Island Airfield (EGZV)**.



<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_globetrotters/1_4NjcXsDzatvjsJ4IspYb9g.png' | relative_url }}"
    alt="EXIF Viewer Pro applied on the challenge's image"
    style="width: 400px; max-width: 100%;"
  >
  <figcaption>EXIF Viewer Pro applied on the challenge's image</figcaption>
</div>

Most social media platform remove metadata, but it can be worth checking if you do not know the platform’s policy. Some websites choose to display them such as Flickr, as they can contain information on the type of camera used to take the picture, if the flash was used and sometimes geolocation data.

## Tool used

[EXIF Viewer Pro](https://chromewebstore.google.com/detail/exif-viewer-pro/mmbhfeiddhndihdjeganjggkmjapkffm) Google Chrome extension

---

I do hope this article shed some light on the methods and reasoning that could be used to solve these challenges. If you did not already, check out [Bellingcat.com](https://www.bellingcat.com/) for exciting OSINT articles.