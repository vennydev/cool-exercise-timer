import { useEffect } from "react"

export default function User({ id, user, onRemove, onToggle}){
  const { username, email, isActive } = user; 

  return (
    <div>
      <b 
        onClick={() => onToggle(id)} 
        style={{ 
          cursor: 'pointer',
          color: isActive ? 'green' : 'white'
          }}
      >{username}: </b>
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}