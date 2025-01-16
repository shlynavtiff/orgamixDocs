import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import Notifications1 from "../assets/Notifications/123123.png"

const Notifications = () => {
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
            <Directory location="Notifications" />
            <h1 className="text-4xl font-bold mb-4">Notifications</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg "> Stay informed with <strong>real-time notifications</strong> designed to keep you updated and organized.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-bold">Features:</h2>
              {/* <p>Organize you notes under the following categories:</p> */}
              <ul className="list-disc ml-6">
                <li><strong>Receive alerts for:</strong></li>
                <ul className="list-disc ml-6">
                  <li>Upcoming task deadlines.</li>
                  <li>Project updates and new messages.</li>
                  <li>Goal progress reminders.</li>
                  <li>AI-generated suggestions.</li>
                </ul>
                <li><strong>Customizable Alerts:</strong>Choose which notifications to receive and how often.</li>
                <li><strong>Activity Feed:</strong>Access all past notifications in a chronological list.</li>
              </ul>
            </section>

            <section className="mt-6" id="#features">
              <img src={Notifications1} alt="" />
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/ask-ai" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Ask AI </a>

                <a href="/testing/settings" className="flex flex-row items-center justify-center"> Settings <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path
                    d="m9 18 6-6-6-6"></path></svg></a>
              </div>
            </section>

            {/* <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">Using the timer</h2>
              <ul className="list-disc ml-6">
                <li>Start a session by selecting a task.</li>
                <li>Work during the focus period until the timer ends.</li>
                <li>Take a short break, and repeat.</li>
                <li>After multiple sessions, take a longer break to recharge.</li>
              </ul>
            </section> */}


          </main>

          {/* Table of Contents */}

        </div>
      </div>
    </div>
  );
}

export default Notifications