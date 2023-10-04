import { Member } from './Member'
import { members } from './data'

export function Content () {
  return (
    <section className='px-8 my-48'>
      <h1 className='font-pixel text-4xl uppercase'>
        Members of the server
      </h1>

      <ul className='flex gap-20 mt-10 overflow-x-scroll'>
        {members.map((member) => (
          <Member
            key={member.name}
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
    </section>
  )
}
