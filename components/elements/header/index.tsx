import Link from "next/link";
import Image from "next/image";

import { profile } from "@/lib/router";
import { HeaderSearch } from "@/components/elements/headersearch";
import { HeaderMessage } from "@/components/elements/headermessage";
import { HeaderVerification } from "@/components/elements/headerverification";
import { HeaderEarned } from "@/components/elements/headerearned";
import { HeaderProfile } from "@/components/elements/headerprofile";

export const Header = () => {
  return (
    <div className="flex px-8 py-3 border-b bg-white justify-between items-center">
      <div className="flex">
        <Link href={profile}>
          <Image
            src="/logo.png"
            alt="Springworks"
            width={130}
            height={24}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center">
        <HeaderSearch />
        <HeaderMessage />
        <HeaderVerification />
        <HeaderEarned />
        <HeaderProfile />
      </div>
    </div>
  );
};
