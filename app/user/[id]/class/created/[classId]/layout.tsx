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
import Header from "@/components/Header";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const FindClass = await FindClassById(classId);
  const user = await GetUser();

  let CLass: Class = {} as Class;

  if (FindClass) {
    console.log();
    //check the auth for the user as a teacher
    CLass = await getClassById(classId);
    if (CLass.teacher_id != user?.id) {
      notFound();
    }
  } else {
    notFound();
  }

  return (
    <SidebarProvider>
      <SidebarLeft CLass={CLass} User={user} />
      <SidebarInset>
        <header className="sticky top-0 backdrop-blur-sm flex h-14 shrink-0 items-center gap-2 z-50 ">
          <div className="flex flex-1 items-center gap-2 px-3 ">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1 text-2xl capitalize">
                    {CLass.class_name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 ">{children}</div>
      </SidebarInset>

      <SidebarRight CLass={CLass} User={user} />
    </SidebarProvider>
  );
}
