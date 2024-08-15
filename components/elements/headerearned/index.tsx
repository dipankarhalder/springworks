import Image from "next/image";
import { ChevronDown, FolderSync, Coins } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const HeaderEarned = () => {
  return (
    <div className="mr-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent text-xs font-medium text-slate-900 hover:bg-slate-100">
            <Image
              src="/ethereum.svg"
              alt="Etheruem"
              width={16}
              height={16}
              style={{ width: "16px", height: "16px" }}
              className="mr-1"
              priority
            />
            1000 earned <ChevronDown size={16} className="ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FolderSync className="mr-2 h-4 w-4" />
              <span className="font-medium text-xs">Referrals</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Coins className="mr-2 h-4 w-4" />
              <span className="font-medium text-xs">Tokens</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
