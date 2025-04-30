import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-6">
      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-bold text-2xl text-primary mb-6 inline-block">
               Growlit <span className="text-orange-500">Enterprises</span> 
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
               Growlit Enterprises is one of the leading global manufacturers of heat exchangers
              and has been providing solutions for almost every industrial application
              since the 2015s.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-base mb-4">Products</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/products/" className="text-muted-foreground hover:text-primary transition-colors">
                  Heat Exchangers
                </Link>
              </li>
              <li>
                <Link href="/products/" className="text-muted-foreground hover:text-primary transition-colors">
                  Air Heat Exchangers
                </Link>
              </li>
              <li>
                <Link href="/products/" className="text-muted-foreground hover:text-primary transition-colors">
                  Refrigeration
                </Link>
              </li>
              <li>
                <Link href="/products/" className="text-muted-foreground hover:text-primary transition-colors">
                  System Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-base mb-4">Industries</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  HVAC
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Chemical
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Marine
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-base mb-4">Stay Updated</h5>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="max-w-xs"
              />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Growlit Enterprises. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link href="/#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}