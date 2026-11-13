---
layout: post
title:  "How to write an OSINT CTF"
date:   2026-02-17 17:54:57 +0100
categories: HowTo
tags: []
---

Thanks to my employer, I helped organize and create several CTFs in the last two years both for professionals and amateurs. In this blogpost, I would like to go over a few of the things I learned, as adapting this format to OSINT poses several challenges.


<div class="post-image">
  <img
    src="{{ 'medias/write_osint_ctf/1_cU0SUoQvQzJ6Bt83FiOXJA.png' | relative_url }}"
    alt="Scoreboard"
  >
  <figcaption>Score of the top 10 teams in the Maltego Community OSINT CTF 2026</figcaption>
</div>

## What is a CTF?

A “Capture The Flag” (CTF) is a competition where participants are tasked with answering several questions, also called challenges, by submitting a “flag”, usually a string of character following a particular format, e.g. “myctf{paris}”. Finding the correct answer to a challenge rewards you or your team with points, participants with the highest score at the end of the event wins.

Historically linked to cybersecurity, these contests can task participants with the decryption of a file, breaking into a web server (spun up for the occasion), etc. These events are an opportunity to team up with fellow practitioners, hone your skills and confront situations you might not encounter in your day-to-day activities.

Let us now dive into the many pitfalls a good CTF should not fall into.

## Fighting the information asymmetry

A good CTF challenge should pique the curiosity of a participants and launch him on a chase around the internet, hopefully discover new tools, investigative techniques or pivots. We need to make the user ask themselves, “How can I answer this?” without sinking into despair. This is fine line to walk on as too vague a question will lead to ambiguity as to what answer we expect and too specific a question will give away the path to get to the answer.

We also need to account for the fact that a question might have several answers, that we do not know about. For example, before asking: “What is this person employer?” we need to ensure that this person currently only has one job or be more specific in our question such as “For which Spanish company does this person work?”.

Half of the work of an OSINT investigator is to ask the right questions, the other half is answering them.

## Choosing the data sources

Unless you are doing a CTF specifically created to promote a tool or data source, you will need to take into account that most participants do not have access to a wide array of paid sources. Adding a challenge which necessitates access to Planet or Maxar without having the possibility to use free alternatives like Copernicus or Google Earth will only frustrate people as it would be perceived as a “pay-to-win”. Ideally the data should be accessible to every participant; its interpretation being the challenge.

It is illusory to thing that having access to paid tools will not give an edge to some. We cannot control for this factor. But we must ensure that there are freely accessible alternatives where the needed data exist. Before adding a challenge, make sure that the data needed to answer it is present in at least one freely accessible tool. Below is a list of types of data with suggestions of freely available sources.

### Satellite Images

- Satellite image providers: [Copernicus](https://browser.dataspace.copernicus.eu/), [Skifi](https://app.skyfi.com/), [Soar](https://soaratlas.com/), [EOS](https://eos.com/landviewer/), [NASA Firms](https://firms.modaps.eosdis.nasa.gov/map/), etc.
- Mainstream maps: [Google Earth](https://earth.google.com/web/), [Yandex Maps](https://yandex.com/maps), [Apple Maps](https://maps.apple.com/), etc.

### Leaked Data

- Paste website: [Pastebin](https://pastebin.com/), etc.
- Organized leaked data: [OCCRP Aleph](https://aleph.occrp.org/) or the [Offshore Leaks](https://offshoreleaks.icij.org/).

### SOCMINT

- Online service: [EPIEOS](https://epieos.com/).
- Comand line tools: [Sherlock](https://github.com/sherlock-project/sherlock), [Holehe](https://github.com/megadose/holehe).

### **Corporate registries**

- Country / state specific corporate registries: [Curaçao Chamber of Commerce](https://www2.curacao-chamber.com/companyselect.asp), [Company House](https://find-and-update.company-information.service.gov.uk/), etc.
- Aggregators spanning multiple countries: [North Data](https://www.northdata.com/), [OpenCorporates](https://opencorporates.com/), etc.

### **WHOIS registry**

- Online services: [WHOXY](https://www.whoxy.com/), [who.is](https://who.is/), etc.

### Maritime data

- AIS data visualisation: [Marine Traffic](https://www.marinetraffic.com/), [VesselFinder](https://www.vesselfinder.com/), etc.

- Ship photographs: [ShipSpotting](https://www.shipspotting.com/), [Ship Photo Roster](https://ship-photo-roster.com/), etc.

- Ship crews: [BalticShipping](https://www.balticshipping.com/), etc.

### Plane data

- ADS-B data visualisation: [flightradar24](http://www.flightradar24.com), [ADS-B exchange](https://globe.adsbexchange.com/), etc.

- Plane photographs: [JetPhotos](https://www.jetphotos.com/), [PlaneSpotters](https://www.planespotters.net/), [OneSpotter](https://onespotter.com/), etc.

## Defining a clear format for your answers

Most challenges will ask for an answer as a text input, then match this text against possible correct answers provided by the organisers. This works very well in a cybersecurity CTF, where you can ask users to find a string of character in a file: the user copies and paste their finding. There is no possible ambiguity on the format of the answer.

Things get a little trickier in OSINT because a question might have several correct answers. For example: When asking “Who is the current Russian leader?” you could get the following answers: **Vladimir Putin, Vladimir Vladimirovich Putin, Владимир Путин**? Accepting only “**Vladimir Vladimirovich Putin**” as an answer while not specifying the expected format can lead a participant with the correct answer to spend ten minutes fidgeting with their answer, trying to make it fit. This is easily avoided by clearly communicating the format of the answer you expect.

Another useful tools are scripts or regex to verify flags. Instead of expecting exactly “Maltego Technologies LTD”, we can match on any flags that contain “maltego”, “technologies” and “ltd”. This would validate correct answers like “Maltego Technologies ltd” or “Maltego Technologies LTD.” which we might not have accounted for when doing an exact match.

## Choosing a scoring system

The basic principle of a CTF is that the highest score wins. But there are subtleties to this: should the team first to solve a challenge (a.k.a: first blood) obtain a greater reward for being the fastest or do we consider that solving the challenge whether in five or fifty minutes entitles participants to the same amount of points?

We can apply a degressive point system if the first option is chosen. However, it is better when reserved to the more difficult questions in your CTF. Applying this principle to a challenge that would take most people five minutes is not rewarding the fast or clever participants, it is rewarding the ones that clicked on the challenge first.

## Catering to all levels

Not every CTF is made for a large public, but when they are, a problem quickly arises: how can we not bore the experts while not making the beginners feel completely lost? There are three maneuvers that we can use here: adding hints, multiplying the questions and breaking down questions.

Hints are little helps that competitors can unlock, they are usually unlocked by reducing the amounts of points given by a challenge. They can range all the way from mentioning the type of data that should be used (ex: “Use corporate registries.”) to giving the answer so people can go to the next question; in which case the cost of the hint should cover the entire reward for the challenge. They allow beginners to be guided through difficult questions meant for experts.

Diversifying the questions is also a good way to cater to different level if done correctly. Do not flood your CTF with five hundred questions that require participants to google something: artificially padding the content of your CTF will make for a boring event. If the duration of your CTF allows it, make challenges that require teamwork where more experienced practitioners can direct newcomers. For example, a geolocation challenge might need an expert to reduce the search zone to a few kilometers, but scouring Google Street View in that zone to find the exact place can be done by beginners.

Breaking down questions can also help beginners. Instead of asking a wide, open question such as: “Who created this website?”, you can direct beginners by breaking down the investigative steps in several easier questions, with every step unlocking the next one:

1. What is the registrant email in the WHOIS registry of this website?

2. What is the FlickR account linked to this email address?

3. Based on the photographs posted by this account, who is the person linked to this account?

---

I hope this article helps you to organise your own CTF. You will certainly encounter more problems than the ones cited above. Just remember that perfect is the enemy of good: these events are meant to be an occasion for the community to learn, network and share. There is a joy to organizing such events even if everything does not go perfectly.