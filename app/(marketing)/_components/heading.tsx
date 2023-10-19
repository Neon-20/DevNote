
"use client";

import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const Heading = () =>{
    return(
    <div className="max-w-3xl space-y-4">
    <h1 className="font-bold font-sans text-3xl sm:text-5xl md:text-6xl
    ">
    Your ideas in form of notes at one place.
    <span className="underline">DevNote</span> 
    </h1>
    <h3 className="text-base sm:text-xl md:text-2xl font-medium font-sans">
    DevNote is the best place for Devs <br/>
    to work efficiently.
    </h3>
    <Button className="hover:bg-purple-400 translate">
        Enter DevNote
    <ArrowRight className="w-4 h-4 ml-2 hover:translate-x-0.5"/>
    </Button>
    </div>
    );
}

export default Heading;