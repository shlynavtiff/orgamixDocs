import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import SeeGoals from "../assets/Goals/SeeGoals.png"
import Template from "../assets/Goals/ttt.png"
import Create from "../assets/Goals/Create.png"

const Goals = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen max-w-[1200px] mx-auto">
      {/* Sidebar - Collapsible */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-x-[1px] border-[#414141] p-4 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:block`}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h1 className="font-semibold text-lg">sdasd</h1>
          <button onClick={() => setSidebarOpen(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <MalopitNaSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Main Content */}
        <div className="flex-1 flex ">
          <main className="flex-1 p-4 md:p-6">
            <Directory location="Goals" />
            <h1 className="text-4xl font-bold mb-4">Goals</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg ">Easily create, edit, and organize you goals in this section to streamline progress and personal development. The <strong>Goals</strong> section
                helps you visualize your ambitions and track steps towards achieving them.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-semibold">1. See Goals: View all goals , sorted by status or category.</h2>
              <h2 className="text-lg font-semibold">2. Search and Sort Goals: By creation date, title, status (in progress, completed, failed), or category.              </h2>
              <img src={SeeGoals} alt="" />

            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">3. Choose or Create Goal Templates: Start from scratch or use predefined templates</h2>
              <img src={Template} alt="" />
            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">4. Creating New Goals</h2>
              <p> Add the following:</p>
              <ul className="list-disc ml-6 mb-2">
                <li>Title: Define your goal. </li>
                <li>Description: Provide more context.</li>
                <li>Category: Assign a category for easy tracking.</li>
                <li>Deadline: Set a completion date</li>
                <li>Subtasks: Add, edit, or remove smaller tasks associated with the goal.</li>
                <li>Habit and Repetition: Create habits and set repetition schedules.</li>
              </ul>
              <img src={Create} alt="" />
            </section>

            <section className="mt-6">
              <p>The goal tracker provides detailed insights into your progress with visual charts and graphs. Track time spent on goals and get automated reminders to stay on track.              </p>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/notes" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Notes</a>

                <a href="/testing/projects" className="flex flex-row items-center justify-center"> Projects <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path
                    d="m9 18 6-6-6-6"></path></svg></a>
              </div>
            </section>

          </main>


          {/* Table of Contents */}
          <aside className="hidden lg:block w-64 border-x-[1px] border-[#414141] p-6">
            <div className="top-20">
              <h4 className="text-sm font-semibold mb-4">On This Page</h4>
              <nav className="space-y-2 text-sm">
                <Link
                  to="#categories"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Create Project
                </Link>
                <Link
                  to="#features"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Run the CLI
                </Link>
                <Link
                  to="#configure"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Configure components.json
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Goals