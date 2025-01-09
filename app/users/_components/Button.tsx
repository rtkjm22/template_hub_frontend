'use client'

import { piyo } from "../actions"

export default function Button() {
  return (
    <div>
      <button onClick={piyo}>ユーザーを作成する</button>
    </div>
  )
}
