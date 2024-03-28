import React from "react"
import { usePostData } from './database.hooks';

export const UploadButton = () => {
    const {
        setState
      } = usePostData()

      return (
      <button type="button" onClick={() => setState(true)}>SendData</button>
      )
}