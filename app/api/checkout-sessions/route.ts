import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // ... same Stripe logic
  return NextResponse.json({ sessionId: "session.id" })
}