import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";

const AskAI = () => {
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
            <Directory location="Ask AI" />
            <h1 className="text-4xl font-bold mb-4">Ask AI</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg "> The <strong>Ask AI</strong> feature harnesses the power of artificial intelligence to assist you with prodctivity, creativity, and decision-making.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-bold">Features</h2>
              {/* <p>Organize you notes under the following categories:</p> */}
              <ul className="list-decimal ml-6">
                <li><strong>Analytics</strong> </li>
                <ul className="list-disc ml-6">
                  <li>Gain insights into your productivity trends</li>
                  <li>Visualize task completion rates, goals progress, and project efficiency.</li>
                </ul>
                <li><strong>Generate Project Ideas</strong> </li>
                <ul className="list-disc ml-6">
                  <li>Receive AI-powered suggestions for innovative project concepts.</li>
                  <li>Tailor ideas based on themes or objectives you specify.</li>
                </ul>
                <li><strong>Generate Task Ideas</strong></li>
                <ul className="list-disc ml-6">
                  <li>Get task recommendations to match current goals or projects.</li>
                  <li>Break down larger goals into actionable task steps.</li>
                </ul>
                <li><strong>Generate Goal Ideas</strong></li>
                <ul className="list-disc ml-6">
                  <li>Let AI suggest personal or professional goals based on your focus areas.</li>
                </ul>
                <li><strong>Smart Reports</strong></li>
                <ul className="list-disc ml-6">
                  <li>Receive weekly or monthly AI-generated performance summaries.</li>
                </ul>
              </ul>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/deadline" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Deadline </a>

                <a href="/testing/Notifications" className="flex flex-row items-center justify-center"> Notifications <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
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

export default AskAI