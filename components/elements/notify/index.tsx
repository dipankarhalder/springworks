"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Notify = () => {
  const [showNotify, setShowNotify] = useState(true);
  const handleNotify = () => setShowNotify(false);

  return (
    showNotify && (
      <div className="absolute top-[6px]">
        <Alert>
          <AlertDescription className="px-1 flex items-center">
            Improve your background verification process with the power of
            blockchain and AI:&nbsp;
            <Link
              className="font-semibold hover:text-blue-700"
              href="mailto:sales@springverify.com"
            >
              sales@springverify.com
            </Link>
            &nbsp;and&nbsp;
            <Link
              className="font-semibold hover:text-blue-700"
              href="telephone:+91-9019906005"
            >
              +91-9019906005
            </Link>
            <span
              className="w-6 h-6 flex justify-center items-center bg-slate-100 rounded-full ml-7 cursor-pointer"
              onClick={() => handleNotify()}
            >
              <X size={16} />
            </span>
          </AlertDescription>
        </Alert>
      </div>
    )
  );
};
