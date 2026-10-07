import { useContext } from 'react'
import { AutorizacionesContext } from '../context/AutorizacionesContextObject'
const useAutorizaciones = () => {
  return useContext(AutorizacionesContext)
}
export default useAutorizaciones