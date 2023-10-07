import { useGlitch } from 'react-powerglitch'
import { Button } from '../Button'
import { ReactComponent as ExternalLinkIcon } from '@/assets/icons/external-link.svg'
import { ReactComponent as HeaderGrid1 } from '@/assets/header-grid-1.svg'
import { ReactComponent as HeaderGrid2 } from '@/assets/header-grid-2.svg'
import { Timer } from '../Timer'

export function Header () {
  const glitchEff = useGlitch({
    playMode: 'hover',
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 250,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 8,
      velocity: 25,
      minHeight: 0.05,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  })

  return (
    <header className='h-60 bg-[#1F1E33] relative z-0 px-36 overflow-hidden'>
      <HeaderGrid1 className='absolute top-0 left-0 z-10' aria-hidden='true' />
      <HeaderGrid2 className='absolute top-0 -right-2 z-10' aria-hidden='true' />

      <div className='z-20 max-w-7xl flex mx-auto items-center h-full'>
        <div className='flex-1 px-4'>
          <p className='text-white leading-7 text-lg max-w-lg mb-5'>
            Rirus adipiscing mauris cum non est enim a. Quis commodo sit sed lectus ac est.
          </p>

          <div>
            <a
              href='https://twitter.com/QuackityStudios'
              rel='noopener noreferrer'
              target='_blank'
              className='inline-block'
              ref={glitchEff.ref}
            >
              <Button>
                <span className='pt-[0.125rem]'>See announcement</span>

                <ExternalLinkIcon />
              </Button>
            </a>
          </div>
        </div>

        <div className='flex-1'>
          <Timer />
        </div>
      </div>
    </header>
  )
}
