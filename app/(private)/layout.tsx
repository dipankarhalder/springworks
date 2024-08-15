import { Header } from "@/components/elements/header";
import { IChildren } from "@/interface";

export default function PrivateLayout({ children }: Readonly<IChildren>) {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <div>{children}</div>
    </main>
  );
}
