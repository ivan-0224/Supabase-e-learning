import { NextRequest, NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'

export async function GET(request: NextRequest) {

  const { searchParams, origin } = new URL(request.url)
  console.log(searchParams)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = '/'
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Exchange error:", error);
      notFound()
    }
  }
  
  return NextResponse.redirect(`${origin}${next}`);

}