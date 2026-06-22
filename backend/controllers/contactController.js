export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    console.log('📧 New Contact:', { name, email, phone, subject, message, timestamp: new Date() })

    res.json({
      success: true,
      message: 'Your message has been received! We will contact you soon.',
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Failed to send message' })
  }
}