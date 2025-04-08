const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ""
export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${apiBaseUrl}${endpoint}`

  // デフォルトの設定
  const defaultOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}), // ユーザーが指定したヘッダーをマージ
    },
    credentials: "include",
    ...options, // ユーザーが指定したオプションをマージ
  }

  return fetch(url, defaultOptions)
}
