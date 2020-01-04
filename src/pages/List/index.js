import React from 'react';
import {View, FlatList} from 'react-native';
import ListItem from '../../component/ListItem';

// import { Container } from './styles';

const Separator = () => (
  <View style={{flex: 1, height: 1, backgroundColor: '#DDD'}}></View>
);

export default function List() {
  const tarefas = [
    {id: '1', tarefa: 'Comprar Doritos'},
    {id: '2', tarefa: 'Comprar Doritos2'},
    {id: '3', tarefa: 'Comprar Doritos3'},
    {id: '4', tarefa: 'Comprar Doritos4'},
  ];
  return (
    <View>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem
            data={item}
            handleLeft={() => alert('Tarefa concluida com sucesso!')}
            handleRight={() => alert('Tarefa excluida')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}
