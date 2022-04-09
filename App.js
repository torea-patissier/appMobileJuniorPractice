import { StyleSheet, Text, View } from 'react-native';
import MyDrawer from './routes/DrawerNav';
export default function App() {

  return (
      <>
      <MyDrawer/>
      {/* <TabNav/> */}
      </>
  );

}

/**
 * Ordre de la navigation de haut en bas dans l'ordre de la pile
 * App.js
 * Drawer
 * TabNav
 * StackNav
*/