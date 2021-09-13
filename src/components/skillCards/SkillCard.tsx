import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonCadastrar, TextNome, TextEmail, TextTelefone, TextCadastro } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  nome: string,
  email: string,
  telefone: string
}

export function CadastrarCard({ nome, email, telefone, ...rest }: SkillCardProps) {
    return (
        <ButtonCadastrar 
        {...rest}
        >
          <TextNome><TextCadastro>Nome:</TextCadastro> {nome}</TextNome>

          <TextEmail><TextCadastro>Email:</TextCadastro> {email}</TextEmail>

          <TextTelefone><TextCadastro>Telefone:</TextCadastro> {telefone}</TextTelefone>

        </ButtonCadastrar>
    )
}

