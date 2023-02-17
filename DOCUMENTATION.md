## Netlify link

https://stellular-mousse-462029.netlify.app/

## Scalability

The project can be scaled quite easily both vertically and horizontally

Horizontally as in, more content can be added to the API, the site renders dynamically
A good example of this is ratings, the API given for the project only has a single rating from a single user, but the site has a function that takes into account multiple user ratings, and averages them out to give a final rating

A good vertical expansion could be a trainer details page. The search function already accounts and differentiates for trainers and trainings. A trainer details page could list all trainings hosted by the trainer, and the rating functions could be easily adapted to work for rating trainers as well.

A lot of the code is used multiple places.

## TECH STACK

# React

https://reactjs.org/

- Good for phones, widely used, has good documentation and a large userbase.
- Very good for dynamic content, able to change content without refresh using useState
- Am experienced at using react
- Great for making reusable, dynamic code(ie components & useState, useEffect, etc)

# React Router

https://reactrouter.com/en/main

- Client side rendering, so navigation is possible without refreshing - it makes navigation faster which is very useful especially on mobile applications.
- It also reduces the number of requests to the site host.

# Tailwind

https://tailwindcss.com/

- Easy setup of default rules, useful for themes, makes development faster by having CSS rules be applied either directly where needed or through tailwind.config
- Widely used and allows own customization easily, which is needed here for among other things, the font sizes

# React icons

https://www.npmjs.com/package/react-icons

- For easily using icons in the project
- Has wide support for icons
- Has large userbase
- Is easy to use
- Is customizable

# React Slick

https://www.npmjs.com/package/react-slick

- Needed for the class swipe list
- Easy to implement since I've set it up in a previous project

# React-hook-form

https://www.npmjs.com/package/react-hook-form

- Better form performance, required for adaptation of code from earlier project

# Yup

https://www.npmjs.com/package/yup

- Schema validation, required for adaptation of code from earlier project

# @hookform/resolvers

https://www.npmjs.com/package/@hookform/resolvers

- make react-hook-form and yup work together

# react toastify

https://www.npmjs.com/package/react-toastify

- package for small banners to appear on command, useful for user feedback
- easy to use, have used before
- very customizable
