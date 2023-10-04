import { useEffect, useState } from 'react'
import { Member } from './Member'
import { Member as MemberType, members } from './data'
import { Button } from '../Button'
import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/arrow-right.svg'

const accessToken = import.meta.env.VITE_TWITCH_ACCESS_TOKEN
const clientID = import.meta.env.VITE_TWITCH_CLIENT_ID

const URL = 'https://api.twitch.tv/helix/streams?user_login=BadBoyHalo&user_login=fitmc&user_login=felps&user_login=Foolish_Gamers&user_login=ironmouse&user_login=jaidenanimations&user_login=quackity&user_login=tubbo&user_login=roier&user_login=bagi&user_login=peqitw&user_login=bagherajones'

export function Content () {
  const [memberStreams, setMemberStreams] = useState<MemberType[]>(members)

  useEffect(() => {
    async function getMemberStreams () {
      const response = await fetch(URL, {
        headers: {
          'Client-ID': clientID,
          Authorization: `Bearer ${accessToken}`,
        },
      })

      const { data } = await response.json()

      setMemberStreams((prev) => {
        const newState = prev.map((member) => {
          const stream = data.find((stream: any) => {
            return stream.user_name.toLowerCase() === member.twitchName.toLowerCase()
          })

          if (stream) {
            return {
              ...member,
              isLive: true,
              liveChannelURL: `https://twitch.tv/${member.twitchName}`,
            }
          }

          return member
        })

        return newState.sort((a, b) => {
          if (a.isLive && !b.isLive) {
            return -1
          }

          if (!a.isLive && b.isLive) {
            return 1
          }

          return 0
        })
      })
    }

    try {
      getMemberStreams()
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <section className='px-8 my-16 h-full flex flex-col justify-center'>
      <h1 className='font-pixel text-4xl uppercase'>
        Members of the server
      </h1>

      <div className='relative'>
        <span className='absolute top-1/2 -translate-y-1/2 -left-4 z-10'>
          <Button type='icon'>
            <ArrowLeft className='ml-1' />
          </Button>
        </span>

        <ul className='flex gap-20 mt-10 overflow-x-scroll'>
          {memberStreams.map((member) => (
            <Member
              key={member.twitchName}
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

        <span className='absolute top-1/2 -translate-y-1/2 -right-4'>
          <Button type='icon'>
            <ArrowRight className='mr-1' />
          </Button>
        </span>
      </div>
    </section>
  )
}
