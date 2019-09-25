import React from 'react'
import Membro from './Membro'

const SobreNome = "Silva"

export default props =>
    <div>
        <Membro nome="Rafael" sobrenome={SobreNome} />
        <Membro nome="Daniela" sobrenome={SobreNome} />
        <Membro nome="Felipe" sobrenome={SobreNome} />
    </div>
 