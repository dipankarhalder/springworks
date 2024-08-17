import Link from "next/link";
import Image from "next/image";
import { profile } from "@/lib/router";

export const HeaderLogo = () => {
  return (
    <Link href={profile} className="mr-6">
      <Image
        src="/logo.png"
        alt="Springworks"
        width={130}
        height={24}
        priority
      />
    </Link>
  );
};
