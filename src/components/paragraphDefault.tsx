//hello word
import React from 'react'

export default function ParagraphDefault(props : {valueText: string, paraDefaultStyle: string}) {
  return (
    <p className={props.paraDefaultStyle}>{props.valueText}</p>
  )
}
