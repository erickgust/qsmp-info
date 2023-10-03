import { SocialMediaItem } from './SocialMediaLink'
import { links } from './data'

export function Footer () {
  return (
    <footer className='bg-[#FAE39B]'>
      <div className='max-w-7xl flex px-4 py-4 mx-auto pt-20 items-end'>
        <div className='flex-[4] text-[#132B3F]'>
          <h1 className='font-pixel text-2xl uppercase mb-8'>
            Official <br />
            QSMP accounts
          </h1>

          <p className='leading-7 block max-w-md'>
            Nunc egestas urna ac orci vel sed erat. Sodales vel netus facilisi donec donec quis.
            Risus adipiscing mauris cum non est enim a. Quis commodo sit sed lectus ac est.

            <span className='mt-3 block'>
              Amet lobortis eu malesuada penatibus aliquet nisi nec.
            </span>
          </p>
        </div>

        <aside className='flex-[5]'>
          <ul className='flex gap-5 gap-y-6 flex-wrap justify-end'>
            {links.map((link) => (
              <SocialMediaItem
                key={link.url}
                name={link.name}
                icon={link.icon}
                url={link.url}
              />
            ))}
          </ul>
        </aside>
      </div>
    </footer>
  )
}
