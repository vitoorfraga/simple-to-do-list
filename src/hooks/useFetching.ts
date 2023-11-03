import { useState, Dispatch, SetStateAction } from 'react'

interface useFetchingHook {
  isFetching: boolean
  activeFetching: () => void
  disableFetching: () => void
}

export const useFetching = (): useFetchingHook => {
  const [isFetching, setIsFetching]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState(false)

  const activeFetching = () => {
    setIsFetching(true)
  }

  const disableFetching = () => {
    setIsFetching(false)
  }

  return { isFetching, activeFetching, disableFetching }
}
