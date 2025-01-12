import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Replace with your Button component
import { GithubIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import Directory from "@/components/Directory";
import MalopitNaSidebar from "../components/MalopitNaSidebar";

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
                    <h1 className="font-semibold text-lg"></h1>
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
                        <Directory location="Introduction" />
                        <h1 className="text-3xl font-bold mb-4">Introduction</h1>
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Orgamix Overview</h2>
                            <p className="text-base">
                                Orgamix is a powerful Kanban-based productivity platform that helps individuals and teams organize their work, track progress, and collaborate effectively.
                                With Orgamix, you can create projects, manage tasks, set deadlines, and communicate with team members in real-time. Orgamix is suitable for managing
                                everything from personal to professional projects, offering a centralized hub for streamlined task management, project planning, and workflow optimization.

                            </p>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-2xl font-semibold mb-2">What is Orgamix?</h2>
                            <p>
                                Orgamix combines visual organizartion with cutting-edge features to deliver a robust productivity platform that helps you stay on top of your tasks, projects, and goals.
                                Orgamix leverages the Kanban methodology to break down projects into manageable steps, making it easier to prioritize, track, and complete tasks. Whether you're a
                                solo entrepreneur, a student juggling assignments, or part of a growinng team, Orgamix adapts to your need and provides the tools you need to succeed.
                            </p>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                Key Features
                            </h2>
                            <h2 className="text-lg font-semibold ">
                                1. Intuitive Kanban Boards
                            </h2>
                            <p>
                                Orgamix's Kanban boards are the heart of the platform, allowing you to visualize your tasks, projects, and goals in a clear and organized manner. With customizable columns,
                                you can easily track the progress of your work and move tasks from one stage to another with a simple drag-and-drop.
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Create and edit tasks effortlessly with drag-and-drop functionality.</li>
                                <li>Add labels, tags, and deadlines for better task organization.</li>
                                <li>Use color-coded priorities to quicklu identify items of high importance.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">2. Live Collaboration Tools</h2>
                            <p>Stay connected and coordinated with your team using real-time collaboration features</p>
                            <ul className="list-disc ml-6">
                                <li><strong>Live Chat:</strong> Communicate instantly within the app, ensuring seamless discussions without switching platforms.</li>
                                <li><strong>Comments on Tasks:</strong> Add comments and updates to tasks, so everyone stays informed.</li>
                                <li><strong>Activity Feeds:</strong> Track project changes and user activity to maintain clarity and accountability.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">3. Advanced Project Management</h2>
                            <p>Orgamix goes beyond task tracking with comprehensive project mangement capabilities:</p>
                            <ul className="list-disc ml-6">
                                <li>Assign tasks to team members and monitor their progress.</li>
                                <li>Set start and due dates to maintain momentum and hit deadlines.</li>
                                <li>Access an overview of project statuses, deadlines, and bottlenecks in one glance.</li>
                                <li>Manage Multiple projects simultaneously, ensuring no detail is overlooked.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">4. Integrated Whiteboard for Creativity</h2>
                            <p>
                                Turn idead into action with the built-in <strong>Whiteboard</strong> feature.
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Sketch plans, workflows, or concepts using freehand drawing tools.</li>
                                <li>Add shapes, annotations, and visuals to support brainstorming sessions.</li>
                                <li>Collaborate with your team in real-time, sharing visual notes directly linked to your project.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">5. Pomodoro timer for Focused Work</h2>
                            <p>Enhance you productivity using the integrated <strong>Pomodoro timer</strong></p>
                            <ul className="list-disc ml-6">
                                <li>Divide your work into timed intervals (e.g., 25 minutes of focus followed by a 5-minute break).</li>
                                <li>Link the timer to specific tasks to track how much-focused work you've done.</li>
                                <li>Revuew session statistics to measure your progress and efficiency.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">6. AI-Powered Assistance</h2>
                            <p>Get smart recommendations and insights to optimize your workflow.</p>
                            <ul className="list-disc ml-6">
                                <li><strong>Task Suggestions:</strong> Let AI help you brainstorm actionable steps for projects</li>
                                <li><strong>Project Ideas:</strong> Generate creative project concepts based on your interests and goals</li>
                                <li><strong>Performance Analytics:</strong> Track your productivity and identify areas for improvement</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">7. Deadline Tracking and Notifications</h2>
                            <p>Never miss a critital deadline with Orgamix's integrated tracking system.</p>
                            <ul className="list-disc ml-6">
                                <li>View all your deadlines in a unified view.</li>
                                <li>Receive timely reminders for upcoming tasks and project milestones.</li>
                                <li>Customize notification preferences to stay focused on what matters most.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <h2 className="text-lg font-semibold">8. Customizable User Experience</h2>
                            <p>Tailor Orgamix to your workflow and personal preferences.</p>
                            <ul className="list-disc ml-6">
                                <li>Sync your work across multiple devices to ensure continioty and accessibility.</li>
                                <li>Customize boards, columns, and task categories to suit your specific needs.</li>
                            </ul>
                        </section>

                        <section className="mt-6">

                            <h2 className="text-2xl font-semibold mb-2">Why Choose Orgamix?</h2>
                            <h2 className="text-lg font-semibold">Streamlined Workflows</h2>
                            <p className="mb-2">Orgamix simplifies complex workflows by breaking projects into clear, actionable steps. Its visual interface ensures that tasks are easy to understand and manage,
                                helping you start organized even with multiple projects on you table.
                            </p>

                            <h2 className="text-lg font-semibold mt-2">Enhanced Collaboration</h2>
                            <p className="mb-2">With live chat, comments, and shared whiteboards, Orgamix makes teamwork effortless. Everyone stays on the same page, reducing miscommunication and ensuring faster
                                decision-making.
                            </p>

                            <h2 className="text-lg font-semibold">Boosted Productivity</h2>
                            <p className="mb-2">The combination of the Pomodoro Timer, AI-powered analytics, and deadline tracking helps you focus on high-priority tasks and optimize your time.
                                Orgamix ensures you're not just busy but truly productive.
                            </p>

                            <h2 className="text-lg font-semibold">Scalability</h2>
                            <p className="mb-2"> Wheter you're working alone or leading a team, Orgamix scales with your needs. Start small with personal tasks and expand to mange team projects
                                as your requirements grow. Orgamix is designed to support you at every stage of your journey.
                            </p>

                            <h2 className="text-lg font-semibold">Innovation Meets Simplicity</h2>
                            <p className="mb-2">OrgamiX combines advanced features like AI-powered insights and whiteboard integration with an intuitive, user-friendly interface. This makes it accessible
                                for beginners while providing powerful tools for advanced users.
                            </p>

                        </section>

                        <section className="mt-6">
                            <h2 className="text-2xl font-semibold mb-2">Who is Orgamix For?</h2>
                            <ul className="list-disc ml-6">
                                <li>Individuals: Manage personal tasks, projects, and goals efficiently.</li>
                                <li>Students: Organize academic assignments, group projects, and study schedules.</li>
                                <li>Freelancers: Track clients projects, deadlines, and deliverables.</li>
                                <li>Teams: Collaborate on projects, assign tasks, and maintain transparency across teams of any size.</li>
                                <li>Small Businesses: Streamline operations and enhance productivity with a single, centralized tool.</li>
                            </ul>
                        </section>

                        <section className="mt-6">
                            <p>Orgamix is more than just a productivity tool—it’s your partner in achieving success. By combining visual task management with powerful features
                                like live collaboration, AI-driven insights, and the Pomodoro Timer, Orgamix empowers you to take control of your projects and workflows. Whether you’re
                                tackling personal goals or leading a team to success, Orgamix provides the tools you need to stay organized, focused, and efficient.

                            </p>
                            <p className="mt-4">
                                Start using Orgamix today and transform the way you work!
                            </p>
                        </section>

                        <section className="mt-6">
                            <div className="flex flex-row items-center justify-between">

                                <a href="" className="flex flex-row items-center justify-center">  </a>

                                <a href="/testing/projects" className="flex flex-row items-center justify-center"> Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right h-3.5 w-3.5"><path
                                        d="m9 18 6-6-6-6"></path></svg></a>
                            </div>
                        </section>

                    </main>

                    {/* Table of Contents */}
                    <aside className="hidden sm:block w-52 border-x-[1px] border-[#414141] p-6">
                        <div className="sticky top-20">
                            <h4 className="text-sm font-semibold mb-4">On This Page</h4>
                            <nav className="space-y-2 text-sm">
                                <Link
                                    to="#create-project"
                                    className="block text-muted-foreground hover:text-foreground"
                                >
                                    Create Project
                                </Link>
                                <Link
                                    to="#run-cli"
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
