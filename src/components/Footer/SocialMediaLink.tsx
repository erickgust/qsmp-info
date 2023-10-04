import { Button } from '../Button'
import { icons } from '@/assets/icons'

type SocialMediaItemProps = {
  name: string
  icon: string
  url: string
}

export function SocialMediaItem ({ name, icon, url }: SocialMediaItemProps) {
  return (
    <li key={url} className='inline-block'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Button size='small' variant='white'>
          <img src={icons.get(icon)} alt={icon} />
          <span className='pt-[0.125rem]'>{name}</span>
        </Button>
      </a>
    </li>
  )
}
