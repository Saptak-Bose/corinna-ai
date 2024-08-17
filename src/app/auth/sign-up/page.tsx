import SignUpFormProvider from "@/components/forms/sign-up/form-provider";

type Props = {};

export default function SignUpPage({}: Props) {
  return <div className="flex-1 w-full py-36 md:px-16">
    <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
            
        </SignUpFormProvider>
    </div>
  </div>;
}
