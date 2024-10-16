import { ReactNode } from "react";
import Spinner from "../spinner";

type Props = {
  loading: boolean;
  children: ReactNode;
};

export default function Loader({ children, loading }: Props) {
  return loading ? (
    <div className="flex justify-center w-full py-5">
      <Spinner />
    </div>
  ) : (
    children
  );
}
