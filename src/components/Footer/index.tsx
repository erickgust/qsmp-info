import { Button } from '../Button'
import { links } from './data'

import { icons } from '@/assets/icons'

export function Footer () {
  return (
    <footer className='bg-[#FAE39B]'>
      <div className='max-w-7xl flex px-2 py-4'>
        <div className='flex-1'>
          <h1 className='font-pixel text-2xl uppercase'>
            Official <br />
            QSMP accounts
          </h1>

          <p>
            Nunc egestas urna ac orci vel sed erat. Sodales vel netus facilisi donec donec quis.
            Risus adipiscing mauris cum non est enim a. Quis commodo sit sed lectus ac est.

            <br />

            Amet lobortis eu malesuada penatibus aliquet nisi nec.
          </p>
        </div>

        <aside className='flex-1'>
          <ul className='flex gap-5 gap-y-6 flex-wrap justify-end'>
            {links.map((link) => (
              <li key={link.url} className='inline-block'>
                <a href={link.url} target='_blank' rel='noopener noreferrer'>
                  <Button size='small' variant='white'>
                    <img src={icons.get(link.icon)} alt='' />
                    {link.name}
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </footer>
  )
}
