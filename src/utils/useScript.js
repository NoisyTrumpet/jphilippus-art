import { useEffect } from "react"
const useScript = async resourceUrl => {
  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src = resourceUrl
    script.type = `text/javascript`
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [resourceUrl])
}
export default useScript
