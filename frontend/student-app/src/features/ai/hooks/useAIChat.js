import { useState } from 'react'
import { sendChatMessage } from '../services/aiService.js'

export function useAIChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m here to help you think through this problem — ask me anything, minus the full solution 🙂' },
  ])
  const [loading, setLoading] = useState(false)

  const send = async (text) => {
    const userMsg = { role: 'user', content: text }
    setMessages((m) => [...m, userMsg])
    setLoading(true)
    const reply = await sendChatMessage(text, messages)
    setMessages((m) => [...m, reply])
    setLoading(false)
  }

  return { messages, loading, send }
}
