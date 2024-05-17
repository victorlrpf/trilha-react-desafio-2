import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder='Usuário'/>
        <input value={value} onChange={onChange} placeholder='Rpositorio'/>
    </InputContainer>
    

  )
}

export default Input
