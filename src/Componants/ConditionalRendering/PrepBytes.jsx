import React from 'react'

const PrepBytes = () => {
    let flag = true;
  return (
    <div>
        {/* {flag && <div>Hello we are from PrepBytes</div>} */}
        {
            flag ? <div>Congrats you r placed in FAANG!!</div> : <div>We are regret to infrom you</div>
        }
    </div>
  )
}

export default PrepBytes;