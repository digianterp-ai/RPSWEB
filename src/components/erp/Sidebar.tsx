"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
LayoutDashboard,
Settings,
School,
Users,
UserCog,
CalendarCheck,
ClipboardList,
BookOpen,
CreditCard,
Megaphone,
Bus,
Package,
Trophy,
BarChart3,
Smartphone,
GraduationCap,
Brain,
Cloud,
ChevronDown
} from "lucide-react";

import { erpMenu } from "@/config/erpMenu";

const iconMap: Record<string, any> = {
home: LayoutDashboard,
settings: Settings,
school: School,
students: Users,
teachers: UserCog,
attendance: CalendarCheck,
exam: ClipboardList,
homework: BookOpen,
finance: CreditCard,
communication: Megaphone,
transport: Bus,
library: BookOpen,
inventory: Package,
activities: Trophy,
reports: BarChart3,
mobile: Smartphone,
lms: GraduationCap,
ai: Brain,
services: Cloud
};

type SidebarProps = {
userRole: string;
collapsed: boolean;
};

export default function Sidebar({ userRole, collapsed }: SidebarProps) {

const pathname = usePathname();

const filteredMenu = erpMenu;

const findActiveSection = () => {

for (const section of filteredMenu) {

if (section.items?.length) {
for (const item of section.items) {
if (pathname === item.href || pathname.startsWith(item.href + "/")) {
return section.section;
}
}
}

if (section.groups?.length) {
for (const group of section.groups) {
for (const item of group.items) {
if (pathname === item.href || pathname.startsWith(item.href + "/")) {
return section.section;
}
}
}
}

}

return null;

};

const [openSection, setOpenSection] = useState<string | null>(null);

useEffect(() => {
setOpenSection(findActiveSection());
}, [pathname]);

const toggleSection = (section: string) => {
setOpenSection(openSection === section ? null : section);
};

const width = collapsed ? "w-20" : "w-[250px]";

return (

<aside className={`${width} bg-[#0B1F3A] text-white h-screen flex flex-col transition-all duration-300`}>

{/* LOGO */}

<div className="flex items-center gap-3 px-4 py-5 border-b border-blue-900">

<Image
src="/images/logo-royal.png"
width={32}
height={32}
alt="Royal Public School"
/>

{!collapsed && ( <span className="font-semibold text-lg whitespace-nowrap">
RPS ERP </span>
)}

</div>

{/* MENU */}

<nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">

{filteredMenu.map((section) => {

const Icon = iconMap[section.icon] || LayoutDashboard;
const open = openSection === section.section;

return (

<div key={section.section}>

{/* SECTION BUTTON */}

<button
onClick={() => toggleSection(section.section)}
className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-900 transition"

>

<div className="flex items-center gap-3">

<Icon className="w-4 h-4" />

{!collapsed && ( <span className="text-[13px]">
{section.section} </span>
)}

</div>

{!collapsed && (
<ChevronDown
className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
/>
)}

</button>

{/* ITEMS */}

{!collapsed && open && section.items && (

<div className="ml-7 mt-1 space-y-1">

{section.items.map((item) => {

const active =
pathname === item.href ||
pathname.startsWith(item.href + "/");

return (

<Link
key={item.label}
href={item.href}
className={`block py-1 text-[13px] ${
active
? "text-white font-medium"
: "text-blue-200 hover:text-white"
}`}
>
{item.label}
</Link>

);

})}

</div>

)}

{/* GROUPS */}

{!collapsed && open && section.groups && (

<div className="ml-5 mt-2 space-y-3">

{section.groups.map((group) => (

<div key={group.title}>

<p className="text-[11px] uppercase text-blue-400 mb-1">
{group.title}
</p>

<div className="ml-3 space-y-1">

{group.items.map((item) => {

const active =
pathname === item.href ||
pathname.startsWith(item.href + "/");

return (

<Link
key={item.label}
href={item.href}
className={`block py-1 text-[13px] ${
active
? "text-white font-medium"
: "text-blue-200 hover:text-white"
}`}
>
{item.label}
</Link>

);

})}

</div>

</div>

))}

</div>

)}

</div>

);

})}

</nav>

</aside>

);

}
