import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // State and Constants for Twitter-like validation
  const MAX_CHARACTERS = 280;
  const [text, setText] = useState('');
  const charactersLeft = MAX_CHARACTERS - text.length;
  const isValid = text.length > 0 && text.length <= MAX_CHARACTERS;

  // Split text into two parts
  const mainText = text.slice(0, MAX_CHARACTERS); // Text within the limit
  const extraText = text.slice(MAX_CHARACTERS);  // Text beyond the limit

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.title}>Twitter-like Post Validation</Text>

      {/* Single TextInput for all text */}
      <TextInput
        style={[
          styles.textInput,
          extraText.length > 0 && styles.textInputError, // Apply error styling if text exceeds 280
        ]}
        multiline
        maxLength={MAX_CHARACTERS + 10} // Allow extra input to show feedback
        placeholder="What's happening?"
        value={text}
        onChangeText={setText}
      />

      <View style={styles.footer}>
        <Text 
          style={[
            styles.characterCount,
            text.length > MAX_CHARACTERS && styles.characterCountError
          ]}
        >
          {charactersLeft} characters left
        </Text>
        <Button
          title="Post"
          onPress={() => alert('Post submitted!')}
          disabled={!isValid}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  textInputError: {
    backgroundColor: '#ffebee', // Light red background when characters exceed 280
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterCount: {
    fontSize: 14,
    color: '#6c757d',
  },
  characterCountError: {
    color: 'red', // Change font color to red when characters exceed 280
  },
});

export default App;sdsd