type PlayModes =
  | 'always'
  | 'hover'
  | 'click'
  | 'manual'

type PowerGlitchOptions = {
  html?: string
  createContainers: boolean
  playMode: PlayModes
  hideOverflow: boolean
  timing: {
      duration: number
      iterations: number
      easing?: string
  }
  glitchTimeSpan:
    | false
    | { start: number, end: number }
  shake:
    | false
    | { velocity: number, amplitudeX: number, amplitudeY: number }
  slice: {
      count: number
      velocity: number
      minHeight: number
      maxHeight: number
      hueRotate: boolean
  }
  pulse:
    | false
    | { scale: number }
}

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

declare module 'react-powerglitch' {
  export type GlitchHandle = {
    ref: (node: HTMLElement | null) => void
    startGlitch: () => void
    stopGlitch: () => void
    setOptions: (options: RecursivePartial<PowerGlitchOptions>) => void
  }

  export function useGlitch (userOptions?: RecursivePartial<PowerGlitchOptions>): GlitchHandle
}
