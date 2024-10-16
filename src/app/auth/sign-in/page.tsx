import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function SignInPage({}: Props) {
  return (
    <main className="flex-1 w-full py-36 md:px-16">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
            <div className="flex flex-col items-center w-full gap-3">
              <Button type="submit" className="w-full">
                Submit
              </Button>
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/auth/sign-up" className="font-bold">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </main>
  );
}
