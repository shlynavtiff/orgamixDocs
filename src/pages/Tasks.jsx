import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import Pending from "../assets/Tasks/task2.png"
import Completed from "../assets/Tasks/task1.png"
import Task from '../assets/Tasks/task3.png'

export default function DocsLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen max-w-[1200px] mx-auto">
            {/* Sidebar - Collapsible */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-x-[1px] border-[#414141] p-4 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:block`}
            >
                <div className="flex justify-between items-center mb-4 lg:hidden">
                    <h1 className="font-semibold text-lg">shadcn/ui</h1>
                    <button onClick={() => setSidebarOpen(false)}>
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>
                <MalopitNaSidebar />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">

                {/* Main Content */}
                <div className="flex-1 flex">
                    <main className="flex-1 p-4 md:p-6">
                        <Directory location="Tasks" />
                        <h1 className="text-3xl font-bold mb-4">Tasks</h1>
                        <section id="#new-Tasks">
                            <h2 className="text-2xl font-semibold">Features</h2>
                            <h2 className="text-lg  mb-2">1. See Pending Tasks: Review tasks that are yet to be completed.</h2>
                            <img className="" src={Pending} alt="" />
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">2. See Completed Tasks: Track tasks you have accomplished.</h2>
                            <h2 className="text-lg font-semibold mb-2">3. Search Tasks: Find specific tasks quickly.</h2>
                            <h2 className="text-lg font-semibold mb-2">4. Sort Tasks: Arrange tasks by creation date or alphabetically.</h2>
                            <img src={Completed} alt="" />
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">
                                5. Creating New Tasks
                            </h2>
                            <ul className="list-disc ml-6 mb-2">
                                <li>Title: A descriptive name for the task.</li>
                                <li>Description: Add task details.</li>
                                <li>Deadline: Set a completion date.</li>
                                <li>Priority: Assign prioriti levels (e.g., high, medium, low).</li>
                                <li>Repeat: Configure recurring tasks for better organization.</li>
                                <li>Link: Attach relevant resources or references.</li>
                            </ul>
                            <img src={Task} alt="" />
                        </section>

                        <section className="mt-6">
                            <p>Tasks are automatically synced across devices, ensuring that you always have access to your most up-to-date list.
                                Use collaborative task features to assign responsibilities to team members and track progress in real time.</p>

                        </section>

                        <section className="mt-6">
                            <div className="flex flex-row items-center justify-between">

                                <a href="/testing/dashboard" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Dashboard</a>

                                <a href="/testing/notes" className="flex flex-row items-center justify-center"> Notes <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path
                                        d="m9 18 6-6-6-6"></path></svg></a>
                            </div>
                        </section>


                    </main>

                    {/* Table of Contents */}

                </div>
            </div>
        </div>
    );
}
