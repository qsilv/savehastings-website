import type { TurnstileServerValidationResponse } from '@marsidev/react-turnstile'

const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const secretKey = process.env.TURNSTILE_SECRET_KEY!  // Set in .env

export async function POST(request: Request) {
  const { token } = await request.json()

  const res = await fetch(verifyEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`
  })

  const data = await res.json() as TurnstileServerValidationResponse

  return new Response(JSON.stringify(data), {
    status: data.success ? 200 : 400,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
