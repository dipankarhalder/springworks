import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const HeaderSearch = () => {
  return (
    <div className="w-[300px] relative mr-8">
      <Search className="absolute top-2.5 left-2.5 text-slate-300" size={20} />
      <Input type="text" placeholder="Search people..." className="pl-10" />
    </div>
  );
};
