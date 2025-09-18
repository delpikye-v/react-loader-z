<div align="center">
  <h1>react-loader-z</h1>
  <a href="https://www.npmjs.com/package/react-loader-z">react-loader-z</a>
  <br />
  <br />
  <b><a href="https://codesandbox.io/p/sandbox/f7d77y">LIVE EXAMPLE</a></b>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-loader-z.svg)](https://www.npmjs.com/package/react-loader-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![downloads](https://img.shields.io/npm/dt/react-loader-z.svg)

---

# 🌀 React Loader Components

A small collection of reusable **loading indicators** (spinners, dots, grids…) built with **React + TypeScript**.
Each loader is an independent component that can be customized and combined with a backdrop.

---

## 📦 Installation

```bash
npm install react-loader-z
# or
yarn add react-loader-z
```

---

## 🚀 Quick Usage

```tsx
import React from 'react';
import {
  LoaderBar,
  LoaderChaseDots,
  LoaderCircularDots,
  LoaderCubeGrid,
  LoaderDotsCircle,
  LoaderDoubleBounce,
  LoaderFoldingCube,
  LoaderLinear,
  LoaderLinearDots,
  LoaderPulse,
  LoaderRing,
  LoaderSpinner,
  LoaderWave,
} from 'react-loader-z';

function Example() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 40,
        padding: 40,
        justifyItems: 'center',
        background: '#f7f7f7',
      }}
    >
      {/* 1️⃣ LoaderBar */}
      <div>
        <h4>LoaderBar</h4>
        <LoaderBar size={120} color="#2196F3" speed={1.5} />
      </div>

      {/* 2️⃣ LoaderChaseDots */}
      <div>
        <h4>LoaderChaseDots</h4>
        <LoaderChaseDots size={60} color="#FF5722" speed={2} />
      </div>
    </div>
  );
}
```

---

# ⚡ React Loaders Collection

A collection of **21 customizable loaders** built with `styled-components`.
All loaders support props like `loading`, `size`, `color`, `speed`, `center`, `backdrop`.

---

## 📦 Available Loaders

| Loader Name              | Preview (concept)          | Description / Style              | Key Props                             |
| ------------------------ | -------------------------- | -------------------------------- | ------------------------------------- |
| **LoaderBar**            | ▓▓▓▓▓                      | Expanding bar                    | `size`, `thickness`, `color`          |
| **LoaderChaseDots**      | ●●●●                       | Dots chasing in a circle         | `dots`, `size`, `speed`               |
| **LoaderCircularDots**   | ⭕ ●●●                      | Circular rotating dots           | `dots`, `dotSize`, `size`, `speed`    |
| **LoaderCubeGrid**       | ◼︎◼︎◼︎<br>◼︎◼︎◼︎<br>◼︎◼︎◼︎ | 3×3 pulsing cube grid            | `size`, `color`, `speed`              |
| **LoaderDotsCircle**     | ● ● ● ●                    | Dots fading around a circle      | `dots`, `size`, `speed`               |
| **LoaderDoubleBounce**   | ◎ ◎                        | 2 bouncing scaling circles       | `size`, `color`, `speed`              |
| **LoaderFlipSquare**     | ◼︎ ↻                        | Flipping square                  | `size`, `color`, `speed`              |
| **LoaderFoldingCube**    | ◼︎◼︎                         | Folding 2D cube animation        | `size`, `color`, `speed`              |
| **LoaderLinear**         | █████                      | Linear progress bar (loop)       | `size`, `thickness`, `color`          |
| **LoaderLinearDots**     | ●●●                        | Moving dots along a line         | `dots`, `size`, `speed`               |
| **LoaderLinearDual**     | ⇆                          | Dual moving bars                 | `size`, `thickness`, `color`          |
| **LoaderLinearFillWipe** | ████                       | Fill → wipe linear effect        | `size`, `thickness`, `speed`          |
| **LoaderMeteor**         | ☄                          | Falling meteor line effect       | `size`, `speed`, `color`              |
| **LoaderPulse**          | ● ↕                        | Single pulsing circle            | `size`, `color`, `speed`              |
| **LoaderPulseMulti**     | ● ● ●                      | Multiple pulsing dots            | `dots`, `size`, `speed`               |
| **LoaderRing**           | ◌                          | Rotating ring (spinner ring)     | `size`, `thickness`, `color`          |
| **LoaderRipple**         | ◎ ◎                        | Ripple expanding circles         | `size`, `color`, `speed`              |
| **LoaderSpinner**        | ⟳                          | Classic spinner                  | `size`, `thickness`, `speed`          |
| **LoaderTyping**         | ● ● ●                      | Typing indicator                 | `dots`, `speed`, `color`              |
| **LoaderWave**           | ≋≋≋                        | Wave bars animation              | `bars`, `height`, `speed`             |
| **LoaderWaveDots**       | ●●●●                       | Wave-style bouncing dots         | `dots`, `speed`, `color`              |
| **LoaderInfinity**       | ∞                          | Infinity loop animation          | `size`, `thickness`, `speed`, `color` |
| **LoaderAtom**           | ⚛                          | Atom-like nucleus + orbiting dot | `size`, `speed`, `color`              |
| **LoaderWorm**           | \~\~\~\~\~                 | Worm-like moving trail           | `length`, `speed`, `color`            |
| **LoaderGalaxy**         | ✦ ✧ ✦ ✧                    | Galaxy swirl rotating stars      | `stars`, `size`, `speed`, `color`     |
| **LoaderHelix**          | DNA-like helix spiral      | 3D helix wave dots               | `dots`, `height`, `speed`, `color`    |
| **LoaderOrbit**          | ☉ ● ● ●                    | Orbiting dots around center      | `count`, `size`, `speed`, `color`     |
| **LoaderDotsRotate**     | ● ↻                        | Dots rotating around axis        | `dots`, `size`, `speed`               |
| **LoaderSquareSpin**     | ◼︎ ⟳                       | Square rotating 360°             | `size`, `color`, `speed`              |
| **LoaderBarsFade**       | ▌▌▌▌                       | Multiple fading vertical bars    | `bars`, `color`, `speed`              |
| **LoaderClock**          | 🕑                         | Clock-hand ticking               | `size`, `speed`, `color`              |
| **LoaderHourglass**      | ⧖                          | Hourglass flip animation         | `size`, `speed`, `color`              |
| **LoaderPulseRing**      | ◎◎◎                        | Expanding pulse rings            | `rings`, `size`, `speed`              |
| **LoaderBounceDots**     | ● ● ●                      | Dots bouncing up/down            | `dots`, `speed`, `color`              |
| **LoaderStairs**         | ▂▄▆█                       | Stair climbing animation         | `steps`, `speed`, `color`             |
| **LoaderFireworks**      | ✦ ✧ ✦ ✧                    | Burst particles like fireworks   | `particles`, `speed`, `color`         |
| **LoaderPendulum**       | ◉ —                        | Swinging pendulum dot            | `size`, `speed`, `color`              |
| **LoaderSnake**          | █████                      | Snake-like slithering motion     | `length`, `speed`, `color`            |
| **LoaderGear**           | ⚙                          | Rotating gear                    | `teeth`, `size`, `speed`              |
| **LoaderTriangle**       | ▲▲▲                        | Triangle rotating / bouncing     | `size`, `color`, `speed`              |
| **LoaderHexagon**        | ⬡                          | Hexagon spinning                 | `size`, `color`, `speed`              |

---

## ⚙️ Props (General Guidelines)

Each loader comes with its own props interface. (common)
Common optional props shared by many loaders include:

| Prop       | Type      | Default     | Description                                                        |
|------------|-----------|-------------|--------------------------------------------------------------------|
| `loading`  | `boolean` | `true`      | Whether the loader is active/visible.                              |
| `size`     | `number`  | `undefined` | Size of the loader (pixels).                                       |
| `color`    | `string`  | `"#333"`  | Color of the loader animation.                                     |
| `center`   | `boolean` | `false`     | Center the loader within its container.                            |
| `backdrop` | `boolean` | `false`     | Show a semi-transparent backdrop behind the loader (fullscreen).   |

Refer to individual component files for full prop details.

---

## 📝 License
MIT © 2025
