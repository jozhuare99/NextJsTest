"use client";

import { DashboardLoader } from "@/components/ui/loader";

const Loading = () => {
  return (
    <div className="flex w-full h-full items-center-justify-center">
      <DashboardLoader />
    </div>
  )
}

export default Loading;