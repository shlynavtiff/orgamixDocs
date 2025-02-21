import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";


const Dashboard = () => {
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
            <Directory location="Dashboard" />
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg "> The <strong>Dashboard</strong> serves as the central hub for an overview of your tasks, projects, and activities.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-semibold">Features</h2>
              {/* <p>Organize you notes under the following categories:</p> */}
              <ul className="list-disc ml-6">
                <li><strong>See Tasks:</strong> View all pending and completed tasks in one place.</li>
                <li><strong>See Notes:</strong> Access all your notes conviently.</li>
                <li><strong>See Goals:</strong> Monitor ongoing, completed, or upcoming goals.</li>
                <li><strong>See Projects:</strong> Quickly check all your projects and their status.</li>

                <li><strong>Tasks for Today and Tomorrow:</strong>  Focus on immediate priorities by viewing today’s and tomorrow’s tasks.</li>
                <li><strong>Weekly Activity:</strong> Visualize your overall activity trends throughout the week.</li>
                <li><strong>Project Activity Summary:</strong> Monitor the activity of projects you are part of.</li>
                <li><strong>Recent Notifications:</strong> Stay informed with notifications and access a full notification history.</li>
              </ul>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Notes</a>

                <a href="/testing/tasks" className="flex flex-row items-center justify-center"> Projects <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path
                    d="m9 18 6-6-6-6"></path></svg></a>
              </div>
            </section>



          </main>


        </div>
      </div>
    </div>
  );
}

export default Dashboard