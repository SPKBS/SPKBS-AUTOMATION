import { motion } from "motion/react";

function PlantScene() {
  return (
    <div className="plant-scene" aria-label="Animated illustration of connected automated manufacturing equipment" role="img">
      <div className="scene-topline"><span><i /> LIVE FACTORY OVERVIEW</span><span>PLANT 01 · ONLINE</span></div>
      <svg className="plant-svg" viewBox="0 0 720 490" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="belt" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dfeaf7"/><stop offset="1" stopColor="#b9cbe0"/></linearGradient>
          <linearGradient id="robot" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#3481d9"/><stop offset="1" stopColor="#173976"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M70 357 374 226l273 107-306 138L70 357Z" fill="#e6edf6"/>
        <path d="m99 356 280-120 222 88-279 127-223-95Z" fill="url(#belt)" stroke="#adc1d9" strokeWidth="2"/>
        <path d="m123 355 256-110 196 78-253 115-199-83Z" fill="#f8fbff" stroke="#b6c8dc" strokeWidth="2"/>
        <path d="m119 381 228 96v-21l-228-97v22Z" fill="#b7c9de"/><path d="m347 477 279-128v-20L347 456v21Z" fill="#8fa8c5"/>
        <g className="conveyor-box"><path d="m205 324 64-28 52 21-64 29-52-22Z" fill="#fff" stroke="#7290b3" strokeWidth="2"/><path d="m205 324 52 22v39l-52-22v-39Z" fill="#d6e3f1" stroke="#7290b3" strokeWidth="2"/><path d="m257 346 64-29v39l-64 29v-39Z" fill="#afc4db" stroke="#7290b3" strokeWidth="2"/><path d="m224 332 27-12 26 11-27 12-26-11Z" fill="#5da3ef"/></g>
        <g className="conveyor-box box-two"><path d="m412 305 54-24 47 19-54 25-47-20Z" fill="#fff" stroke="#7290b3" strokeWidth="2"/><path d="m412 305 47 20v35l-47-20v-35Z" fill="#d6e3f1" stroke="#7290b3" strokeWidth="2"/><path d="m459 325 54-25v35l-54 25v-35Z" fill="#afc4db" stroke="#7290b3" strokeWidth="2"/><path d="m430 313 25-11 22 9-25 12-22-10Z" fill="#5da3ef"/></g>
        <path d="M105 256v98M606 230v92" stroke="#aec0d5" strokeWidth="5"/><path d="M105 255 365 144l241 86" stroke="#aec0d5" strokeWidth="5" strokeDasharray="8 9"/>
        <g className="robot-arm">
          <path d="m116 378 56-25 27 12-56 27-27-14Z" fill="#365b8c"/><path d="m145 378 30-71 24 10-22 69-32-8Z" fill="url(#robot)"/><circle cx="177" cy="307" r="15" fill="#f3f8ff" stroke="#1e5eaa" strokeWidth="8"/>
          <path d="m177 304 47-41 18 17-47 44-18-20Z" fill="url(#robot)"/><circle cx="233" cy="271" r="12" fill="#f3f8ff" stroke="#1e5eaa" strokeWidth="7"/>
          <path d="m231 266 39-41 13 13-34 48-18-20Z" fill="#2869c7"/><path d="m267 226 12-13 10 8-3 15-8 7" stroke="#173976" strokeWidth="6" strokeLinecap="round"/>
          <path d="M145 378v23m-16 0h57" stroke="#21446f" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <g className="sensor-node"><rect x="508" y="165" width="112" height="66" rx="12" fill="#fff" stroke="#d9e3ef"/><text x="523" y="188" fill="#718199" fontSize="10" fontFamily="sans-serif" letterSpacing="1.4">LINE SPEED</text><text x="523" y="216" fill="#173976" fontSize="21" fontWeight="700" fontFamily="sans-serif">82.4 <tspan fill="#26a5d8" fontSize="11">m/min</tspan></text><path d="m589 213 8-11 7 5 8-13" stroke="#2a82d2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g>
        <g className="sensor-node sensor-node-two"><rect x="52" y="184" width="112" height="66" rx="12" fill="#fff" stroke="#d9e3ef"/><text x="67" y="207" fill="#718199" fontSize="10" fontFamily="sans-serif" letterSpacing="1.4">PLC STATUS</text><circle cx="73" cy="229" r="4" fill="#37bb8a"/><text x="84" y="233" fill="#173976" fontSize="13" fontWeight="700" fontFamily="sans-serif">RUNNING</text></g>
        <path className="data-path" d="M164 220c83-68 209-79 344-20M164 234c90 47 195 38 344-27" stroke="#46a2eb" strokeWidth="2" strokeDasharray="5 8"/>
        <circle className="data-pulse" cx="0" cy="0" r="5" fill="#2489df" filter="url(#glow)"><animateMotion dur="3.4s" repeatCount="indefinite" path="M164 220c83-68 209-79 344-20"/></circle>
        <g className="drone"><path d="M294 101h36m-18-18v36m-32-24h12m42 0h12" stroke="#173976" strokeWidth="4" strokeLinecap="round"/><path d="M307 95 313 88h6l6 7-6 7h-6l-6-7Z" fill="#fff" stroke="#2869c7" strokeWidth="2"/><circle cx="291" cy="95" r="4" fill="#27a4d9"/><circle cx="345" cy="95" r="4" fill="#27a4d9"/><path d="m319 103-8 13m8-13 8 13" stroke="#2869c7" strokeWidth="2"/><path d="M311 118h16" stroke="#173976" strokeWidth="2"/></g>
        <g className="wifi-pulse" stroke="#278add" strokeWidth="2.5" strokeLinecap="round"><path d="M354 139c9-8 22-8 31 0"/><path d="M360 145c5-5 13-5 18 0"/><circle cx="369" cy="151" r="1.8" fill="#278add"/></g>
      </svg>
      <div className="scene-footer"><span><b>↗</b> PLC → EDGE → IIoT → INSIGHT</span><span className="scene-live"><i /> SYSTEMS CONNECTED</span></div>
    </div>
  );
}

export default PlantScene;
