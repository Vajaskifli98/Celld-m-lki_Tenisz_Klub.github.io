import { Button } from "./ui/button"
import { ChevronRight, Play } from "lucide-react"
export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="relative bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80')" }}
                >
                    <div className="absolute inset-0 bg-primary/40" />
                </div>
                <div
                    className="relative bg-cover bg-center hidden md:block"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80')" }}
                >
                    <div className="absolute inset-0 bg-primary/30" />
                </div>
                <div
                    className="relative bg-cover bg-center hidden lg:block"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80')" }}
                >
                    <div className="absolute inset-0 bg-primary/20" />
                </div>
            </div>
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-3xl">
                    <p className="tracking-widest text-primary-foreground/80 text-sm mb-4">Celldömölk prémium tenisz klubja</p>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight mb-8">
                        <span className="block">Celldömölki</span>
                        <span className="block">Tenisz</span>
                        <span className="block">Club</span>
                    </h1>
                    <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                        Fedezd fel a tenisz örömét világszínvonalú létesítményeinkben. Professzionális edzők, modern pályák és egy befogadó közösség vár rád.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size={"lg"} variant="ghost" className="text-white rounded-xl border border-border "> Pályafoglalás <ChevronRight /></Button>
                        <Button size={"lg"} className="rounded-xl bg-background text-foreground hover:bg-background/90 px-8">Nézd meg a klubot <Play /> </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-background py-4 overflow-hidden">
                <div className="animate-scroll whitespace-nowrap">
                    <span className="inline-block px-8 text-muted-foreground text-sm tracking-widest">
                        TENISZ • SQUASH • PADEL • EDZÉSEK • VERSENYEK • KÖZÖSSÉG • TENISZ • SQUASH • PADEL • EDZÉSEK • VERSENYEK • KÖZÖSSÉG •
                    </span>
                    <span className="inline-block px-8 text-muted-foreground text-sm tracking-widest">
                        TENISZ • SQUASH • PADEL • EDZÉSEK • VERSENYEK • KÖZÖSSÉG • TENISZ • SQUASH • PADEL • EDZÉSEK • VERSENYEK • KÖZÖSSÉG •
                    </span>
                </div>
            </div>

        </section>
    )
}