import { title } from "process";

const features = [
    {
        title: "Személyre szabott edzés",
    },
    {
        title: "Modern létesítmények",
    },
    {
        title: "Közösségi események",
    },
    {
        title: "Professzionális edzők"
    }, 
    {
        title: "Versenyek és Tornák"
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div  >
                    <h2 className="pb-12 font-serif text-4xl md:text-3xl xl:text-5xl text-foreground leading-tight">A szenvedélynek  és a <br /> Kiválóságnak szentelve.</h2>
                    <p className="text-muted-foreground leading-relaxed">A Celldömölki Tenisz Klub egy olyan hely, ahol a márkák és az emberek eljönnek, hogy élesítsék képességeiket, fejlesszék technikájukat és kiépítsék a jövőjüket. Segítünk a teniszezőknek megtalálni a hangjukat a pályán és azon kívül is. </p>
                    <p className="pt-12 text-muted-foreground leading-relaxed">Ezért hoztuk létre az Ace Programot™ – egy új módszert a pihenésre, az újratöltődésre és a gondolkodás ösztönzésére, amely nem csak karriereket, hanem teljes életutakat támogat.</p>
                </div>
                <div className="flex flex-col gap-5">

                </div>
            </div>
        </section>
    )
}