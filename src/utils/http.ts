const accessToken = import.meta.env.VITE_TWITCH_ACCESS_TOKEN
const clientID = import.meta.env.VITE_TWITCH_CLIENT_ID

const baseUrl = 'https://api.twitch.tv/helix/streams'

export async function get <T> (
  query: string[],
): Promise<T> {
  const url = new URL(baseUrl)

  query.forEach(userName => {
    url.searchParams.append('user_login', userName)
  })

  const response = await fetch(url, {
    headers: {
      'Client-ID': clientID,
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  return data
}
