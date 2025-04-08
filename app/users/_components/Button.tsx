"use client"
import { signin, login, logout, updateToken } from "../../actions"

export default function Button() {
  return (
    <div>
      {/* WIP：ボタンコンポーネントの実装 */}
      <button onClick={signin}>「サインイン」</button>
      <button onClick={login}>「ログイン」</button>
      <button onClick={logout}>「ログアウト」</button>
      <button onClick={updateToken}>「トークン認証」</button>
    </div>
  )
}
