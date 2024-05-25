'use client'
import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const sendMessage = async () => {
    setLoading(true)
    setMsg('')
    try {
      const response = await axios.post('/api/sendmessage', { email, message })
      setMsg(response.data.msg)
    } catch (error) {
      setMsg('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='w-full h-[85vh] flex justify-center'>
      <div id='contact' className='w-full h-[60vh] flex justify-center items-center flex-col'>
        <h1 className='text-white text-[30px] md:text-[40px]'>Message Me</h1>
        <input
          type="email"
          placeholder='Email id'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='rounded m-5 w-[300px] h-9 p-5 md:w-[400px]'
        />
        <textarea
          placeholder='Message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          className='rounded m-5 p-5 resize-none w-[300px] h-36 md:w-[400px]'
        ></textarea>
        <button
          onClick={sendMessage}
          className={`rounded m-5 p-2 w-[300px] border border-blue-700 text-white md:w-[400px] duration-200 hover:bg-[blue] hover:rounded-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : msg ? msg : 'Send message'}
        </button>
      </div>
    </div>
  )
}

export default Contact
