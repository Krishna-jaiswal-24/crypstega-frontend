import React from 'react'

export const Cards = ({ fileId, recievedData, sender }) => {
  return (
    <div>
      <ul className='flex flex-auto justify-between flex-col flex-start p-8 bg-trans my-8 rounded-lg '>
        <li className='text-white'>File ID: {fileId}</li>
        <li className='text-white'>Received on: {recievedData}</li>
        <li className='text-white'>From: {sender}</li>
      </ul>
    </div>
  )
}
