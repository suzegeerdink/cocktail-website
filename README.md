# ReadME

## Table of Contents
- [Introduction](Introduction)
- [Screenshot](#screenshot)
- [Technologies](#technologies)
- [Setup](#setup)
- [User Accounts](#user-accounts)
- [Run Command](#run-command)

## Introduction

Cocktail Counter is een interactieve webapplicatie die gebruikers in staat stelt cocktails toe te voegen aan hun persoonlijke account. Daarnaast biedt de applicatie inzicht in de benodigde waterinname op basis van het aantal genuttigde cocktails, met als doel bewuster om te gaan met hydratatie en alcoholgebruik.

*Cocktail Counter is an interactive web application that allows users to add cocktails to their personal account. The application also provides insight into the required water intake based on the number of consumed cocktails, encouraging a more conscious approach to hydration and alcohol consumption.*

## Screenshot
<img src="src/assets/CocktailCounterWebsite.png" alt="CocktailCounterWebsite">


## Technologies

Deze applicaties is gemaakt in React, de styling met CSS flexbox. Er is gebruik gemaakt van axios en de Cocktail API, om de data op te halen.

*This application is built with React, styled with CSS Flexbox. Axios and the Cocktail API are used to fetch data.*

## Setup

Voor deze applicatie is een API key vereist. In de professionele workflow kopieer je eerst `.env.example` naar `.env` en vul je je eigen API key in:

*This application requires an API key. In a professional workflow, first copy `.env.example` to `.env` and fill in your own API key:*

1. Kopieer `.env.example` naar `.env`.
2. Voeg je eigen API key toe in het `.env` bestand.

**Voor de eindopdracht wordt mijn persoonlijke API key meegeleverd in het `.env` bestand van de ingeleverde broncode, zodat de applicatie direct werkt zonder extra configuratie.**

*For the final project submission, my personal API key is included in the `.env` file of the submitted source code, so the application works immediately without extra configuration.*

## User accounts

De applicatie bevat één gegarandeerd werkende gebruiker voor beoordeling:

*The application contains one guaranteed working user for evaluation:*

**Admin account (always available)**

`{
  "email": "admin@bibliotheek.nl",
  "password": "admin123"
}`

Opmerking: zelf geregistreerde gebruikers via de frontend zijn tijdelijk en kunnen verdwijnen bij een reset van het project. Voor de eindopdracht kun je altijd de admin account gebruiken om in te loggen via frontend of Swagger.

*Note: Users registered via the frontend are temporary and may be lost if the project is reset. For the final submission, you can always use the admin account to log in via the frontend or Swagger.*

## Run Command

In de terminal, run `npm install && npm run dev`
