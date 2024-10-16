"use client";

import Loader from "@/components/loader";
import AuthContextProvider from "@/context/use-auth-context";
import UseSignInForm from "@/hooks/sign-in/use-sign-in";
import { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: Readonly<ReactNode>;
};

export default function SignInFormProvider({ children }: Props) {
  const { loading, methods, onHandleSubmit } = UseSignInForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between h-full gap-3">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
}
