import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import PomodoroTimer from '@/assets/Pomodoro/Screenshot 2024-12-25 002426.png'
import PomodoroTimer1 from '@/assets/Pomodoro/Screenshot 2024-12-25 002432.png'
const Pomodoro = () => {
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
          <main className="flex-1 p-4 md:p-6">
            <Directory location="Pomodoro" />
            <h1 className="text-4xl font-bold mb-4">Pomodoro</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg ">The <strong>Pomodoro Timer</strong> enhances you focus and productivity by breaking work into intervals with short breaks in between.
                The technique is designed to reduce burnout and improve mental agility.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-bold">Key Features</h2>
              {/* <p>Organize you notes under the following categories:</p> */}
              <ul className="list-disc ml-6">
                <li><strong>Customizable Durations:</strong> Set work sessions (e.g., 25 minutes) and break times (e.g., 5 minutes) according to your preferences</li>
                <li><strong>Task integration:</strong> Link the timer to specific tasks for targeted focus.</li>
                <li><strong>Session Tracking:</strong> Monitor how many Pomodoro sessions you complete in a day or week.</li>
                <li><strong>Progress Reports:</strong> View statistics on productivity, including session durations and total focused time.</li>
              </ul>
            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">Using the timer</h2>
              <img src={PomodoroTimer1} alt="" />
              <img src={PomodoroTimer} alt="" />
              <ul className="list-disc ml-6">
                <li>Search for the tasks or projects you’ll focus on.</li>
                <li>Choose background music for the session.</li>
                <li>Configure timer settings to suit your workflow.</li>
                <li>Take a short break, and repeat.</li>
                <li>After multiple sessions, take a longer break to recharge.</li>
              </ul>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/projects" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Projects </a>

                <a href="/testing/deadline" className="flex flex-row items-center justify-center"> Deadline <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
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

export default Pomodoro