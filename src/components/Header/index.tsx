import { Button } from '../Button'
import { ReactComponent as ExternalLinkIcon } from '@/assets/icons/external-link.svg'
import { ReactComponent as HeaderGrid1 } from '@/assets/header-grid-1.svg'
import { ReactComponent as HeaderGrid2 } from '@/assets/header-grid-2.svg'
import { Timer } from '../Timer'

export function Header () {
  return (
    <header className='h-60 bg-[#1F1E33] relative z-0 px-36'>
      <HeaderGrid1 className='absolute top-0 left-0 z-10' aria-hidden='true' />
      <HeaderGrid2 className='absolute top-0 -right-2 z-10' aria-hidden='true' />

      <div className='z-20 max-w-7xl flex mx-auto items-center h-full'>
        <div className='flex-1 px-4'>
          <p className='text-white leading-7 text-lg max-w-lg mb-5'>
            Rirus adipiscing mauris cum non est enim a. Quis commodo sit sed lectus ac est.
          </p>

          <Button>
            <span className='pt-[0.125rem]'>See announcement</span>

            <ExternalLinkIcon />
          </Button>
        </div>

        <div className='flex-1'>
          <Timer />
        </div>
      </div>
    </header>
  )
}