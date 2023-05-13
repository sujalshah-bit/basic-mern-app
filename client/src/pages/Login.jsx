import React from 'react'

const login = () => {
  return (
    <>
        <form method='POST'>
            <input type="email" name='email' id='emai' placeholder='email' />
            <input type="password" name='password' id='password' placeholder='password' />
            <button>Sumbit</button>
        </form>
    </>
  )
}

export default login