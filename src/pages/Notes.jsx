import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import Notes1 from "../assets/Notes/notes1.png"
import Notes2 from "../assets/Notes/notes2.png"
import Notes3 from "../assets/Notes/notes3.png"

const Notes = () => {
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
            <Directory location="Notes" />
            <h1 className="text-4xl font-bold mb-4">Notes</h1>
            <section id="#new-Tasks">
              <h2 className="text-2xl font-semibold">Features</h2>
              <h2 className="text-lg  font-semibold">1. See Notes: Access all your notes.</h2>
              <img className="" src={Notes1} alt="" />
              <h2 className="text-lg  font-semibold">2. Search Notes: Find notes by title or sort them by creation date or alphabetically.              </h2>
              <img src={Notes3} alt="" />
            </section>

            <section className="mt-6" id="#features">
              <h2 className="text-lg font-semibold mb-2">
                3. Creating New Notes
              </h2>
              <ul className="list-disc ml-6 mb-2">
                <li>Title: Name your note.</li>
                <li>Category: Assign a category.</li>
                <li>Custom font Sizes and Styles: Personalize your notes.</li>
                <li>Text Formatting Options: Add bold, italics, underline, or line-through styles.</li>
              </ul>
              <img src={Notes2} alt="" />
            </section>

            <section className="mt-6">
              <p>Notes can be shared directly with other users, allowing for collaboration and feedback. You can also link notes to tasks or projects for better context and reference.</p>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/tasks" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Tasks</a>

                <a href="/testing/goals" className="flex flex-row items-center justify-center"> Goals <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
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

export default Notes