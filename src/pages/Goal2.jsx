import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";

const Goal2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen max-w-[1520px] mx-auto">
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
            <Directory location="Ask AI" />
            <h1 className="text-4xl font-bold mb-4">Ask AI</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg "> The <strong>Ask AI</strong> feature harnesses the power of artificial intelligence to assist you with prodctivity, creativity, and decision-making.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-bold">Features</h2>
              {/* <p>Organize you notes under the following categories:</p> */}
              <ul className="list-disc ml-6">
                <li><strong>Unified View:</strong> See all upcoming deadlines in a single view.</li>
                <li><strong>Reminders and Alerts:</strong> Receive notifications for approachign deadlines.</li>
                <li><strong>Integration:</strong> Tasks, goals, and project deadlines automatically sync to this section.</li>
                <li><strong>Calendar View:</strong> Visualize deadlines in a monthly or weekly format for better planning.</li>
              </ul>
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
          <aside className="hidden lg:block w-64 border-x-[1px] border-[#414141] p-6">
            <div className="top-20">
              <h4 className="text-sm font-semibold mb-4">On This Page</h4>
              <nav className="space-y-2 text-sm">
                <Link
                  to="#categories"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Live Chatting
                </Link>
                <Link
                  to="#features"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Kanban Boards
                </Link>
                <Link
                  to="#configure"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Whiteboard / Drawing
                </Link>
                <Link
                  to="#configure"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Projects Overview
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Goal2