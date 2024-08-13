import Link from "next/link";
import Image from "next/image";
import { login_page, register_page } from "@/lib/router";
import { SigninComponent } from "@/components/compages/signin";

export default function Home() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center mb-4">
        <span className="flex justify-center mb-5">
          <Image
            src="/logo.png"
            alt="Springworks"
            className="dark:invert"
            width={163}
            height={30}
            priority
          />
        </span>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back!</h1>
        <p className="text-sm text-muted-foreground">
          Please sign in to continue
        </p>
      </div>
      <div className="grid gap-6">
        <SigninComponent />
        <div className="text-center text-sm mt-2">
          <p>
            Don&apos;t have an account? &nbsp;
            <Link
              href={register_page}
              className="font-medium underline hover:text-blue-700"
            >
              Create now
            </Link>
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-50 px-2 text-muted-foreground font-semibold text-xs">
              Or continue with
            </span>
          </div>
        </div>
        {/* <SocialComponent /> */}
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground leading-6">
        By clicking continue, you agree to our&nbsp;
        <Link
          className="font-medium underline hover:text-blue-700"
          href={login_page}
        >
          Terms of Service
        </Link>
        &nbsp; and &nbsp;
        <Link
          className="font-medium underline hover:text-blue-700"
          href={login_page}
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

// import Image from "next/image";
{
  /* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className="dark:invert"
  width={100}
  height={24}
  priority
/> */
}
