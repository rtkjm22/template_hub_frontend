'use client'
import { fetchApi } from '@/lib/fetchApi'

export async function signin() {
  const res = await fetchApi('/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify({
      lastName: '田中',
      firstName: '太郎',
      lastNameKana: 'タナカ',
      firstNameKana: 'タロウ',
      email: `hogehgoe@gmaol_${Math.random() * 100}.com`,
      password: 'password111',
      confirmPassword: 'password111'
    })
  })
  if (!res.ok) throw new Error('新規登録失敗')
  return res.json()
}

export async function login() {
  const res = await fetchApi('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: 'hogehgoe@gmail.com',
      password: 'password111'
    })
  })
  if (!res.ok) throw new Error('ログイン失敗')
  return res.json()
}

export async function logout() {
  const res = await fetchApi('/api/auth/logout', {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('ログアウト失敗')
  return res.json()
}
