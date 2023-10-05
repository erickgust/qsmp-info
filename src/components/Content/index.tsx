import { useEffect, useState, useRef, useCallback } from 'react'
import { MemberCard } from './MemberCard'
import { Member, members } from './data'
import { Button } from '../Button'
import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/arrow-right.svg'
import { sortByOnlineStreams } from '@/utils/sortByOnlineStreams'
import { membersServices } from '@/services/members-services'
import { useScroll } from './useScroll'

export function Content () {
  const [memberStreams, setMemberStreams] = useState<Member[]>(members)
  const {
    elementRef,
    showLeftArrow,
    showRightArrow,
    handleScroll,
  } = useScroll<HTMLUListElement>()
  const firstRender = useRef(true)

  useEffect(() => {
    async function getMemberStreams () {
      try {
        const availableStreams = await membersServices.listAvailableStreams(memberStreams)
        const sortedAvailableStreams = sortByOnlineStreams(availableStreams)

        setMemberStreams(sortedAvailableStreams)
      } catch {
        console.error('Failed to get member streams')
      }
    }

    if (firstRender.current) {
      getMemberStreams()
      firstRender.current = false
    }
  }, [memberStreams])

  return (
    <section className='px-8 py-48 flex-1 flex flex-col justify-center'>
      <h1 className='font-pixel text-4xl uppercase'>
        Members of the server
      </h1>

      <div className='relative'>
        {showLeftArrow && (
          <span className='absolute top-1/2 -translate-y-1/2 -left-4 z-10'>
            <Button type='icon' onClick={() => handleScroll('left')}>
              <ArrowLeft className='ml-1' />
            </Button>
          </span>
        )}

        <ul className='flex gap-20 mt-12 overflow-x-scroll hide-scroll' ref={elementRef}>
          {memberStreams.map((member) => (
            <MemberCard
              key={member.liveChannelURL}
              flag={{
                url: `https://flagcdn.com/w40/${member.country.ISOCode.toLowerCase()}.png`,
                alt: member.country.name,
              }}
              image={member.avatarURL}
              isLive={member.isLive}
              liveChannelURL={member.liveChannelURL}
              name={member.name}
            />
          ))}
        </ul>

        {showRightArrow && (
          <span className='absolute top-1/2 -translate-y-1/2 -right-4'>
            <Button type='icon' onClick={() => handleScroll('right')}>
              <ArrowRight className='mr-1' />
            </Button>
          </span>
        )}
      </div>
    </section>
  )
}
