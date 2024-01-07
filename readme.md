# 2D Raycasting
!["2d Raycasting"](assets\2d-raycasting-showcase.gif)

## Summary
My attempt at the Coding Trains Coding Challenge #145, which you can [watch here](https://www.youtube.com/watch?v=TOEi6T2mtHo). Casting rays to get a sort of lighting effect in 2D.

## How it works
- We first create rays that are centered around the mouse.
- Then we check if these rays collided with anything. Our "walls" are lines, so this is essentially just a bunch of [line-segment intersections](https://en.wikipedia.org/wiki/Intersection_(geometry)#Two_line_segments).
- We can draw the rays only up until their intersection.
- While simple, this effect can create very sharp "shadows" and is very fun to play around with.

## How to Install
- Just clone or download the files. You can use variety of ways to host the website locally.
- I use live server from VS Code.

## How to play
- Just move your mouse around and see how it changes the scenery!
- Refreshing the page randomizes the walls.
- By adjusting the slider, you can change the number of rays casted, which essentially increases the resolution.
