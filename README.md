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

      {/* 3️⃣ LoaderCircularDots */}
      <div>
        <h4>LoaderCircularDots</h4>
        <LoaderCircularDots size={80} dotSize={12} color="#4CAF50" dots={8} speed={1} />
      </div>

      {/* 4️⃣ LoaderCubeGrid */}
      <div>
        <h4>LoaderCubeGrid</h4>
        <LoaderCubeGrid size={60} color="#673AB7" />
      </div>

      {/* 5️⃣ LoaderDotsCircle */}
      <div>
        <h4>LoaderDotsCircle</h4>
        <LoaderDotsCircle size={60} dots={6} dotSize={8} color="#E91E63" />
      </div>

      {/* 6️⃣ LoaderDoubleBounce */}
      <div>
        <h4>LoaderDoubleBounce</h4>
        <LoaderDoubleBounce size={50} color="#009688" />
      </div>

      {/* 7️⃣ LoaderFoldingCube */}
      <div>
        <h4>LoaderFoldingCube</h4>
        <LoaderFoldingCube size={60} color="#795548" speed={2.4} />
      </div>

      {/* 8️⃣ LoaderLinear */}
      <div>
        <h4>LoaderLinear</h4>
        <LoaderLinear size={140} thickness={6} color="#FF9800" fullWidth={false} />
      </div>

      {/* 9️⃣ LoaderLinearDots */}
      <div>
        <h4>LoaderLinearDots</h4>
        <LoaderLinearDots size={14} dots={5} color="#3F51B5" speed={1.4} />
      </div>

      {/* 🔟 LoaderPulse */}
      <div>
        <h4>LoaderPulse</h4>
        <LoaderPulse size={48} color="#9C27B0" speed={1.2} />
      </div>

      {/* 11️⃣ LoaderRing */}
      <div>
        <h4>LoaderRing</h4>
        <LoaderRing size={50} color="#4CAF50" speed={1.2} />
      </div>

      {/* 12️⃣ LoaderSpinner */}
      <div>
        <h4>LoaderSpinner</h4>
        <LoaderSpinner size={40} color="#03A9F4" speed={0.8} />
      </div>

      {/* 13️⃣ LoaderWave */}
      <div>
        <h4>LoaderWave</h4>
        <LoaderWave size={40} color="#8BC34A" speed={1.2} bars={5} />
      </div>
    </div>
  );
}
```

---

## 🧩 Components List

| Component              | Props Interface             | Description                                        |
| ---------------------- | --------------------------- | -------------------------------------------------- |
| **LoaderChaseDots**    | `IFLoaderChaseDotsProps`    | Multiple dots chasing each other in a circle       |
| **LoaderCircularDots** | `IFLoaderCircularDotsProps` | Dots rotating around a circle                      |
| **LoaderCubeGrid**     | `IFLoaderCubeGridProps`     | Animated 3×3 cube grid                             |
| **LoaderDotsCircle**   | `IFLoaderDotsCircleProps`   | Dots moving around a circular path                 |
| **LoaderDoubleBounce** | `IFLoaderDoubleBounceProps` | Two circles bouncing in opposite phases            |
| **LoaderFoldingCube**  | `IFLoaderFoldingCubeProps`  | Folding cube spinner                               |
| **LoaderLinear**       | `IFLoaderLinearProps`       | Horizontal progress/line loader                    |
| **LoaderLinearDots**   | `IFLoaderLinearDotsProps`   | Dots running left-to-right in a line               |
| **LoaderRing**         | `IFLoaderRingProps`         | Simple rotating ring                               |
| **LoaderSpinner**      | `IFLoaderSpinnerProps`      | Classic spinner animation                          |
| **LoaderBar**          | `IFLoaderBarProps`          | Animated bar loader                                |
| **LoaderPulse**        | `IFLoaderPulseProps`        | Pulsing circle animation                           |
| **LoaderWave**         | `IFLoaderWaveProps`         | Wave-style vertical bars                           |
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
