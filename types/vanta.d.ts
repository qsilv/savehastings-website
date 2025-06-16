declare module 'vanta/dist/vanta.birds.min' {
  import * as THREE from 'three';
  
  export default function BIRDS(options: {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    colorMode?: string;
    birdSize?: number;
    wingSpan?: number;
    speedLimit?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
    [key: string]: any;
  }): {
    destroy: () => void;
  };
}

// Add other effects you might use
declare module 'vanta/dist/vanta.waves.min' {
  import * as THREE from 'three';
  export default function WAVES(options: any): { destroy: () => void };
}

declare module 'vanta/dist/vanta.clouds.min' {
  import * as THREE from 'three';
  export default function CLOUDS(options: any): { destroy: () => void };
}

declare module 'vanta/dist/vanta.net.min' {
  import * as THREE from 'three';
  export default function NET(options: any): { destroy: () => void };
}

declare module 'vanta/dist/vanta.fog.min' {
  import * as THREE from 'three';
  export default function FOG(options: any): { destroy: () => void };
}