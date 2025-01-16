import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "@/components/MalopitNaSidebar";
import Settings1 from "../assets/Settings/Screenshot 2024-12-25 013026.png"


const Settings = () => {
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
            <Directory location="Settings" />
            <h1 className="text-4xl font-bold mb-4">Settings</h1>
            <section id="#new-Tasks">
              <h2 className="text-lg "> The <strong>Settings</strong> section allows you to personalize and optimize the app to suit your preferences.
              </h2>
            </section>

            <section className="mt-6" id="#categories">
              <h2 className="text-lg font-bold">Customizing Your Account</h2>
              {/* <p>Organize you notes under the following categories:</p> */}
              <ul className="list-decimal ml-6">
                <li><strong>Profile Details:</strong></li>
                <ul className="list-disc ml-6">
                  <li>View and update your profile photo and display name.</li>
                </ul>
                <li><strong>Change Password:</strong> Securely update your login credentials.</li>
                <li><strong>Feedback to Developers:</strong> </li>
                <ul className="list-disc ml-6">
                  <li>Provide feedback under these types:</li>
                  <ul className="list-disc ml-6">
                    <li>Bug Report</li>
                    <li>Feature Requests</li>
                    <li>General Feedback</li>
                  </ul>
                  <li>Add a description, attach files, and rate the system.</li>
                </ul>
                <li><strong>Logout:</strong> Safely log out when finished.</li>
              </ul>
              <img src={Settings1} alt="" />
            </section>

            <section className="mt-6" id="#">
              <p>Enjoy using OrgamiX to streamline your tasks, projects, and goals efficiently!</p>
            </section>

            <section className="mt-6">
              <div className="flex flex-row items-center justify-between">

                <a href="/testing/notifications" className="flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
                                lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg> Notifications</a>


              </div>
            </section>


          </main>

          {/* Table of Contents */}

        </div>
      </div>
    </div>
  );
}

export default Settings