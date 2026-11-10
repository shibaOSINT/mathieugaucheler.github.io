---
layout: post
title:  "Bellingcat Challenges: Urban Exploration"
date:   2025-01-15 17:54:57 +0100
categories: Bellingcat_Challenges
tags: [Geolocation, OverpassTurbo, Yandex]
---


Continuing this series of write-up explaining how to solve the OSINT challenges offered by Bellingcat for the end of 2024. The tools used are listed at the end of each section. I am not affiliated with Bellingcat. The previous write-ups can be found here:


- [First week: Bellingcat Globetrotters]({% post_url 2024-12-20-Bellingcat-Challenges-Globetrotters %})
- [Second week: Maritime Mysteries]({% post_url 2025-01-06-Bellingcat-Challenges-Maritime-Mysteries %})

As per Bellingcat’s wishes, the complete images are not included to avoid polluting the image reverse search results, however a description in _italic_ has been added as well as a link to the picture. The challenges are [available here](https://challenge.bellingcat.com/).

**The answer to each challenge is highlighted in bold at the end of its section.**

# 1 — Name that street!

> There are plenty of areas to walk in cities around the world, and this street is one of them.
> 
> But where is it?
> 
> **What is the name of this street?**
> 
> Puzzle by [Kolina, Bellingcat](https://www.bellingcat.com/author/kolinakoltai/)

_The accompanying picture shows a street, seemingly in a city center. Buildings, approximately four stories tall, are located across the street. Cars with visible license plates are parked near it._ [_See the full picture here_](https://challenge.bellingcat.com/assets/street-BAy8BoR_.jpg)_._

This first exercise is quite simple, zooming in the picture we see a street sign with German words on it, a German license plate and a store named: **JP STOFFE**.

<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_7QoCQMkUuGm_umEwPLzDew.webp' | relative_url }}" alt="Sign in German"
         style="height: 150px;">
    <figcaption>Sign in German</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_fqFdMhRn-cO9nsN6FkkTZA.webp' | relative_url }}" alt="German license plate"
         style="height: 150px;">
    <figcaption>German license plate</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_YXvypbUZ2ggz15wU19nc5A.webp' | relative_url }}" alt="JP STOFFE store"
         style="height: 150px;">
    <figcaption>JP STOFFE store</figcaption>
  </figure>

</div>

We know that we are likely in Germany thanks to the first two clues, hopefully the last one will help us to narrow it down further. Searching for **JP STOFFE** in Google Maps yields only three results, all near the German city of Frankfurt:


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_3kd_JRCcvTXdL7gzYoCeoA.png' | relative_url }}"
    alt="Screenshot of Google Maps highlighting the JP Stoffe found in Frankfurt"
  >
  <figcaption>Screenshot of Google Maps highlighting the JP Stoffe found in Frankfurt</figcaption>
</div>

After testing the three possible locations, the North-East one seems to be the correct one. This can be confirmed using Google Street View. The name of the street is **Stiftstraße**.

## Tools and Websites

[Google](https://www.google.com/), [Google Maps](https://www.google.com/maps), [Google Street View](https://www.google.com/maps).

# 2 — What a Dump!

> Sometimes the most interesting things are found in the most unexpected places…
> 
> … but sometimes those places are full of trash.
> 
> This dumpster is in an alley somewhere, but where?
> 
> **Where was the photographer standing when they took this photo? Use latitude and longitude in decimal format with three decimals (12.345, -67.890).**
> 
> Puzzle by [Jake, Bellingcat](https://www.bellingcat.com/author/jakegodin/)

_The accompanying picture shows a green dumpster with several graffiti and a partial phone number. The surrounding alley is full of graffiti. There is a small, bridge-like, structure connecting two building on each side of the alley._ [_See the full picture here_](https://challenge.bellingcat.com/assets/dumpster-Dn3X1SEj.jpg)_._

Let’s direct our attention to the dumpster mentioned in the description of the challenge. There is a white logo on it, as well as two graffiti.


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_A6zUBRQmMSFgu_VkHN2Htg.webp' | relative_url }}" alt="A sticker with a partial phone number and a logo"
         style="height: 180px;">
    <figcaption>A sticker with a partial phone number and a logo</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_WONCNOMiG5Wh44tiO1u35A.webp' | relative_url }}" alt="A graffiti reading “Guilt Parade” "
         style="height: 180px;">
    <figcaption>A graffiti reading “Guilt Parade”</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_8pCq6pxx9MDS_joKG4-o7g.webp' | relative_url }}" alt="A graffiti reading “Howard U”"
         style="height: 180px;">
    <figcaption>A graffiti reading “Howard U”</figcaption>
  </figure>

</div>

The logo belong to the company Waste Management, Inc. which, according to its Wikipedia page, operates in **North America**.

Guilt Parade is a music band from **Washington DC**, according to [their Bandcamp profile](https://guiltparade.bandcamp.com/).

Howard U seems to be a reference to **Howard University**, a research university also located in Washington DC.

Using Google Lens on the roofs on the left side of the alley and adding “Washington DC” in the search bar yields several results mentioning **Brentwood**, a neighborhood in DC. If we repeat the same process on the entire picture the [Instagram post](https://www.instagram.com/keithmcnallynyc/p/Cxe0in5INme/) below comes up. Accompanied by a caption mentioning **Minetta Tavern**, this image bears similarities to our picture: brick buildings full of graffiti, worn out concrete slabs as pavement, dumpsters, and taller building surrounding the alley. While none of these elements are unique individually, their combination is close to the exercise’s picture.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_t3F6JDwjQZ1Kvexd0NHZ1g.png' | relative_url }}"
    alt="Instagram post by keithmcnallynyc"
  >
  <figcaption>Instagram post by keithmcnallynyc</figcaption>
</div>

**Minetta Tavern** is located less than two mile from Howard University and near Brentwood. Looking at the streets nearby with Google Street View, we stumble upon this familiar view:


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_xRvJvu-aSzBxXrDAUQ-0Wg.png' | relative_url }}"
    alt="Screenshot from Google Street View"
  >
  <figcaption>Screenshot from Google Street View</figcaption>
</div>

After searching for the Street View picture closest to the exercise picture, we end up with the following coordinates: **38.909, -76.998**.

## Tools and Websites  
[Google Lens](https://www.google.com/?olud), [Google Street View](https://www.google.com/maps), [Google](https://www.google.com/), [Google Earth Pro](https://www.google.com/earth/about/versions/).

# 3 — Highway to the Unknown

> A car’s moving quickly along a highway, luckily there are some visible structures in the rear-view mirror and on the road-side to help you with your geolocation.
> 
> **The prominent building bears the name of a person, what is that name?**
> 
> Puzzle by [Lucy, Bellingcat](https://www.bellingcat.com/)

_The accompanying picture shows a red car, speeding down a highway with a black contraption on its roof. A side view mirror can be seen on the foreground, showing a pedestrian bridge. In the background, a two story building surrounded by trees can be seen._ [_See the full picture here_](https://challenge.bellingcat.com/assets/highway-Dxd_ClsZ.jpg)_._

The amount of information in this picture can be overwhelming: the species of tree, the markings on the side of the road, the make and model of the car, its license plate, the pedestrian bridge, the water tank on the roof of the building, the English words on the side view mirror, the right handed driving and the large black object on the car’s roof.

All of these could be the start of a reasoning to understand where this picture was taken. But not all of them will lead us to the answer, and not in the same amount of time. Let’s focus on the clues that allow us to eliminate the widest area.

## Driving on the right and speaking English

Because of the vegetation and architecture, we will assume that this was taken in Africa. To narrow down the list of possible countries, we can use the right handed driving and the use of the English language in the side mirror. Let us keep only the African countries that use English as an official language and drive on the right using these two Wikipedia article:

- [Left- and right-hand traffic](https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic)
- [List of countries and territories where English is an official language](https://en.wikipedia.org/wiki/List_of_countries_and_territories_where_English_is_an_official_language)



<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_tolau3Jh0L2MDPqGBDWTLw.webp' | relative_url }}" alt="Countries by direction of road traffic"
         style="height: 180px;">
    <figcaption>Countries by direction of road traffic</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_iy0oZS1Ok22E8iNN3pad4A.webp' | relative_url }}" alt="Countries that have English as an official language"
         style="height: 180px;">
    <figcaption>Countries that have English as an official language”</figcaption>
  </figure>

</div>

This leaves us with the eleven following countries: **Burundi**, **Cameroon**, **Eswatini**, **The Gambia**, **Ghana**, **Liberia**, **Nigeria**, **Rwanda**, **Sierra Leone**, **South Sudan** and **Sudan**.

## Is this plate regulation size?

To remove countries from this list, we can use the license plate. Although it is too blurry to make out the exact country, we can use its white background and its dimensions to exclude countries.



<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_QqnXCuRWkDNzpoqD5V-xMA.png' | relative_url }}"
    alt="Close-up of the license of plate"
  >
  <figcaption>Close-up of the license of plate</figcaption>
</div>

Using the website [WorldLicensePlates.com](http://www.worldlicenseplates.com/world/AF.html) we can examine the format and colors used by the countries on our list. For example Cameroon and the Gambia can both be taken out, respectively because of the background color and the dimensions of the plate, too narrow to match the picture.

Press enter or click to view image in full size


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_nwD5KhCd-qDmUsjYj5khHA.webp' | relative_url }}" alt="Plates from Cameroon">
    <figcaption>Plates from Cameroon</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_NvDV5fv_ASGEH2-LCxVkGA.webp' | relative_url }}" alt=" Plates from the Gambia">
    <figcaption>Plates from the Gambia</figcaption>
  </figure>

</div>

Using this process, we can focus our efforts on three countries that best fit the license plate: **Nigeria**, **Sudan** and **South Sudan**.

## We will cross that bridge when we get to it

We can use Overpass Turbo to look for features present in our picture. The first obvious feature is the road but we need a second one: the bridge in the side view mirror, likely designed for pedestrians judging by the size of its railings.

We need to design a query that will highlight the kind of **road** shown in the picture and a **pedestrian** **bridge**. To know what kind of road this would be tagged as, we can refer ourselves to [this discussion on the topic](https://wiki.openstreetmap.org/wiki/Highway_Tag_Africa). From this page, the suitable values for _highway_ seem to be _motorway_, _trunk_ and _primary_. Because we want to run this query over large areas, let’s not forget to add a higher timeout value.

This allows us to write the following query.

```sql
[out:json][timeout:250];  
  
// get roads matching the picture  
(nwr["highway"="motorway"]({{bbox}});  
 nwr["highway"="trunk"]({{bbox}});  
 nwr["highway"="primary"]({{bbox}});)->.main_highways;  
  
  
// get bridges that are also a footway  
(nwr["bridge"]["highway"="footway"]({{bbox}});)  
->.bridges;  
  
// get bridges that are next to our set of roads  
nwr.bridges(around.main_highways:1);  
  
out geom;
```

After running it on our three remaining countries, it appears that only **Nigeria** offers suitable locations. See a screenshot of the results below.



<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_zsYlEMf66V4yOfVMLX05DA.png' | relative_url }}"
    alt="The results of the query above on Nigeria"
  >
  <figcaption>The results of the query above on Nigeria</figcaption>
</div>

As the number of results is quite large and verifying them with Google Street View is more comfortable, a good way to review these results is to export them as KML files to visualize them in Google Earth Pro. The two main areas concentrating these results are **Lagos** and **Abuja**.

After reviewing several of these results, the exact model of LED streetlight shown in the picture (white pole with a flat top) seems to be mostly found in **Abuja**. This is where we will focus our research. This gives us a [lot less results to verify](https://overpass-turbo.eu/map.html?Q=%5Bout%3Ajson%5D%5Btimeout%3A250%5D%3B%0A%0A%2F%2F+get+roads+matching+the+picture%0A%28nwr%5B%22highway%22%3D%22motorway%22%5D%288.782618116072635%2C7.084121704101563%2C9.278332835101478%2C7.789993286132813%29%3B%0A+nwr%5B%22highway%22%3D%22trunk%22%5D%288.782618116072635%2C7.084121704101563%2C9.278332835101478%2C7.789993286132813%29%3B%0A+nwr%5B%22highway%22%3D%22primary%22%5D%288.782618116072635%2C7.084121704101563%2C9.278332835101478%2C7.789993286132813%29%3B%29-%3E.main_highways%3B%0A%0A%2F%2F+get+bridges+that+are+also+a+footway%0A%28nwr%5B%22bridge%22%5D%5B%22highway%22%3D%22footway%22%5D%288.782618116072635%2C7.084121704101563%2C9.278332835101478%2C7.789993286132813%29%3B%29%0A-%3E.bridges%3B%0A%0A%2F%2F+get+bridges+that+are+next+to+our+set+of+roads%0Anwr.bridges%28around.main_highways%3A1%29%3B%0A%0Aout+geom%3B%7B%7Bdata%3Aoverpass%2Cserver%3D%2F%2Foverpass-api.de%2Fapi%2F%7D%7D).


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_QK4PwRM1t_shcv9cCn47YA.png' | relative_url }}"
    alt="The results of the same query on Abuja"
  >
  <figcaption>The results of the same query on Abuja</figcaption>
</div>

After verifying the results of the OverpassTurbo query, we find the location where the picture was taken: **9.077139, 7.431690**.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_tFSG1bZi2u7n8JVpYcoMRg.png' | relative_url }}"
    alt="A screenshot from Google Street View"
  >
  <figcaption>A screenshot from Google Street View</figcaption>
</div>

On [Google Maps](https://www.google.com/maps/place/Daughters+of+Abraham+Foundation/@9.0765904,7.4312192,207m/data=!3m1!1e3!4m6!3m5!1s0x104e752eba1edb5b:0xb9b4dcd75799f669!8m2!3d9.0766245!4d7.4316146!16s%2Fg%2F11cjwnv_ym?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D), this building is identified as the **Daughters of Abraham Foundation**. The video tab from this page has several entries, including [this one](https://www.google.com/maps/place/Daughters+of+Abraham+Foundation/@9.0766245,7.4316146,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipMHhicKNQt3vTa6o5s2cp_d6eVddbaE9ORDbgPY!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMHhicKNQt3vTa6o5s2cp_d6eVddbaE9ORDbgPY%3Dw529-h298-k-no!7i1280!8i720!4m9!3m8!1s0x104e752eba1edb5b:0xb9b4dcd75799f669!8m2!3d9.0766245!4d7.4316146!10e5!14m1!1BCgIgARICCAQ!16s%2Fg%2F11cjwnv_ym?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D) showing a building featuring yellow letters spelling: **Julie Useni**.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_2Lk65j1rVNR8po3By7Pekg.png' | relative_url }}"
    alt="A screenshot from Google Street View"
  >
</div>

## Tools

[Google Street View](https://www.google.com/maps/), [Overpass Turbo](https://overpass-turbo.eu/), [Google Maps](https://www.google.com/maps), Google Earth Pro, [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Highway_Tag_Africa), [WorldLicensePlates.com](http://www.worldlicenseplates.com/world/AF.html).

# 4 — Foul Play

> This is what it looks like to be on the receiving end of a foul ball at a baseball game.
> 
> Be careful out there! But who is responsible for this hit?
> 
> **What is the name of the batter?**
> 
> Puzzle by [Giancarlo, Bellingcat](https://www.bellingcat.com/author/giancarlofiorella/)

_The accompanying video is eight seconds long. It is shot from the seats of a baseball arena. People seated in the foreground are wearing light blue jerseys. A match is being played on the field._ [_Link to the video here_](https://www.youtube.com/watch?v=THeJFjKhb9Y)_._

## Taking a good look

Several avenues could be explored here: finding the venue as well as the teams playing, then finding the match and checking which player hit a foul ball.

However, before proceeding with our investigation, it’s essential to ensure that we haven’t overlooked any important details. Here for example, the ribbon video board is displaying a name and a number: **31 DELOACH**.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_T2hwjW-KjsJv2aLibqV40w.png' | relative_url }}"
    alt="A close up of the video"
  >
  <figcaption>A close up of the video</figcaption>
</div>

## Justifying our answer

One could input that answer and go to the next challenge, but being able to argument a finding is as important as the finding itself. So let us verify that answer by finding the match. According to [his MLB page](https://www.mlb.com/player/zach-deloach-676113), Zach DeLoach plays for the **Chicago White Socks**.  
To find the opposing team, we can look at the jerseys some of the fans in the stadium are wearing, specifically the one with “Bichette” on its back. According to [his MLB page](https://www.mlb.com/player/bo-bichette-666182), Bo Bichette plays for the **Toronto Blue Jays**. Moreover, there is a blue advertisement stating “official hot dog of the Toronto Blue Jays”. This leads us to believe the video has been taken at the **Rogers Center**, home of the Blue Jays.




<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_msT3u7Woeq__YO1UVWNSkA.webp' | relative_url }}" alt="Close-up of a fan's jersey">
    <figcaption>Close up of a fan's jersey</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_urban_exploration/1_7Z_1Tuxtitnkcaj5I2q6Lg.webp' | relative_url }}" alt="Close-up of advertisements and logos in the arena">
    <figcaption>Close-up of advertisements and logos in the arena</figcaption>
  </figure>

</div>

We can use the information we just learned to find the match. The Google search _white sox vs blue jay roger center play by play_ yields two recently played matches: the 21st and 23rd of May 2024; but only one of them mentions a play similar to the one in our video. In the match of the **23rd of May**, [ESPN Singapore reports](https://www.espn.com.sg/mlb/playbyplay/_/gameId/401569210) that “Deloach flied out to left”. This confirms our answer, **Zach DeLoach** is the batter in this video.

## Tools and Websites

[MLB.com](https://www.mlb.com/player/zach-deloach-676113), [ESPN.com.sg](https://www.espn.com.sg/mlb/playbyplay/_/gameId/401569210), [Google](https://www.google.com/).

# 5 — On The Metro

> Watching the metro go past.
> 
> Where is the photographer, what is the line, and where is the train heading?
> 
> **What is the destination station for this train?**
> 
> Puzzle by [Michael, Bellingcat](https://www.bellingcat.com/author/michaelcolborne/)

_The accompanying picture shows a metro platform, from which a red and white train is departing (or arriving?). Someone is standing at the end of the platform, seemingly looking at the wall._ [_See the full picture here_](https://challenge.bellingcat.com/assets/metro-BKEDT34w.jpg)_._

## Finding the metro lines

As suggested by the title and confirmed by the architecture of the station and the fact that it seems to be underground, this is a metro station. Our next step is determine the city in which this station is located. We can use the train livery to do so. Google Lens gives us several results, but [this particular one](https://www.shutterstock.com/image-photo/train-leaves-subway-station-due-longterm-716292547) matches both red lines and what seems to be horizontal folds in the metal underneath:


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/0_8CUspXlEy-RHGKb5.jpg' | relative_url }}"
    alt="A photo of a similar train from Shutterstock"
  >
  <figcaption>A photo of a similar train from Shutterstock</figcaption>
</div>

Similar photographies recommended by Shutterstock, identify this location as the **Prague** subway. According to [its Wikipedia page](https://en.wikipedia.org/wiki/Prague_Metro), this particular subway system only has three lines, which will simplify our search. To narrow it down further, the same page details the rolling stock used: Metro M1 trains and **81–71M** **trains**. The latter matches our picture and is used on **lines A and B** of the **Prague subway**.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/0_sUcsTKven5SmfdkU.jpg' | relative_url }}"
    alt="An 81–71M train"
  >
  <figcaption>An 81–71M train</figcaption>
</div>

## Finding The Station

Fortunately, [UrbanRail.net](https://www.urbanrail.net/eu/cz/praha/praha-line-b.htm) contains pictures of the metro stations on the lines we are interested in. To accelerate this process, let’s focus on the three following points: the square shape of the train tunnel, the black tiles on the wall and the rectangular light fixtures. After finding suitable stations, we can look at the vlogs from [this YouTube channel](https://www.youtube.com/@MetroCheck) to confirm which side of the platform is shown. **Hůrka** seems like the most likely place where this picture was taken. See below a comparison of the picture and [this YouTube vlog](https://www.youtube.com/watch?v=zAa1mWGt_rU).


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_urban_exploration/1_XT6XsG-ubeO4VvxqHk_yJA.png' | relative_url }}"
    alt="Left: Detail from the exercise picture. Right: Detail from the MetroCheck vlog at 2:10."
  >
  <figcaption>Left: Detail from the exercise picture. Right: Detail from the MetroCheck vlog at 2:10.</figcaption>
</div>

The picture above shows the platform in the direction of **Zličín.**

## Tools & Websites

[Youtube](https://www.youtube.com/@MetroCheck), [UrbanRail.net](https://www.urbanrail.net/eu/cz/praha/praha-line-b.htm), [Wikipedia](https://en.wikipedia.org/wiki/Prague_Metro), [Google Lens](https://www.google.com/?olud$).

---

I do hope this article shed some light on the methods and reasoning that could be used to solve these challenges. If you did not already, check out [Bellingcat.com](https://www.bellingcat.com/) for exciting OSINT challenges.