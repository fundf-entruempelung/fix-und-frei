export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const response = await fetch('https://www.joshevski.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Form-Key': 'pk_WfY84A1dO9IbIK5q_Cp1Vw'
      },
      body: JSON.stringify({
        to: ['kontakt@fix-und-frei.de'],
        subject: body.subject,
        html: body.html,
        text: body.text
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Email service error: ${errorText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})
