import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Home = () => {
    return (
        <div className="bg-background relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border p-20">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
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