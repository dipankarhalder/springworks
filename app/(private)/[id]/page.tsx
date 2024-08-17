import Image from "next/image";
import { notFound } from "next/navigation";
import { IProfileProps } from "@/interface";

export default async function ProfileDetails({ params }: IProfileProps) {
  const profileBanner = "https://wallpaperaccess.com/full/6109330.jpg";
  const profileImage =
    "https://media.licdn.com/dms/image/v2/D5603AQHCM9H9t3_6uw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708373241440?e=1729123200&v=beta&t=2Fop2czN8IX_OfT0qA91bq0sKxpZAtiV0Rqt1_gjtmM";

  if (!params.id) {
    return notFound();
  }

  return (
    <div className="flex w-full mt-5 gap-5">
      <div className="bg-white rounded-md shadow w-3/4 overflow-hidden">
        <div className="w-full h-[200px] bg-slate-200 relative">
          <span>
            <Image
              src={profileBanner}
              alt="Springworks"
              width={130}
              height={24}
              className="w-full h-auto"
            />
          </span>
          <div className="w-[138px] h-[138px] bg-slate-400 absolute left-6 bottom-[-30px] shadow-sm overflow-hidden rounded-full border-4">
            <Image
              src={profileImage}
              alt="Springworks"
              width={130}
              height={24}
              layout="responsive"
            />
          </div>
        </div>
        <div className="w-full flex flex-col pt-12">
          <h1>Dipankar Halder</h1>
          <h5>Sr. Software Architech</h5>
          <h6>Karnataka, Bengaluru, India.</h6>
        </div>
        {params.id}
      </div>
      <div className="p-4 bg-white rounded-md shadow w-1/4">sdkjfnjs</div>
    </div>
  );
}
