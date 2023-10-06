import { ReactComponent as ExternalLinkIcon } from '@/assets/icons/external-link.svg'
import { ReactComponent as Menu } from '@/assets/icons/menu.svg'
import { Button } from '../Button'

type MemberProps = {
  name: string
  image: string
  flag: {
    url: string
    alt: string
  }
  liveChannelURL: string
  isLive: boolean
}

export function MemberCard ({ name, image, flag, liveChannelURL, isLive }: MemberProps) {
  return (
    <article className='w-88 min-w-max bg-neutral-100 relative'>
      {isLive && (
        <span className='text-white bg-red-600 px-3 py-1 text-xl absolute left-6 top-7'>
          LIVE
        </span>
      )}

      <img
        src={image}
        alt={`Profile picture of ${name}`}
        className='w-full h-88 object-cover'
        loading='lazy'
      />

      <div className='p-6'>
        <div className='flex justify-between mb-9 items-center'>
          <strong className='font-normal text-2xl'>
            {name}
          </strong>

          <img
            src={flag.url}
            alt={`${flag.alt} flag`}
            width='36'
            height='27'
          />
        </div>

        <div className='flex justify-between'>
          <Button variant='dark' type='icon'>
            <Menu type='icon' aria-label='Menu' />
          </Button>

          <a href={liveChannelURL} target='_blank' rel='noopener noreferrer'>
            <Button>
              <span className='pt-[0.125rem]'>Live Channel</span>
              <ExternalLinkIcon />
            </Button>
          </a>
        </div>
      </div>
    </article>
  )
}
