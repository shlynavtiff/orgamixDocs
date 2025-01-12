import React from 'react'
import { Link } from 'react-router-dom'

const MalopitNaSidebar = () => {
    return (
        <nav className="space-y-4 ">
            <div>
                <p className="text-muted-foreground px-2 font-bold">Getting Started</p>
                <Link
                    to="/testing"
                    className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                >
                    Introduction
                </Link>
                <Link
                    to="/testing/dashboard"
                    className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                >
                    Dashboard
                </Link>
                <Link
                    to="/testing/tasks"
                    className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                >
                    Tasks
                </Link>
                <Link
                    to="/testing/notes"
                    className="block px-2 py-1 bg-accent rounded-md text-sm font-medium"
                >
                    Notes
                </Link>
                <Link
                    to="/testing/goals"
                    className="block px-2 py-1 bg-accent rounded-md text-sm font-medium"
                >
                    Goals
                </Link>
                <Link
                    to="/testing/projects"
                    className="block px-2 py-1 bg-accent rounded-md text-sm font-medium"
                >
                    Projects
                </Link>
                <Link
                    to="/testing/pomodoro"
                    className="block px-2 py-1 bg-accent rounded-md text-sm font-medium"
                >
                    Pomodoro
                </Link>
                <Link
                    to="/testing/deadline"
                    className="block px-2 py-1 bg-accent rounded-md text-sm font-medium"
                >
                    Deadline
                </Link>
                <Link
                    to="/testing/ask-ai"
                    className="block px-2 py-1 bg-accent rounded-md text-sm font-medium"
                >
                    Ask AI
                </Link>
            </div>

            <div>
                <p className="text-muted-foreground px-2 font-bold">Others</p>
                <Link
                    to="/testing/notifications"
                    className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                >
                    Notifications
                </Link>
                <Link
                    to="/testing/settings"
                    className="block px-2 py-1 hover:bg-accent rounded-md text-sm"
                >
                    Settings
                </Link>
            </div>
        </nav>
    )
}

export default MalopitNaSidebar