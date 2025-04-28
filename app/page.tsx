import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ChevronRight, Building2, Droplet, Factory, Atom as Atoms } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden hero-pattern">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="gradient-heading mb-6">
                Innovative Heat Exchange Solutions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                Engineering excellence in thermal management for a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image 
                src="https://images.pexels.com/photos/9325846/pexels-photo-9325846.jpeg" 
                alt="Industrial heat exchanger" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl object-cover animate-fade-in"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-muted/50">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="mb-4">Industry Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge heat transfer technology customized for specific industry requirements.
            </p>
          </div>
          
          <Tabs defaultValue="energy" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="energy" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>Energy</span>
                </TabsTrigger>
                <TabsTrigger value="food" className="flex items-center gap-2">
                  <Droplet className="h-4 w-4" />
                  <span>Food & Beverage</span>
                </TabsTrigger>
                <TabsTrigger value="hvac" className="flex items-center gap-2">
                  <Factory className="h-4 w-4" />
                  <span>HVAC</span>
                </TabsTrigger>
                <TabsTrigger value="chemical" className="flex items-center gap-2">
                  <Atoms className="h-4 w-4" />
                  <span>Chemical</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="energy">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image 
                    src="https://images.pexels.com/photos/2581269/pexels-photo-2581269.jpeg" 
                    alt="Energy industry solution" 
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="mb-4">Energy Industry Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Our advanced heat exchangers optimize energy transfer in power plants, 
                    renewable energy facilities, and oil & gas operations, enhancing efficiency 
                    while reducing environmental impact.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Power plant cooling systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Heat recovery units for turbines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Geothermal heat exchange solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Oil refinery process cooling</span>
                    </li>
                  </ul>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="food">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image 
                    src="https://images.pexels.com/photos/1267357/pexels-photo-1267357.jpeg" 
                    alt="Food industry solution" 
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="mb-4">Food & Beverage Industry Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Our hygienic heat exchangers are designed for the food and beverage industry,
                    meeting the highest standards of sanitization while providing efficient thermal 
                    processing for production lines.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Pasteurization and sterilization units</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Brewery cooling systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Dairy processing equipment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Hygienic plate heat exchangers</span>
                    </li>
                  </ul>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hvac">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image 
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" 
                    alt="HVAC industry solution" 
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="mb-4">HVAC Industry Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Our HVAC heat exchangers and air handlers provide efficient climate control
                    for buildings of all sizes, from residential complexes to commercial
                    skyscrapers and industrial facilities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Air-to-air heat exchangers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Cooling coils for air handling units</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>District heating systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Energy recovery ventilators</span>
                    </li>
                  </ul>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="chemical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image 
                    src="https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg" 
                    alt="Chemical industry solution" 
                    width={600} 
                    height={400} 
                    className="rounded-lg object-cover h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="mb-4">Chemical Industry Solutions</h3>
                  <p className="text-muted-foreground mb-6">
                    Our specialized heat exchangers for the chemical industry are designed 
                    to handle corrosive materials, high temperatures, and extreme pressures
                    while maintaining maximum efficiency and safety.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Corrosion-resistant heat exchangers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Process cooling for chemical reactions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>High-pressure shell & tube exchangers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Pharmaceutical grade heat exchangers</span>
                    </li>
                  </ul>
                  <Button>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most innovative heat exchange solutions designed for maximum efficiency and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/680987/pexels-photo-680987.jpeg"
                    alt="Plate heat exchanger"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>
                <CardTitle className="mt-4">Plate Heat Exchangers</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  High-efficiency plate heat exchangers with modular design for various industrial applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/175690/pexels-photo-175690.jpeg"
                    alt="Shell and tube heat exchanger"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>
                <CardTitle className="mt-4">Shell & Tube Exchangers</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  Robust shell and tube heat exchangers designed for high-pressure and high-temperature processes.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
                    alt="Air fin cooler"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>
                <CardTitle className="mt-4">Air Fin Coolers</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">
                  Energy-efficient air fin coolers for process cooling applications with low maintenance requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4">Ready to Optimize Your Heat Transfer Systems?</h2>
              <p className="text-lg mb-6 text-primary-foreground/90 max-w-lg">
                Our engineers are ready to help you select the perfect heat exchange solution for your specific requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Request a Consultation
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <Image 
                src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg" 
                alt="Engineering team" 
                width={500} 
                height={300} 
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}