import { Provider as AuthProvider } from "./user/context";
const AppProviders = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default AppProviders;
