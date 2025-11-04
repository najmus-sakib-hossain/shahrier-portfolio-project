import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const LOGOS = [
    { id: 1, name: "ICT Olympiad", size: "h-8" },
    { id: 2, name: "Nexfly", size: "h-8" },
    { id: 3, name: "Mechanix", size: "h-8" },
    { id: 4, name: "NexAcademy", size: "h-8" },
    { id: 5, name: "MindShopper", size: "h-8" },
    { id: 6, name: "NEX Real Estate", size: "h-8" },
    { id: 7, name: "NexSports", size: "h-8" },
    { id: 8, name: "Brand", size: "h-8" },
]

const Home = () => {
    return (
        <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden">

            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Background gradient overlay */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-20" />
            </div>

            {/* Logo Grid - Top Section */}
            <div className="relative z-10 px-8 pt-12 md:pt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
                        {LOGOS.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-800/20 transition-colors duration-300"
                            >
                                <div className="w-24 h-12 bg-gray-700/40 rounded flex items-center justify-center text-gray-400 text-sm font-medium">
                                    {logo.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content - Center Section */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-9xl md:text-[200px] font-bold text-gray-700/15 select-none whitespace-nowrap">
                        SHAHDIAR
                    </h1>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8 px-4">
                    {/* Portrait Image - Placeholder */}
                    <div className="relative w-64 h-80 md:w-72 md:h-96">
                        <div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-800 border border-gray-700/50">
                            <img
                                src="/professional-portrait-man-business.jpg"
                                alt="Featured Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Subtle shadow effect */}
                        <div className="absolute -bottom-2 -right-2 w-full h-full rounded-lg bg-gradient-to-tr from-gray-900 to-transparent opacity-50 -z-10" />
                    </div>

                    {/* Call-to-Action Button */}
                    <Button className="mt-8 px-16 py-7 bg-white text-gray-900 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        Play Now
                    </Button>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
            />
        </div>


        // <div className="relative flex-col bg-black min-h-screen text-[#272121] flex items-center justify-center overflow-hidden">
        //     <span className="text-8xl font-bold">SHAHRIER</span>
        //     <img src="assets/shahrier.png" alt="Shahrier" className="absolute bottom-0" />
        //     <img src="assets/csg.png" alt="CSG" className="absolute top-0" />
        //     <img src="assets/huecell.png" alt="Huecell" className="absolute top-0" />
        //     <img src="assets/ict-olympiad-bangladesh.png" alt="ICT Olympiad Bangladesh" className="absolute top-0" />
        //     <img src="assets/mechanix.png" alt="Mechanix" className="absolute top-0" />
        //     <img src="assets/mindshaper.png" alt="Mindshaper" className="absolute top-0" />
        //     <img src="assets/my-brand-story.png" alt="My Brand Story" className="absolute top-0" />
        //     <img src="assets/nex-sports.png" alt="Nex Sports" className="absolute top-0" />
        //     <img src="assets/nex-academy.png" alt="Nex Academy" className="absolute top-0" />
        //     <img src="assets/nex-real-estate.png" alt="Nex Real Estate" className="absolute top-0" />
        //     <img src="assets/nex-fly.png" alt="Nex Fly" className="absolute top-0" />

        //     <Button className="absolute bottom-4" variant="outline" size={"lg"} onClick={() => router.visit('/home')}>Play Now</Button>
        // </div>
    );
};

export default Home;