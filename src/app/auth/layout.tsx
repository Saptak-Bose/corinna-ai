import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="w-[600px] flex flex-col items-start p-6">
        <Image
          src="/images/logo.png"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
          alt="logo"
        />
        {children}
      </div>
      <div className="relative flex-col flex-1 hidden w-full max-h-full gap-3 pt-10 pl-24 overflow-hidden lg:flex bg-cream">
        <h2 className="font-bold text-gravel md:text-4xl">
          Hi, I&apos;m your AI powered sales assistant, Corinna!
        </h2>
        <p className="mb-10 text-iridium md:text-sm">
          Corinna is capable of capturing lead information without a form...{" "}
          <br />
          something never done before 😉
        </p>
        <Image
          className="absolute shrink-0 !w-[1600px] top-48"
          src="/images/app-ui.png"
          loading="lazy"
          sizes="30"
          width={0}
          height={0}
          alt="app-ui"
        />
      </div>
    </div>
  );
}
