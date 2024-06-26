import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChecklistScreen = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Buy groceries', checked: false },
    { id: '2', text: 'Do laundry', checked: false },
    { id: '3', text: 'Clean the house', checked: false },
    { id: '4', text: 'Pay bills', checked: false },
    { id: '5', text: 'Exercise', checked: false },
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => toggleItem(item.id)}>
      <Ionicons
        name={item.checked ? 'checkbox-outline' : 'square-outline'}
        size={24}
        color={item.checked ? 'green' : 'black'}
      />
      <Text style={[styles.itemText, item.checked && styles.checkedText]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default ChecklistScreen;