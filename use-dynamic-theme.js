import { useEffect, useRef } from 'react'

export default function useDynamicTheme() {
  const navRef = useRef(null)
  const mainRef = useRef(null)

  // シンプルなプレースホルダー実装（必要なら発展可能）
  useEffect(() => {
    // セクションに応じたテーマ切り替えなどはここで実装可能
  }, [])

  return { navRef, mainRef }
}

