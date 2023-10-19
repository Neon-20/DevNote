import Heading from "./_components/heading";
import Heroes from "./_components/heroes";

const MarketingPage = () => {
    return(
        <div className="min-h-full flex flex-col">
        <div className="flex flex-col text-center gap-y-8 items-center justify-center px-6 pb-10
        md:justify-start flex-1">
        <Heading/>
        <Heroes/>
        </div>
        </div>
    )
}

export default MarketingPage;