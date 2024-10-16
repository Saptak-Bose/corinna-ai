import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="flex gap-5 justify-between items-center px-7 py-3 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5 shadow-sm">
      <Link href="/" className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/logo.png"
          sizes="100vw"
          style={{
            width: "128.75px",
            height: "auto",
          }}
          width={0}
          height={0}
          alt="logo"
        />
      </Link>
      <ul className="self-stretch justify-between hidden gap-5 my-auto text-sm font-semibold leading-5 text-neutral-700 max-md:flex-wrap max-md:max-w-full md:flex">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#pricing">Pricing</Link>
        </li>
        <li>
          <Link href="#">News Room</Link>
        </li>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Contact us</Link>
        </li>
      </ul>
      <Link href="/dashboard">
        <Button className="px-8 text-white bg-orange hover:bg-orange/90">
          Free Trial
        </Button>
      </Link>
    </nav>
  );
}
