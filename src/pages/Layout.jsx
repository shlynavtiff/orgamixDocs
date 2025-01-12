import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GithubIcon, MoonIcon } from "lucide-react"
import ScrollAreaa from '../components/ScrollAreaa'

const Layout = ({ children }) => {
    return (
        <div className='mx-auto'>
            <div className="flex min-h-screen 640px md:[768px] lg:[1024px] xl:[1280px] 2xl:[1536px] ">
                {/* Left Sidebar */}
                <div className='hidden md:block'>
                    <ScrollAreaa />

                </div>


                {/* Main Content */}
                <div className="flex-1">


                    <div className="flex">
                        <main className="flex-1 max-w-3xl px-6 py-8">{children}
                            <div>
                                <h1>taingianasfgiansg</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim? Accusamus itaque mollitia fuga harum animi doloribus. Deleniti quas voluptas sed sunt nesciunt officiis temporibus molestias quasi sequi ratione. Error!
                                </p>
                                <div>
                                    <h2>tanigna</h2>
                                    <p>
                                        lorem
                                    </p>
                                </div>
                            </div>
                        </main>

                        {/* Right Sidebar - Table of Contents */}
                        <div className="w-64 hidden lg:block p-8">
                            <div className="sticky top-20">
                                <h4 className="text-sm font-medium mb-4">On This Page</h4>
                                <nav className="text-sm">
                                    <a
                                        href="#create-project"
                                        className="block text-muted-foreground hover:text-foreground py-1"
                                    >
                                        Create project
                                    </a>
                                    <a
                                        href="#run-cli"
                                        className="block text-muted-foreground hover:text-foreground py-1"
                                    >
                                        Run the CLI
                                    </a>
                                    <a
                                        href="#configure"
                                        className="block text-muted-foreground hover:text-foreground py-1"
                                    >
                                        Configure components.json
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout