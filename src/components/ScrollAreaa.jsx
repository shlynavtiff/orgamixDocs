import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

const ScrollAreaa = () => {
    return (
        <div>
            <div className="w-64 border-r bg-background">
                <ScrollArea className="h-screen">
                    <div className="pr-4 space-y-4 py-4  flex justify-center  flex-col"> 
                        <div className="flex items-center px-2">
                            <div className="font-semibold">Getting Started</div>
                        </div>
                        <nav className=" text-left">
                            <a
                                href="#"
                                className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                            >
                                Installation
                            </a>
                            <a
                                href="#"
                                className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                            >
                                Components
                            </a>
                            <a
                                href="#"
                                className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                            >
                                Themes
                            </a>
                        </nav>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default ScrollAreaa