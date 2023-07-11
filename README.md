# About & original repository

This is a school project for the minor Web Development at Amsterdam University of Applied Sciences. The rest of this readme will be written in dutch (sorry, not sorry). This is a resit repository, the previous repository can be found [here](https://github.com/rvdegroen/OBA-project). This is basically an improved version of the previous repository.

<img width="947" alt="image" src="https://github.com/rvdegroen/OBA-project/assets/90154152/38ee2950-9612-433f-8924-751fe57c25d7">

# Table of Contents

-   [Het project](#het-project)
    -   [Contributors](#contributors)
        -   [Documentaties](#documentaties)
    -   [Het probleem](#het-probleem)
    -   [De oplossing](#de-oplossing)
    -   [Features & herkansing](#features---herkansing)
    -   [Live demo📷](#live-demo--)
-   [Installatie](#installatie)
    -   [Local](#local)
    -   [Geïnstalleerde packages](#ge-nstalleerde-packages)
-   [Licentie](#licentie)

# Het project

Dit is een school project voor de minor: web development. Dit project is samen met de Openbare Bibliotheek van Amsterdam uitgevoerd.

## Contributors

Wie zijn wij? Wij zijn studenten van de Hogeschool van Amsterdam die tijdens de minor: web development, deze opdracht, ofwel "Meesterproef", hebben uitgevoerd.

-   [@rvdegroen](https://github.com/rvdegroen)
-   [@whtneyas](https://github.com/Whtneyas)

### Documentaties

_Productbiografie_

Bekijk onze individuele productbiografieën via de volgende linkjes:

-   Whitney: [Productbiografie](https://cypress-television-56d.notion.site/Productbiografie-4248856803614d9ead5d29b9522b4ef3?pvs=4)
-   Roshnie: [Productbiografie](https://www.dropbox.com/scl/fi/wujkk18ke502nmjy6v9ku/Meesterproef-Productbiografie-_-Roshnie-de-Groen.paper?rlkey=4ckgr0ca53xfxrcn2hg4nj8in&dl=0)

_Design Rationale_

Onze design rationale kan je vinden op de volgende [deze link](https://www.dropbox.com/scl/fi/9h787yko3atj6t267nhl1/Design-Rationale-_-OBA-Project.paper?dl=0&rlkey=jtvw7swgmgudjv76n0okkrj58)

## Het probleem

Er zijn veel verschillende bevolkingsgroepen die in Amsterdam wonen die de Nederlandse taal meer of minder beheersen. 20 tot 25% van de bevolking in Amsterdam heeft een digitale achterstand, wat zorgt voor een minder vloeiende user flow bij het zoeken van bijvoorbeeld een boek bij de OBA, omdat deze mensen bijvoorbeeld natuurlijke taal gebruiken om een boek te zoeken. Denk aan het intypen van "ik zoek een boek over katten”, wat geen resultaten oplevert.

Verder is de gevonden informatie op de website van de OBA onoverzichtelijk, omdat deze informatie als het ware als “1 grote hoop” wordt weergegeven, wat kan zorgen voor een overload aan informatie en voor een minder goede user experience, omdat het bijvoorbeeld onduidelijk is voor de gebruiker hoe zij tot hun einddoel kunnen komen.

## De oplossing

Het is aan ons de taak om de user experience te verbeteren voor een persoon met een digitale achterstand. Het ontwerp moet een duidelijke user flow hebben en zorgen voor een fijne beleving voor de gebruiker die de website komt bezoeken.

## Features & herkansing

In dit project hebben wij de volgende features toegepast:

-   [x] De gebruiker kan in de API zoeken
-   [x] De gebruiker kan in de verschillende API facets zoeken op makkelijkere woorden, bijvoorbeeld: kinderboek i.p.v. prentenboek
-   [x] De applicatie is gedeeltelijk responsive (alleen desktop & mobiel)

Voor de herkansing heb ik de volgende features aangepast of toegepast:

-   [x] De gebruiker kan nu ook op `enter` drukken om te zoeken
-   [x] De gebruiker kan op `esc` drukken, door uit het dialog te gaan
-   [x] De gebruiker kan buiten de dialog/modal klikken om deze te laten verdwijnen

-   [] De gebruiker kan zoeken door op de meestgestelde vragen te klikken
-   [] De applicatie is volledig responsive (ook de dialog): de hele css is opnieuw gedaan

-   [] Verbeterde animatie & tekst van de virtual assistent
-   [] Bij geen resultaten, is er een empty state zichtbaar (tekst en een aanwijzing voor de gebruiker wat ze kunnen doen)
-   [] De virtual assistent helpt de gebruiker bij een empty state (zegt iets)
-   [x] Er zijn geen enkele bugs meer voor de afbeeldingen

-   [] De "like" functie werkt
-   [] De "share" functie werkt

Als ik tijd over heb:

-   [] Rivve is toegepast voor de virtual assistent
-   [] View transition API is toegepast

## Live demo📷

Bekijk de demo van het project op: https://oba-project-roshnie.adaptable.app/

# Installatie

Hier lees je meer over de installatie van dit project.

## Local

Hier lees je meer hoe je de applicatie lokaal kunt installeren:

1. clone de repository lokaal in de terminal met: `git clone https://github.com/rvdegroen/OBA-Project-2.git`
2. Installeer de packages met `npm i` in de console van het project
3. Maak een `.env` bestand aan in de `root` van je project. Je hebt dit nodig voor API key van de OBA (neem met hen contact op):

```

SECRET=
PUBLIC_KEY=

```

4. Run de applicatie met `npm run dev`

## Geïnstalleerde packages

Wij hebben de volgende packages geïnstalleerd:

-   Ejs
-   Express
-   Nodemon
-   axios
-   .env
-   nodemon

# Licentie

Dit project valt onder de MIT-licentie.
