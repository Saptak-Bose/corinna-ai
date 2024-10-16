"use client";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/use-auth-context";
import useSignUpForm from "@/hooks/sign-up/use-sign-up";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

type Props = {};

export default function ButtonHandler({}: Props) {
  const { currentStep, setCurrentStep } = useAuthContext();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = useSignUpForm();
  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);

  if (currentStep === 3)
    return (
      <div className="flex flex-col items-center w-full gap-3">
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    );

  if (currentStep === 2)
    return (
      <div className="flex flex-col items-center w-full gap-3">
        <Button
          type="submit"
          className="w-full"
          {...(isName &&
            isEmail &&
            isPassword && {
              onClick: () =>
                onGenerateOTP(
                  getValues("email"),
                  getValues("password"),
                  setCurrentStep
                ),
            })}
        >
          Continue
        </Button>
        <p>
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="font-bold">
            Sign In
          </Link>
        </p>
      </div>
    );

  return (
    <div className="flex flex-col items-center w-full gap-3">
      <Button
        type="submit"
        className="w-full"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
      >
        Continue
      </Button>
      <p>
        Already have an account?{" "}
        <Link href="/auth/sign-in" className="font-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
}
