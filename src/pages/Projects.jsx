import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import SeeProjects from "../assets/Projects/wasd.png"

const Projects = () => {
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
        <div className="flex-1 flex">
          <main className="flex-1 p-4 md:p-8">
            <Directory location="Projects" />
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg ">The <strong>Projects</strong> section provies robust tools for planning, managing, and collaborating on projects of any size.
              </h2>
            </section>

            <section className="mt-6" id="#">
              <p>Managing Projects</p>

            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-semibold">1. See Projects: Access all your projects.</h2>
              <h2 className="text-lg font-semibold">2. See Favorite Projects: Pin your most important projects for easy access.</h2>
              <h2 className="text-lg font-semibold">3. Search Projects: Quickly locate specific projects.</h2>
              <img src={SeeProjects} alt="" />
              {/* <p>Organize you notes under the following categories:</p> */}

            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">Kanban Boards</h2>
              <ul className="list-disc ml-6">
                <li>Organize and visualize tasks with Kanban boards.</li>
                <li>Add, move, and manage task cards within customizable columns (e.g., To Do, In Progress, Done).</li>
                <li>Assign tasks to team members with deadlines.</li>
              </ul>
            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">Whiteboard / Drawing</h2>
              <ul className="list-disc ml-6">
                <li>Use a virtual whiteboard to brainstorm and ideas, plan workflows, or create visual diagrams.</li>
                <li>Draw freehand, add shapes, and use text tools to create a collaborative workspace.</li>
                <li>Collaborate in real-time with team members.</li>
              </ul>
            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">Projects Overview</h2>
              <ul className="list-disc ml-6">
                <li>View a summary of tasks, deadlines, and progress for each project.</li>
                <li>Use a project-specific analytics to monitor timelines and team productivity.</li>
              </ul>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/goals" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Goals </a>

                <a href="/testing/pomodoro" className="flex flex-row items-center justify-center"> Pomodoro <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
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

export default Projects