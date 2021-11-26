import { useEffect, useState } from "react";

export default function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(null)

  useEffect(() => {
    const tester = (e) => {
      if (typeof targetKey === "function") {
        return targetKey(e)
      } else {
        return e.key === targetKey
      }
    }
    const downHandler = (e) => {
      tester(e) && setKeyPressed(e.key)
    }
    const upHandler = (e) => {
      tester(e) && setKeyPressed(null)
    }
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }, [])
  return keyPressed
}
