import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary:"#bd326d",
      background:"#ffffff"
    }
};
export default MyTheme;