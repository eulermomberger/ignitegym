import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'Ombro']);
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curva', 'Remada unilateral', 'Levantamento terra']);
  const [groupSelected, setGroupSelected] = useState('Costas');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExerciseDetails = () => {
    navigation.navigate('exercise');
  };

  return (
    <VStack flex={1}>
      <HomeHeader/>

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md' fontFamily='heading'>
            Exercícios
          </Heading>

          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <ExerciseCard
              onPress={handleOpenExerciseDetails}
            />
          )}
        />
      </VStack>
    </VStack>
  );
}
