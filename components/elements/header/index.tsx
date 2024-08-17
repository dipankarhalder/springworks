import { HeaderLogo } from "@/components/elements/headerlogo";
import { HeaderSearch } from "@/components/elements/headersearch";
import { HeaderMessage } from "@/components/elements/headermessage";
import { HeaderVerification } from "@/components/elements/headerverification";
import { HeaderEarned } from "@/components/elements/headerearned";
import { HeaderProfile } from "@/components/elements/headerprofile";

export const Header = () => {
  return (
    <div className="flex w-full border-b bg-white">
      <div className="container mx-auto">
        <div className="flex w-full py-3 justify-between">
          <div className="flex items-center">
            <HeaderLogo />
          </div>
          <div className="flex">
            <HeaderSearch />
          </div>
          <div className="flex items-center">
            <HeaderMessage />
            <HeaderVerification />
            <HeaderEarned />
            <HeaderProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
