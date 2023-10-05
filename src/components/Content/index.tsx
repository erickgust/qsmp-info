import { useEffect, useState, useRef } from 'react'
import { MemberCard } from './MemberCard'
import { Member, members } from './data'
import { Button } from '../Button'
import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/arrow-right.svg'

const accessToken = import.meta.env.VITE_TWITCH_ACCESS_TOKEN
const clientID = import.meta.env.VITE_TWITCH_CLIENT_ID

const URL = 'https://api.twitch.tv/helix/streams?user_login=BadBoyHalo&user_login=fitmc&user_login=felps&user_login=Foolish_Gamers&user_login=ironmouse&user_login=jaidenanimations&user_login=quackity&user_login=tubbo&user_login=roier&user_login=bagi&user_login=peqitw&user_login=bagherajones'

type Stream = {
  user_id: string
  user_login: string
}

export function Content () {
  const [memberStreams, setMemberStreams] = useState<Member[]>(members)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const memberListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    async function getMemberStreams () {
      const response = await fetch(URL, {
        headers: {
          'Client-ID': clientID,
          Authorization: `Bearer ${accessToken}`,
        },
      })

      const { data } = await response.json() as { data: Stream[] }

      const streams = new Map(data.map(stream => [stream.user_login, stream]))

      const getMemberStream = (member: Member) => member.twitchNames.find(
        userName => streams.has(userName.toLowerCase()),
      )

      const availableStreams = memberStreams.map(member => {
        const stream = getMemberStream(member)

        if (stream) {
          return {
            ...member,
            isLive: true,
            liveChannelURL: `https://twitch.tv/${stream}`,
          }
        }

        return member
      })

      setMemberStreams(availableStreams.sort((a, b) => {
        if (a.isLive && !b.isLive) {
          return -1
        }

        if (!a.isLive && b.isLive) {
          return 1
        }

        return 0
      }))
    }

    try {
      getMemberStreams()
    } catch (err) {
      console.error(err)
    }
  }, [memberStreams])

  useEffect(() => {
    if (!memberListRef.current) {
      return
    }
    const memberList = memberListRef.current

    function handleArrowVisibility () {
      setShowLeftArrow(memberList.scrollLeft > 0)
      setShowRightArrow(memberList.scrollLeft < memberList.scrollWidth - memberList.clientWidth - 10)
    }

    memberList.addEventListener('scroll', handleArrowVisibility)

    return () => {
      memberList.removeEventListener('scroll', handleArrowVisibility)
    }
  }, [memberListRef])

  function handleScroll (direction: 'left' | 'right') {
    const memberList = memberListRef.current

    if (!memberList) {
      return
    }

    const { scrollLeft } = memberList
    const { offsetWidth } = memberList.firstElementChild as HTMLLIElement

    if (direction === 'left') {
      memberList.scrollTo({
        left: scrollLeft - (offsetWidth + 80) * 3,
        behavior: 'smooth',
      })
    }

    if (direction === 'right') {
      memberList.scrollTo({
        left: scrollLeft + (offsetWidth + 80) * 3,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className='px-8 py-16 flex-1 flex flex-col justify-center'>
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

        <ul className='flex gap-20 mt-10 overflow-x-scroll hide-scroll' ref={memberListRef}>
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
