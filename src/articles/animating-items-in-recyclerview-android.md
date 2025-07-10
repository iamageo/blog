---
title: "Animating Items in a RecyclerView on Android."
date: "2021-08-21"
tags: ["android", "animation"]
location: "Tucuruí, PA"
---

=============================================

![captionless image](https://miro.medium.com/v2/resize:fit:596/format:webp/1*czBvl9pnVA06ke8lrxc18g.png)

Today we’ll implement animations in Android’s RecyclerView. Many applications use recyclable views, and nothing better than adding some elegance with animations.

**To create an animation, we’ll follow two steps:**
===================================================

1. Create the animation XML file  
2. Apply the animation to the layout

Before jumping into the animation, make sure your **RecyclerView** has an **Adapter** attached to it. In this example, our app will display a list of **Contacts**, so we’ll create an Adapter named [**ContactAdapter**](https://github.com/iamageo/android_basic_examples/blob/main/kotlin/recyclerview_item_animation/app/src/main/java/com/iamageo/recyclerviewitemanimation/adapter/ContactAdapter.kt).

Step 1: Create the animation file
=================================

Inside the `/res` folder, add a new directory named `anim`, like this:

Android supports many animations. In this example, we’ll use two of them: **scale** and **rotate**.

![captionless image](https://miro.medium.com/v2/resize:fit:460/format:webp/1*QKrWE90Lhgp6G8124Lyo5A.png)

Step 2: Apply the animation to the layout
=========================================

Once the XML animation file is ready, we need to apply it to the root view of our layout.  
We’ll create a layout named `adapter_contact_item.xml`, which will represent each item in the RecyclerView.  
The root view is a `MaterialCardView` with the ID “**container_item**”.

To apply the animation to the layout, inside the **onBindViewHolder** method of our Adapter, add the following:

```kotlin
holder.container.animation =
    AnimationUtils.loadAnimation(holder.itemView.context, R.anim.scale)
```

Where `"scale"` is the name of the animation file linked to the layout.

The main class will look like this:

Scale
=====

The scale animation is used to increase or decrease the size of a view.

**Parameters**

- `fromXfloat`: Horizontal scale factor at the beginning of the animation  
- `toXfloat`: Horizontal scale factor at the end of the animation  
- `fromYfloat`: Vertical scale factor at the beginning of the animation  
- `toYfloat`: Vertical scale factor at the end of the animation  
- `pivotXfloat`: X coordinate of the pivot point (0 means left edge)  
- `pivotYfloat`: Y coordinate of the pivot point (0 means top edge)

**scale.xml**

![captionless image](https://miro.medium.com/v2/resize:fit:692/format:webp/1*PcoYfP00YUcuMH7LoYGzUg.gif)

Rotate
======

This animation rotates a view around a specified pivot point in the XY plane. You can specify the center point. If omitted, the default is (0.0) which is the top-left corner.

**Parameters**

- `fromDegreesfloat`: Starting angle  
- `toDegreesfloat`: Ending angle

**rotate.xml**

![captionless image](https://miro.medium.com/v2/resize:fit:692/format:webp/1*kAp_XRAA0DOD4ZcvjDdONA.gif)

These are two simple but very useful examples if you want to add style to your lists.

Thanks for reading and see you next time! :)
