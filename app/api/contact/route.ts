import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would integrate with an email service like Resend, SendGrid, etc.
    // For now, we'll just log it and send a success response
    // TODO: Integrate with email service

    const emailBody = `
New contact form submission from Little Stars Playschool website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
`

    console.log('Contact form submission:', emailBody)

    // In production, you would send an email here:
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@littlestars-playschool.co.uk',
    //   to: 'wilbur1979@googlemail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: emailBody,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
