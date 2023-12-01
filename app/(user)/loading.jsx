"use client";

import { DashboardLoader } from "@/components/ui/loader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <DashboardLoader />
    </div>
  )
}

export default Loading;