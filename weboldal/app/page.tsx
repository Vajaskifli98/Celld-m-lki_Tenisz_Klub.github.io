import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/ui/about";
export default function Home() {
  return (
     <main className="min-h-screen">
       <Header />
       <Hero />
       <About />  
     </main>
  );
}
