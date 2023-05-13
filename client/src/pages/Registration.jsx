import React from 'react'

const Registration = () => {
  return (
    <>
        <form method='POST'>
            <input type="text" name='name' id='name' placeholder='name' />
            <input type="email" name='email' id='emai' placeholder='email' />
            <input type="password" name='password' id='password' placeholder='password' />
            <button>Sumbit</button>
        </form>
    </>
  )
}

export default Registration