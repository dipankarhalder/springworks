import { ChevronDown, CircleUser, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const HeaderProfile = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent text-xs font-medium text-slate-900 hover:bg-transparent p-0 flex items-center">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/25415635?v=4"
                alt="@shadcn"
              />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} className="ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 mr-2">
          <DropdownMenuLabel className="text-xs">
            Signed in as{" "}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <CircleUser className="mr-2 h-4 w-4" />
              <span className="font-medium text-xs">Your profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span className="font-medium text-xs">Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span className="font-medium text-xs">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
