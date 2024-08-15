import { MessageSquareDot } from "lucide-react";

export const HeaderMessage = () => {
  return (
    <div className="mr-4 flex items-center justify-center rounded-md h-10 px-4 py-2 hover:bg-slate-100 cursor-pointer">
      <MessageSquareDot className="mr-2 h-4 w-4" />
      <p className="font-medium text-xs">Messaging</p>
    </div>
  );
};
