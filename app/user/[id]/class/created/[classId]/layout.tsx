import React from "react";
import { FindClassById, getClassById } from "@/utils/getclass";
import { GetUser } from "@/utils/getuser";
import { notFound } from "next/navigation";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const FindClass = await FindClassById(classId);

  if (FindClass) {
    //check the auth for the user as a teacher
    const CLass: Class = await getClassById(classId);
    const user = await GetUser();
    if (CLass.teacher_id != user?.id) {
      notFound();
    }
  } else {
    notFound();
  }

  return (
    <SidebarProvider className="h-fit">
      <SidebarLeft className="sticky top-[75px]" />
      <SidebarInset className="sticky top-[73px]">
        <div className="sticky top-[73px] flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <ScrollArea className="flex flex-1 flex-col gap-4 p-4 h-svh">
          {children}
        </ScrollArea>
      </SidebarInset>
      <SidebarRight className="sticky top-[75px]" />
    </SidebarProvider>
  );
}
