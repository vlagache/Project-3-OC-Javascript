# <p align="center">Project-3-OC-Javascript</p>

<div align="center">
  <img src="/assets/logo.png" alt="logo" width="200"/>
</div>


## Context

In 2018, I knew nothing about computer development and started [a training course to learn web developer](https://openclassrooms.com/fr/paths/48-developpeur-web-junior). There were several projects to hand in and defend in front of a jury. It was one of them.

## Project

The idea is to develop a single page simulating the reservation of bicycles in a city (Dublin). Using a map, users can find out which stations have bikes available in real time, and then reserve a bike. The reservation is then temporarily stored in the user's browser.


It was my first real development project, with the discovery of APIs and Javascript. When I look back on this project years later, even though it's not perfect, I'm amazed at what I did without any knowledge of computer development.

### Mockup

<div align="center">
  <img src="/assets/mockup.png" alt="mockup" width="400"/>
</div>

 ### Instructions

- The application must be developed in JS on the client side, with no code written on the server side.
- The top of the page should contain a slideshow of photos and text explaining how the application works. **This slideshow must be developed without any plug-ins**. Other constraints concerning the slideshow: it must advance to the next image every 5 seconds, it must be pauseable by the user and the user must be able to advance it manually using the mouse or the left and right keys on the keyboard.
- A map should display the list of bike rental stations and their availability in **real time**. Stations are displayed using markers. Station information is provided by [JC Decaux's OpenData platform](https://developer.jcdecaux.com/#/home).
- Clicking on one of the markers displays the station status in an HTML/CSS panel next to the map.
- The map must be dynamically generated via a mapping service (I chose Mapbox).
- It must be possible to reserve an available bike at the chosen station by entering your first and last name and signing in a free field implemented using the [HTML5 Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). **The code is to be written from scratch, no plug-ins are allowed**.
- Once the reservation has been confirmed, the bike is marked as reserved. The reservation data is stored in the browser using the [WEB Storage API](https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API) and displayed below the panel. A dynamic countdown of the time remaining before the reservation expires is displayed. The reservation expires after 20 minutes and when the browser closes. However, the first and last name are retained by the browser to pre-fill the reservation form the next time it is used. Only one reservation can be made at a time.

 ### Technologies
 
![Technologies ](https://skillicons.dev/icons?i=js,html,css)

 ## My work

 ### General overview

 https://github.com/user-attachments/assets/a3223c0e-6932-46e4-8e02-ab239f15798f

 ### Slideshow

 ![slideshow](/assets/slideshow.gif)

 ### Responsive

 <p align="center">
  <img src="/assets/responsive_1.png" alt="responsive 1" width="250"/>
  <img src="/assets/responsive_2.png" alt="responsive 2" width="250"/>
  <img src="/assets/responsive_3.png" alt="responsive 3" width="250"/>
</p>