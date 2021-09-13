import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
    
import { Container, Title, Input, TitleCadastrar } from './styles';
import { Button } from '../components/button/Button';
import { CadastrarCard } from '../components/registerCards/RegisterCard';

interface ICadastroData {
  id: string;
  name: string;
  email: string;
  telefone: string;
}

export function Home() {
  const [newNome, setNewNome] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newTelefone, setNewTelefone] = useState('')
  const [myCadastro, setMyCadastro] = useState<ICadastroData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newNome,
      email: newEmail,
      telefone: newTelefone
    }
    setMyCadastro([...myCadastro, data])
    setNewNome('')
    setNewEmail('')
    setNewTelefone('')
  }

  function handleRemoveSkill(id: string) {
    setMyCadastro(myCadastro => myCadastro.filter(cadastro => cadastro.id !== id))
  }

  useEffect(() => {
    async function loadData() {
      const storageCadastro = await AsyncStorage.getItem('@myadastros:cadastros')
      if (storageCadastro) {
        setMyCadastro(JSON.parse(storageCadastro))
      }
    }
    loadData()
    // async function removeAll() {
    //   await AsyncStorage.removeItem('@myskills:skills')
    // }
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myadastros:cadastros', JSON.stringify(myCadastro))
    }
    saveData()
  }, [myCadastro])

  return (
    <>
    <ScrollView>
    <Container>

      <Title>Cadastrar Usuário</Title>
    
      <TitleCadastrar>Nome:</TitleCadastrar>
      <Input 
      placeholder="Digite o nome"
      placeholderTextColor='#909090'
      value={newNome}
      onChangeText={value => setNewNome(value)}
      />

      <TitleCadastrar>Email:</TitleCadastrar>
      <Input 
      placeholder="Digite o email"
      placeholderTextColor='#909090'
      value={newEmail}
      onChangeText={value => setNewEmail(value)}
      />

      <TitleCadastrar>Telefone:</TitleCadastrar>
      <Input 
      placeholder="Digite o telefone"
      placeholderTextColor='#909090'
      value={newTelefone}
      onChangeText={value => setNewTelefone(value)}
      />

      <Button 
      title = "Cadastrar" 
      onPress={handleAddNewSkill}  
      />
      
      <Title style={{ marginVertical: 20 }}>
        Lista de Usuários
      </Title>
      
      <FlatList showsVerticalScrollIndicator={true}
        data={myCadastro}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CadastrarCard  
            nome={item.name}
            email={item.email}
            telefone={item.telefone}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </Container>
    </ScrollView>
    </>
  );
}



