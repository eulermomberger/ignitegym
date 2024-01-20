import { useState } from 'react';
import { Heading, SectionList, Text, VStack } from 'native-base';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal'],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercícios'/>

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section }) => (
          <Heading
            color='gray.200'
            fontSize='md'
            mt={10}
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        renderItem={({ item }) => (
          <HistoryCard/>
        )}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
        px={8}
      />
    </VStack>
  );
}
