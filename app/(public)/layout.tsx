import { IChildren } from "@/interface";

export default function PublicLayout({ children }: Readonly<IChildren>) {
  return (
    <main className="flex h-full w-full flex-row items-center justify-center">
      <div className="flex h-screen w-full items-center justify-center p-8">
        {children}
      </div>
    </main>
  );
}
