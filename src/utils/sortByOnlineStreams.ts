import { Member } from '@/components/Content/data'

export function sortByOnlineStreams (streams: Member[]) {
  return streams.sort((a, b) => {
    if (a.isLive && !b.isLive) {
      return -1
    }

    if (!a.isLive && b.isLive) {
      return 1
    }

    return 0
  })
}
