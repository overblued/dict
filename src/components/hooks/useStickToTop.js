
import { useEffect, useRef } from "react"

//this toggle fixed class on a useRef object
export default () => {
  const ref = useRef(null)
  useEffect(() => {
    addEventListener("scroll", e => {
      const { height, top } = ref.current.getBoundingClientRect()
      const isOutOfView = top <= 0 && scrollY >= height
      ref.current.className = `search${isOutOfView ? " fixed" : ""}`
    })
  }, [])

  return ref
}