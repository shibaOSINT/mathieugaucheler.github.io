---
layout: post
title:  "Bellingcat Challenges: Maritime Mysteries"
date:   2025-01-06 17:54:57 +0100
categories: Bellingcat_Challenges
tags: [geolocation, OverpassTurbo, Suncalc]
---

Continuing this series of write-up explaining how to solve the OSINT challenges offered by Bellingcat for the end of 2024. The tools used are listed at the end of each section. I am not affiliated with Bellingcat. Please find the [write-up for the first week of exercise here]({% post_url 2024-12-20-Bellingcat-Challenges-Globetrotters %}).

As per Bellingcat’s wishes, the complete images are not included to avoid polluting the image reverse search results, however a description in italic has been added as well as a link to the image. The pictures and the challenges are [available here](https://challenge.bellingcat.com/).

# 1 — Fully Stocked

> Container vessels are a common sight in ports around the world, but this one is particularly well-stocked. 
> They’re a vital part of the global supply chain, but where is this one moored? 
> **In which city would you find this port?**

> Puzzle by [Galen, Bellingcat](https://www.bellingcat.com/author/galenreich/)

_The accompanying picture shows the side of a ship with the letters “U A S C” on its starboard side. More than a dozen of container cranes can be seen. They are marked with a partly obscured word: “…RDKAI”._ [See the full picture here](https://challenge.bellingcat.com/assets/moored_ship-B0-TXAUs.jpg).


The lettering on the crane, could be there for several reason: a brand, name of the harbor, etc. To confirm this, let’s search **RDKAI port crane** in Google. This yields several links and images, including the [image below](https://www.alamy.com/port-of-hamburg-waltershofer-hafen-hhla-container-terminal-burchardkai-container-freighter-zenith-lumos-hamburg-germany-image599848909.html?imageid=D88AB545-1EF3-4C00-906D-A455C71E955D&p=15790&pn=7&searchId=0d1e3640e88060b938ac053f1588005a&searchtype=0).


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_maritime_mysteries/1_pI_0BEeaTZLOIieeKo4PKw.png' | relative_url }}"
    alt="Port of Hamburg, Waltershofer Hafen, HHLA Container Terminal Burchardkai, container freighter Zenith Lumos, Hamburg, Germany — Jochen Tack"
  >
  <figcaption>Port of Hamburg, Waltershofer Hafen, HHLA Container Terminal Burchardkai, container freighter Zenith Lumos, Hamburg, Germany — Jochen Tack</figcaption>
</div>

The color of the upper part of the cranes in this image match the one in the exercise’s picture. The font of the lettering matches as well. The title of this picture mentions Hamburg and it is indeed the right answer. Note that the exercise picture is cropped version of another photography, which could help to verify that it is indeed the **Burchardkai terminal**.

## Tools & Websites

Google

# 2 — Operation Fleet Finder
> Here are a handful of naval ships moored together, but grey is the only colour in sight. 
> They all look the same! Can you help identify them? 
> **What is the MMSI number for the left-most ship?**

> Puzzle by [Bellingcat](https://www.bellingcat.com/)

_The accompanying picture displays two large ships painted in grey with a smaller vessel on the right. Two docks, as well as a floating barrier hint that this is a harbor._

[See the full picture here.](https://challenge.bellingcat.com/assets/military_shipyard-CEWyEkMk.jpg)

## Finding the right-most ship

As always, zooming on the picture will help us to isolate useful details. There is an **American flag** and a 69 on the island of one of the ships.


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_nPc5GQG9NyRZIcv2WfAnrg.png' | relative_url }}" alt="An American flag on the rightmost ship">
    <figcaption>An American flag on the rightmost ship</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_NS98K0l2A72aU4W52LWr7Q.png' | relative_url }}" alt="The number 69 on the ship’s island.">
    <figcaption>The number 69 on the ship’s island.</figcaption>
  </figure>
</div>


Another information we can add, is that the two main ships in that picture seem to be **aircraft carriers**. 
This narrows down the field of research: we are searching for an aircraft carrier, likely American. 
Lucky for us, they are few and far between.

Identifying the ship with the number 69 could help us to get to our ship of interest.
This is a **hull number** and can be used to identify a ship if we know its type.
Here “aircraft carrier” will be enough. Looking through the [list of the US Navy aircraft carriers](https://en.wikipedia.org/wiki/List_of_aircraft_carriers_of_the_United_States_Navy),
we find the **USS Dwight D. Eisenhower** bears this number.

## Who is your friend?

Interestingly enough, the list also mentions where the USS Dwight D. Eisenhower is stationed: 
**Naval Station Norfolk**. At the time of writing, it remained here according to MarineTraffic. 
Considering the American flag, it is likely to be where the picture has been taken.

Using the same list mentioned below, we can see that there
are four other aircraft carriers stationed at the same
place: 
- USS John C. Stennis
- USS George H.W. Bush
- USS Harry S. Truman
- USS Gerald R. Ford.

To find the correct ship amongst these four vessels, we can use the design of their island.

<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_JFe609rbORq3Ru2HfbiSbg.jpg' | relative_url }}" alt="USS Gerald R. Ford">
    <figcaption>USS Gerald R. Ford</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_2MmG560QzN9zuboIkpniog.jpg' | relative_url }}" alt="USS John C Stennis">
    <figcaption>USS John C Stennis</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_37c2IVsLbQOxCl0KledBbA.jpg' | relative_url }}" alt="USS Harry S. Truman">
    <figcaption>USS Harry S. Truman</figcaption>
  </figure>

</div>


<div class="image-row image-row-captioned">
  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_RBzNP_KrbnLG_ep2kPnIRQ.webp' | relative_url }}" 
         alt="The island of the USS George H.W. Bush."
         style="height: 450px;">
    <figcaption>The island of the USS George H.W. Bush</figcaption>
  </figure>

  <figure>
    <img src="{{ 'medias/bellingcat_maritime_mysteries/1_X1BgfhBnWHkAFnFu2E6Zyg.webp' | relative_url }}" 
         alt="The island of the aircraft carrier we have to identify"
         style="height: 450px;">
    <figcaption>The island of the aircraft carrier we have to identify</figcaption>

  </figure>
</div>

This allows us to conclude that the mysterious vessel is the USS George H.W. Bush. 
His wikipedia page lists his MMSI as **368962000**.

## Tools & Websites

Google and Wikipedia.

# 3 — Cyrillic Confusion

>In November 2024, two underwater data cables in the Baltic Sea experienced faults, disrupting communications between European nations and igniting suspicions of sabotage. A Chinese cargo vessel, the YUI PENG 3, quickly became a focus for both investigators and the online open source research community.
Some mistakenly suggested that this port log showed the vessel’s captain was a Russian citizen (they confused a temporary harbor pilot with the ship’s captain).
But a key question emerged: could the authenticity of the log be verified?

>**What is the original URL for this log? (don’t include the “http://” or “https://”)**

>Puzzle by [Tomi McCluskey, Bellingcat Volunteer Community](https://www.bellingcat.com/author/tomimccluskey2/)

_The accompanying pictures is a table listing the movement of a ship called YUI PENG 3. It mentions several operations with their nature and date. [See the full picture here](https://challenge.bellingcat.com/assets/YuiPeng3Log-CJv3Y2-b.png)._

Searching for a known document across the Internet is usually an easy task. Thanks to search operators available on various search engines, we can orient our query to seek strings of characters or a type of file.

But, this case is not so simple. Googling “No 165759” YUI PENG does not yield any worthwhile results. This is where we have to take into account the differences between search engines. Although Google is the main tool to explore Internet in western countries, other regions use different solutions such as Baidu or Yandex. These can yield a different result for a similar input.

Running the same search on **Yandex** does indeed give us the correct link:
`skap.pasp.ru/Move/InOutMoveList/165759?harb=UL`


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_maritime_mysteries/1_pjmvPl8O7is3TirQtK5puA.png' | relative_url }}"
    alt="A screenshot of yandex.com"
  >
  <figcaption>A screenshot of yandex.com</figcaption>
</div>

## Tools & Websites

Yandex.

# 4 — Clouded Perception
>This serene lake is a beautiful sight, but something is off: this image has been manipulated.
What should we do if an image is altered, either by hand or with AI?
**What is the 6 digit number hidden in the image?**

> Puzzle by Galen, Bellingcat

The accompanying pictures show a person standing on a pier set on a beautiful mountain lake.
The clouds and the surrounding mountains are soaked in a bright orange, too flamboyant to be genuine.
[See the full picture here](https://challenge.bellingcat.com/assets/manipulated_lake-By7pLY1L.jpg).

How can we answer a question in a field we know nothing about? A natural first step is to look at
what other people have done. Bellingcat has verified the authenticity of images before like in this [article from
Annique Mossou](https://www.bellingcat.com/resources/2023/05/02/testing-for-manipulation-a-case-study-from-colombia/) 
or this [one on the MH17 flight](https://www.bellingcat.com/news/uk-and-europe/2015/05/31/mh17-forensic-analysis-of-satellite-images-released-by-the-russian-ministry-of-defence/).

One technique used to identify altered pictures is **ELA (Error Level Analysis)**. 
It highlights areas with different compression level which can indicate areas where a picture has been modified. 
You can find a [detailed explanation and instruction on how to use it](https://fotoforensics.com/tutorial.php?tt=ela) on its creator blog. See below a comparison of the
ELA of an image and its modified version.


Use the slider below to progressively overlay an altered image and its ELA output.

<div class="image-compare">
  <div class="image-compare__stage">
    <img
      class="image-compare__first"
      src="{{ 'medias/bellingcat_maritime_mysteries/1_RfhwKj0Sn5uOVsKVGaSPNA.jpg' | relative_url }}"
      alt="A group of people walking with a saxophonist"
    >
    <img
      class="image-compare__second"
      src="{{ 'medias/bellingcat_maritime_mysteries/1_Ec4SNndeKLBtjHelPpksFQ.png' | relative_url }}"
      alt="ELA output of the first image, with the saxophonist body and clothes being suspiciously darker than the other people in the picture."
    >
  </div>

  <label class="image-compare__control">
    Opacity Control
    <input class="image-compare__slider" type="range" min="0" max="100" value="0">
  </label>
</div>


[Forensically](https://29a.ch/photo-forensics/) offers a web interface allowing users to perform ELA as well as other operations. By uploading the exercise image and tweaking the parameters in the ELA module, we obtain the picture below.

<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_maritime_mysteries/1_kXT_KaYnqWYC_n_ReRHchw.png' | relative_url }}"
    alt="Parameters: JPEG Quality=73, Error Scale=100 and Opacity=0.95"
  >
  <figcaption>Parameters: JPEG Quality=73, Error Scale=100 and Opacity=0.95</figcaption>
</div>

The digits **428309** are highlighted in the sky above the mountains.

## Tools & Websites
[Forensically](https://29a.ch/photo-forensics/), [Bellingcat.com](https://www.bellingcat.com/), [fotoforensics.com](https://fotoforensics.com/tutorial.php?tt=ela)

# 5 — Synoptic Code

> This is a morse code transmission received on the 13th October 2024. The sender is thought to be the Yelnya, a Russian ship operating on the Black Sea.

>.-. -.-. …- / -.. . / ..- -.-. — .- ….. / . — — … — . — — — -.. . — — / — — . — — . … — ….- ….. / . — — — — — … — ….- -…. / ….- . — — -…. — — . — -.. / … — .. — — ….- — — — ….. / . — — — — — .. — — — -.. — — — / ….- — — — . — — .. — — — — — / ….. ….- — — — — — — — — — / — … — — — .. — — — — — — — — / — -.. … — ….. — — — — — — / .. — — .. — — .. — — ….. .. — — / — — — — — — .. — — — -.. — — — / . — — … — — — — . — — .. — — / -… — / .- .-. / ..- -.-. — .- ….. / -.

>Can you decode the message?
**What was the reported air temperature in degrees Celsius? (give your answer to one decimal place i.e. “12.3”)**

> Puzzle by [Galen, Bellingcat](https://www.bellingcat.com/author/galenreich/)


The accompanying picture shows a table matching the 26 letters of the latin alphabet with their associated morse translation. [See the full picture here](https://challenge.bellingcat.com/assets/morse-DseWZD6I.jpg).

## Understanding the format

After using one of the numerous morse translator available online, we are left with the following message:

`RCV DE UCTA5 13181 99345 10346 41698 32405 10280 40120 54000 70200 83500 22252 00280 13012 BT AR UCTA5 N`

To better understand this message, we need to understand what the subject of this exercise is, what is a **synoptic code**? According to [this page](https://nsidc.org/learn/cryosphere-glossary/synoptic-code#:~:text=a%20code%20approved%20by%20the,GTS%20\(Global%20Telecommunications%20System\).) from the US National Snow and Ice Data Center, it is “a code […] by which **meteorological elements observed** at the earth’s surface at synoptic times are encoded in groups of five figures”.

Thus, the information we seek is in the digits between _RCV DE UCTA5_ and _BT AT UCTA5 N_. To understand the message, we need to know the format used they use. After a quick google search, we find this [blogpost](https://i56578-swl.blogspot.com/2016/08/fm13-weather-reports-messages-in-cw.html) suggesting that Russian meteorological reports in the Mediterranean use a code called **FM-13-X-SHIP**.

## Decoding the message

This format seems to be widely used, [this document](https://met.nps.edu/~bcreasey/mr3222/files/helpful/DecodeShipObservationCode.pdf) from the Naval Postgraduate School of Monterey (CA) explains how to decode it. The Surface Air Temperature Group seems to contain the information we need.


<div class="post-image">
  <img
    src="{{ 'medias/bellingcat_maritime_mysteries/1_xItNkeATVT8kbvELGULjNQ.png' | relative_url }}"
    alt="Detail from: SHIP SURFACE OBSERVATION CODE, FM 13-IX SHIP"
  >
  <figcaption>Detail from: SHIP SURFACE OBSERVATION CODE, FM 13-IX SHIP</figcaption>
</div>

We now need to identify the correct digit group in our message: 13181 99345 10346 41698 32405 10280 40120 54000 70200 83500 22252 00280 13012.

We know the group we are searching for begins by a 1, followed by a 0 or a 1. This leaves two possible group open: 10346 or 10280.

However, the first group (10346) is preceded by another group: 99345. According to the document mentioned above, it is the **Ship Latitude Group** which means that the following group (10346) is the **Ship Longitude Group**.

This only leaves us with the **10280** group which would indicate a positive temperature of **28.0**°C.

## Bonus

If we decode the longitude and latitude group, we obtain the following coordinate: **34.5°, 34.6°** which is in the Mediterranean sea **between Cyprus and Lebanon**, not the Black sea as the exercise mentions. Where is the discrepancy coming from?

Well one explanation is that the synoptic codes did not originate from the Yelnya but were merely retransmitted, as suggested by the first part of the message: _RCV DE UCTA5_ which likely means that the following message has been received from UCTA5. UCTA5 is also a name that fits naming conventions of the Russian navy mentioned in the [blogpost mentioning FM-13](https://i56578-swl.blogspot.com/2016/08/fm13-weather-reports-messages-in-cw.html).

Because the message sent by UCTA5 also has a Observation Time and Wind Indicator Group (13181) we know that UCTA5 sent this message the 13th of the month at 18:00, which matches with the exercise’s instruction.

## Tools & Websites  
[MorseCodeTranslator.com](https://morsecodetranslator.com/), [i56578-swl.blogspot.com](https://i56578-swl.blogspot.com/), [met.nps.edu](https://met.nps.edu/), [nsidc.org](https://nsidc.org/)

---
I do hope this article shed some light on the methods and reasoning that could be used to solve these challenges. If you did not already, check out [Bellingcat.com](https://www.bellingcat.com/) for exciting OSINT challenges.