// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { ThemeToggle } from "@/components/theme-toggle";
// import { Menu, ChevronDown, Search } from "lucide-react";
// import { useSession } from "next-auth/react";
// import { UserNav } from "@/components/user-nav";
// import { useRouter } from "next/navigation";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// const mainNav = [
//   {
//     id: "Home",
//     title: "Home",
//     href: "/",
//   },
//   {
//     id: "products",
//     title: "Products",
//     href: "/products",
//     children: [
//       {
//         title: "Products",
//         href: "/products",
//         description:
//           "Efficient heat exchange solutions for various industrial applications",
//       },
//       {
//         title: "Gasketed Plate Heat Exchangers",
//         href: "/products/gasketedPlateHeatExchangers",
//         description: "Advanced gasketed and heating systems for commercial use",
//       },
//     ],
//   },

//   {
//     id: "services",
//     title: "Spares & Services",
//     href: "/services/spare-parts",
//   },
//   // {
//   //   title: "About",
//   //   href: "/about",
//   //   children: [
//   //     {
//   //       title: "Company",
//   //       href: "/about/company",
//   //       description: "Learn about our history, mission, and values",
//   //     },
//   //     {
//   //       title: "Sustainability",
//   //       href: "/about/sustainability",
//   //       description: "Our commitment to environmental responsibility",
//   //     },
//   //     {
//   //       title: "Careers",
//   //       href: "/about/careers",
//   //       description: "Join our team and explore job opportunities",
//   //     },
//   //     {
//   //       title: "News",
//   //       href: "/about/news",
//   //       description: "Latest updates and press releases",
//   //     },
//   //   ],
//   // },

//   {
//     id: "industries",
//     title: "Industries",
//     href: "/industries",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//     href: "/contact",
//   },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();
//   const { data: session } = useSession();
//   const [active, setActive] = useState("");

//   const router = useRouter()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 w-full transition-all duration-300",
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       )}
//     >
//       <div className="container-fluid">
//         {/* <div  className="flex justify-around"> 
//         <span className="text-muted-foreground"> Phone:  {process.env.GMAIL_ID}</span>
//         <span className="text-muted-foreground"> Phone:  {process.env.MOBILE_NUMBER}</span>
        
//         </div> */}
//         <div className="flex h-16 items-center justify-between py-12">
//           <div className="w-full flex items-center gap-6 md:gap-10">
//             <Link href="/" className="flex-[2.5] font-bold text-2xl text-primary">
//               Growlit <span className="text-orange-500">Enterprises</span>
//             </Link>
//             <nav className="hidden lg:flex justify-center items-center flex-[5] gap-6">
//               <NavigationMenu>
//                 <NavigationMenuList>
//                   {mainNav.map((item) => (
//                     <NavigationMenuItem key={item.title}>
//                       {item.children ? (
//                         <>
//                           <NavigationMenuTrigger
//                             className={cn(
//                               "text-base font-medium whitespace-nowrap",
//                               pathname.startsWith(item.href) && "text-primary"
//                             )}
//                           >
//                             {item.title}
//                           </NavigationMenuTrigger>
//                           <NavigationMenuContent>
//                             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                               {item.children.map((child) => (
//                                 <li key={child.title}>
//                                   <NavigationMenuLink asChild>
//                                     <Link
//                                       href={child.href}
//                                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                     >
//                                       <div className="text-sm font-medium leading-none">
//                                         {child.title}
//                                       </div>
//                                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                                         {child.description}
//                                       </p>
//                                     </Link>
//                                   </NavigationMenuLink>
//                                 </li>
//                               ))}
//                             </ul>
//                           </NavigationMenuContent>
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href}
//                           className={cn(
//                             "text-base whitespace-nowrap font-medium transition-colors hover:text-primary rounded-md hover:bg-orange-500 flex items-center h-10 px-4",
//                             pathname === item.href
//                               ? "text-primary bg:orange-500"
//                               : "text-foreground bg:orange-500 "
//                           )}
//                         >
//                           {item.title}
//                         </Link>
//                       )}
//                     </NavigationMenuItem>
//                   ))}
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </nav>

//             <div className="flex items-center justify-end flex-[2.5] gap-2">
//               {/* <Button variant="ghost" size="icon" aria-label="Search">
//               <Search className="h-5 w-5" />
//             </Button> */}
//               <ThemeToggle />
//               <Sheet>
//                 <SheetTrigger asChild>
//                   <Button variant="ghost" size="icon" className="lg:hidden">
//                     <Menu className="h-5 w-5" />
//                     <span className="sr-only">Toggle menu</span>
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent side="right">
//                   <div className="grid gap-6 py-6">
//                     <Link href="/" className="font-bold text-2xl text-primary">
//                       Growlit{" "}
//                       <span className="text-orange-500">Enterprises</span>
//                     </Link>
//                     <nav className="grid gap-3">
//                       {mainNav.map((item) => (
//                         <div key={item.title}>
//                           <button
//                             // href={item.href}
//                             onClick={
//                               router.push(item.href)

//                             }
//                             className={cn(
//                               "flex items-center justify-between py-2 text-base font-medium transition-colors hover:text-primary",
//                               pathname === item.href ||
//                                 pathname.startsWith(item.href)
//                                 ? "text-primary"
//                                 : "text-foreground"
//                             )}
//                           >
//                             {item.title}
//                             {item.children && (
//                               <ChevronDown className="h-4 w-4" />
//                             )}
//                           </button>
//                           {item.children && (
//                             <div className="ml-4 mt-1 grid gap-1">
//                               {item.children.map((child) => (
//                                 <Link
//                                   key={child.title}
//                                   href={child.href}
//                                   className={cn(
//                                     "py-1 text-sm transition-colors hover:text-primary",
//                                     pathname === child.href
//                                       ? "text-primary"
//                                       : "text-muted-foreground"
//                                   )}
//                                 >
//                                   {child.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </nav>
//                   </div>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, ChevronDown, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { UserNav } from "@/components/user-nav";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const mainNav = [
  {
    id: "Home",
    title: "Home",
    href: "/",
  },
  {
    id: "products",
    title: "Products",
    href: "/products",
    children: [
      {
        title: "Products",
        href: "/products",
        description: "Efficient heat exchange solutions for various industrial applications",
      },
      {
        title: "Gasketed Plate Heat Exchangers",
        href: "/products/gasketedPlateHeatExchangers",
        description: "Advanced gasketed and heating systems for commercial use",
      },
    ],
  },
  {
    id: "services",
    title: "Spares & Services",
    href: "/services/spare-parts",
  },
  {
    id: "industries",
    title: "Industries",
    href: "/industries",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sheet when path changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-fluid">
        <div className="flex h-16 items-center justify-between py-12">
          <div className="w-full flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex-[3] font-bold text-2xl text-primary">
              Growlit <span className="text-orange-500">Enterprises</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center items-center flex-[5] gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  {mainNav.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger
                            className={cn(
                              "text-base font-medium whitespace-nowrap",
                              pathname.startsWith(item.href) && "text-primary"
                            )}
                          >
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.children.map((child) => (
                                <li key={child.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {child.title}
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {child.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "text-base whitespace-nowrap font-medium transition-colors hover:text-primary rounded-md hover:bg-orange-500 flex items-center h-10 px-4",
                            pathname === item.href
                              ? "text-primary"
                              : "text-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-end flex-[2] gap-2">
              <ThemeToggle />
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="grid gap-6 py-6">
                    <Link href="/" className="font-bold text-2xl text-primary">
                      Growlit <span className="text-orange-500">Enterprises</span>
                    </Link>
                    <nav className="grid gap-3">
                      {mainNav.map((item) => (
                        <div key={item.title}>
                          {item.children ? (
                            <>
                              <SheetClose asChild>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-center justify-between py-2 text-base font-medium transition-colors hover:text-primary",
                                    pathname === item.href || pathname.startsWith(item.href)
                                      ? "text-primary"
                                      : "text-foreground"
                                  )}
                                >
                                  {item.title}
                                  <ChevronDown className="h-4 w-4" />
                                </Link>
                              </SheetClose>
                              <div className="ml-4 mt-1 grid gap-1">
                                {item.children.map((child) => (
                                  <SheetClose key={child.title} asChild>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        "py-1 text-sm transition-colors hover:text-primary",
                                        pathname === child.href
                                          ? "text-primary"
                                          : "text-muted-foreground"
                                      )}
                                    >
                                      {child.title}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </>
                          ) : (
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex items-center justify-between py-2 text-base font-medium transition-colors hover:text-primary",
                                  pathname === item.href || pathname.startsWith(item.href)
                                    ? "text-primary"
                                    : "text-foreground"
                                )}
                              >
                                {item.title}
                              </Link>
                            </SheetClose>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}