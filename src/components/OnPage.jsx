import React from 'react'
import { Link } from 'react-router-dom'

const OnPage = () => {
    return (
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
    )
}

export default OnPage