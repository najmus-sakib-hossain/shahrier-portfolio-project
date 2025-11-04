import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { motion } from "motion/react";
import { useRef } from "react";

const LOGOS = [
    { id: 1, name: "ICT Olympiad", path: "assets/ict-olympiad-bangladesh.png" },
    { id: 2, name: "Nexfly", path: "assets/nex-fly.png" },
    { id: 3, name: "Mechanix", path: "assets/mechanix.png" },
    { id: 4, name: "NexAcademy", path: "assets/nex-academy.png" },
    { id: 5, name: "MindShopper", path: "assets/mindshaper.png" },
    { id: 6, name: "NEX Real Estate", path: "assets/nex-real-estate.png" },
    { id: 7, name: "NexSports", path: "assets/nex-sports.png" },
    { id: 8, name: "Brand", path: "assets/my-brand-story.png" },
]

const Home = () => {
    const timeoutRef = useRef<number | null>(null);

    return (
        <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden">

            <div className="max-w-7xl absolute top-8 md:top-16 px-8 w-full z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
                    {LOGOS.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center justify-center p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                        >
                            <img src={logo.path} alt={logo.name} className="w-24 h-12 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-7xl md:text-[150px] lg:text-[200px] font-bold text-muted-foreground select-none whitespace-nowrap z-10">
                    SHAHRIAR
                </h1>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-muted-foreground/50 to-transparent" />

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
            />

            <motion.button onClick={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                    window.location.href = '/dashboard';
                } else {
                    timeoutRef.current = setTimeout(() => {
                        window.location.href = '/home';
                        timeoutRef.current = null;
                    }, 300) as any;
                }
            }} className="border absolute bottom-4 py-4 px-8 bg-background text-foreground hover:bg-muted font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl z-30">
                Play Now
            </motion.button>

            <img src="assets/shahrier.png" alt="Shahrier" className="absolute bottom-0 h-[60vh] max-h-[75vh] lg:h-[750px] object-cover z-20" />

        </div>
    );
};

export default Home;