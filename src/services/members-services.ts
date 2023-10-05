import { Member } from '@/components/Content/data'
import { get } from '@/utils/http'

type Stream = {
  user_id: string
  user_login: string
}

type StreamResponse = {
  data: Stream[]
}

async function listAvailableStreams (members: Member[]) {
  const memberLogins = members.flatMap(member => member.twitchNames)
  const { data } = await get<StreamResponse>(memberLogins)

  const streams = data.map(stream => stream.user_login)

  const getMemberStream = (member: Member) => member.twitchNames.find(
    userName => streams.includes(userName.toLowerCase()),
  )

  const availableStreams = members.map(member => {
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

  return availableStreams
}

export const membersServices = {
  listAvailableStreams,
}
