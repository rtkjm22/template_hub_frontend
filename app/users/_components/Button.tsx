'use client'
import { signin, login, logout } from '../actions'

export default function Button() {
  return (
    <div>
      <button onClick={signin}>「サインイン」</button>
      <button onClick={login}>「ログイン」</button>
      <button onClick={logout}>「ログアウト」</button>
    </div>
  )
}
