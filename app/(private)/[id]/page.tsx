import { notFound } from "next/navigation";
import { IProfileProps } from "@/interface";
import { profile } from "@/lib/profileContent";

export default async function ProfileDetails({ params }: IProfileProps) {
  if (!params.id) {
    return notFound();
  }
  return <div>{params.id}</div>;
}
