/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'

export default function useDebounce(fn: any, delay: number | undefined) {
  const timeoutRef = useRef(0)

  function debounceFunction(...params: any[]) {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fn(...params)
    }, delay)
  }

  return debounceFunction
}
