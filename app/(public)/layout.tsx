import { IChildren } from "@/interface";
import { Notify } from "@/components/elements/notify";

export default function PublicLayout({ children }: Readonly<IChildren>) {
  return (
    <main className="flex h-full w-full flex-row items-center justify-center relative">
      <Notify />
      <div className="flex h-screen w-full items-center justify-center p-8">
        {children}
      </div>
    </main>
  );
}
