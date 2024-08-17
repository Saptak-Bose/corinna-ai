import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

type InitialValuesProps = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
};

const authContext = createContext(InitialValues);
const { Provider } = authContext;

export default function AuthContextProvider({ children }: Props) {
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValues.currentStep
  );
  const values = { currentStep, setCurrentStep };

  return <Provider value={values}>{children}</Provider>;
}

export const useAuthContext = () => {
  const state = useContext(authContext);
  return state;
};
