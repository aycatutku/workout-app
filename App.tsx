import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar />
      </>
    );
  }
  return null;
}
