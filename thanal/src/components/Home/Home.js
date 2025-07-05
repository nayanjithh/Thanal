import React from "react"

import "./Home.css"

export default function Home () {
    return (
        <div id="webcrumbs">
            <div className="w-full min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex flex-col">
                <header className="w-full px-6 py-8 flex justify-center">
                    <div className="max-w-6xl w-full flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">star</span>
                            </div>
                            <span className="text-xl font-bold text-primary-900">Inspire</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                                Home
                            </a>
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                                About
                            </a>
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                                Contact
                            </a>
                        </nav>
                    </div>
                </header>

                <main className="flex-1 flex items-center justify-center px-6 py-12">
                    <div className="max-w-4xl w-full text-center">
                        <div className="mb-8">
                            <span className="material-symbols-outlined text-primary-500 text-6xl mb-6 block animate-pulse">
                                format_quote
                            </span>
                        </div>

                        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-8 leading-relaxed">
                            "The only way to do great work is to love what you do."
                        </blockquote>

                        <cite className="text-lg md:text-xl text-gray-600 mb-12 block font-medium">- Steve Jobs</cite>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                                <span>Get Started</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>

                            <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Learn More
                            </button>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <span className="material-symbols-outlined text-primary-500 text-4xl mb-4 block">
                                    lightbulb
                                </span>
                                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                                <p className="text-gray-600">
                                    Transform your ideas into reality with our cutting-edge solutions.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <span className="material-symbols-outlined text-primary-500 text-4xl mb-4 block">
                                    group
                                </span>
                                <h3 className="text-xl font-semibold mb-2">Community</h3>
                                <p className="text-gray-600">Join a thriving community of like-minded individuals.</p>
                            </div>

                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <span className="material-symbols-outlined text-primary-500 text-4xl mb-4 block">
                                    trending_up
                                </span>
                                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                                <p className="text-gray-600">Accelerate your personal and professional development.</p>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="w-full bg-gray-900 text-white py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-sm">star</span>
                                    </div>
                                    <span className="text-lg font-bold">Inspire</span>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Empowering individuals to achieve their dreams and reach their full potential.
                                </p>
                                <div className="flex space-x-4">
                                    <i className="fa-brands fa-facebook text-xl hover:text-primary-400 transition-colors duration-300 cursor-pointer"></i>
                                    <i className="fa-brands fa-twitter text-xl hover:text-primary-400 transition-colors duration-300 cursor-pointer"></i>
                                    <i className="fa-brands fa-instagram text-xl hover:text-primary-400 transition-colors duration-300 cursor-pointer"></i>
                                    <i className="fa-brands fa-linkedin text-xl hover:text-primary-400 transition-colors duration-300 cursor-pointer"></i>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            Community
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                                <p className="text-gray-400 mb-4">
                                    Subscribe to our newsletter for updates and inspiration.
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500"
                                    />
                                    <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">© 2024 Inspire. All rights reserved.</p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    Terms of Service
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Next: "Add hero video background or animated particles" */}
                {/* Next: "Add testimonials carousel section" */}
                {/* Next: "Add call-to-action modal with email signup" */}
            </div>
        </div>
    )
}
