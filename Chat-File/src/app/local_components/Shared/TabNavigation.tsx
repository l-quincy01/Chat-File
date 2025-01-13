import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Tab {
  tabName: string;
  isActive: boolean;
}

interface PropItems {
  prevURL: string;
  prevTitle: string;
  currTitle: string;
  tabs: Tab[];
}

interface Props {
  prop: PropItems;
  onTabClick: (index: number) => void;
}

export default function TabNavigation({ prop, onTabClick }: Props) {
  return (
    <div className="flex flex-col gap-y-10 border-b pb-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={`/${prop.prevURL}`}>
              <BreadcrumbLink>{prop.prevTitle}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{prop.currTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center space-x-4 lg:space-x-6">
        {prop.tabs.map((tabItem, index) => (
          <React.Fragment key={index}>
            <div
              className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                tabItem.isActive ? "text-primary" : ""
              }`}
              onClick={() => onTabClick(index)}
            >
              {tabItem.tabName}
            </div>
            {index < prop.tabs.length - 1 && (
              <Separator orientation="vertical" className="h-4 m-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
