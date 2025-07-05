import React from "react"
import './Home.css'


export default function Home() {
    return (
        <div id="webcrumbs">
            <div class="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
                <div class="mb-8">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h1 class="text-4xl font-bold text-gray-800 mb-2">AI-Powered Clinical Documentation</h1>
                            <p class="text-lg text-gray-600">
                                Transform patient visits into structured clinical notes with advanced AI technology
                            </p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                                <span class="material-symbols-outlined text-sm mr-1">trending_up</span> Reduce burnout
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="text-center p-4 bg-blue-50 rounded-lg">
                                <span class="material-symbols-outlined text-4xl text-blue-600 mb-2">mic</span>
                                <h3 class="font-semibold text-gray-800 mb-1">Real-time Audio Processing</h3>
                                <p class="text-sm text-gray-600">
                                    AI listens and captures key information during patient visits
                                </p>
                            </div>
                            <div class="text-center p-4 bg-green-50 rounded-lg">
                                <span class="material-symbols-outlined text-4xl text-green-600 mb-2">description</span>
                                <h3 class="font-semibold text-gray-800 mb-1">Structured Documentation</h3>
                                <p class="text-sm text-gray-600">Automatically generates organized clinical notes</p>
                            </div>
                            <div class="text-center p-4 bg-purple-50 rounded-lg">
                                <span class="material-symbols-outlined text-4xl text-purple-600 mb-2">psychology</span>
                                <h3 class="font-semibold text-gray-800 mb-1">Smart Entity Recognition</h3>
                                <p class="text-sm text-gray-600">
                                    Identifies symptoms, medications, and medical history
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span class="material-symbols-outlined mr-2 text-primary-600">add_circle</span> New Patient
                            Documentation
                        </h2>
                        <div class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
                                    <input
                                        type="text"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        placeholder="Enter patient name"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Patient ID</label>
                                    <input
                                        type="text"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        placeholder="Enter patient ID"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                    <input
                                        type="date"
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                                    <select
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    >
                                        <option>Select specialty</option>
                                        <option>Cardiology</option>
                                        <option>Dermatology</option>
                                        <option>Neurology</option>
                                        <option>Orthopedics</option>
                                        <option>Pediatrics</option>
                                        <option>Internal Medicine</option>
                                    </select>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-6 text-center">
                                <div class="mb-4">
                                    <button
                                        class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors transform hover:scale-105 flex items-center mx-auto"
                                    >
                                        <span class="material-symbols-outlined mr-2">mic</span> Start Recording
                                    </button>
                                </div>
                                <p class="text-sm text-gray-600 mb-2">Click to begin live audio recording</p>
                                <div class="flex items-center justify-center space-x-2 text-xs text-gray-500">
                                    <span class="material-symbols-outlined text-sm">security</span>
                                    <span>HIPAA compliant recording</span>
                                </div>
                            </div>
                            <div class="border-t pt-4">
                                <button
                                    class="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors transform hover:scale-105 flex items-center justify-center"
                                >
                                    <span class="material-symbols-outlined mr-2">auto_awesome</span> Generate AI
                                    Documentation
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span class="material-symbols-outlined mr-2 text-green-600">history</span> Past
                            Documentation
                        </h2>
                        <div class="space-y-4">
                            <div
                                class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div>
                                    <h3 class="font-semibold text-gray-800">John Smith - Cardiology</h3>
                                    <p class="text-sm text-gray-600">Patient ID: P-2024-001 | Date: 2024-01-15</p>
                                    <p class="text-xs text-gray-500">Generated 2 hours ago</p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button class="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button
                                        class="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors"
                                    >
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>
                                    <button
                                        class="p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                                    >
                                        <span class="material-symbols-outlined">download</span>
                                    </button>
                                    <button class="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div>
                                    <h3 class="font-semibold text-gray-800">Sarah Johnson - Dermatology</h3>
                                    <p class="text-sm text-gray-600">Patient ID: P-2024-002 | Date: 2024-01-14</p>
                                    <p class="text-xs text-gray-500">Generated 1 day ago</p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button class="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button
                                        class="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors"
                                    >
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>
                                    <button
                                        class="p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                                    >
                                        <span class="material-symbols-outlined">download</span>
                                    </button>
                                    <button class="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div>
                                    <h3 class="font-semibold text-gray-800">Michael Brown - Neurology</h3>
                                    <p class="text-sm text-gray-600">Patient ID: P-2024-003 | Date: 2024-01-13</p>
                                    <p class="text-xs text-gray-500">Generated 2 days ago</p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button class="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                                        <span class="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button
                                        class="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors"
                                    >
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>
                                    <button
                                        class="p-2 text-purple-600 hover:bg-purple-100 rounded-full transition-colors"
                                    >
                                        <span class="material-symbols-outlined">download</span>
                                    </button>
                                    <button class="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 pt-4 border-t">
                            <button
                                class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                            >
                                <span class="material-symbols-outlined mr-2">expand_more</span> Load More Records
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <span class="material-symbols-outlined mr-2 text-orange-600">preview</span> Sample Generated
                        Note
                    </h2>
                    <div class="bg-gray-50 rounded-lg p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-2">Patient Information</h3>
                                <div class="space-y-1 text-sm">
                                    <p><span class="font-medium">Name:</span> John Smith</p>
                                    <p><span class="font-medium">ID:</span> P-2024-001</p>
                                    <p><span class="font-medium">Date:</span> January 15, 2024</p>
                                    <p><span class="font-medium">Specialty:</span> Cardiology</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-2">AI Processing Stats</h3>
                                <div class="space-y-1 text-sm">
                                    <p><span class="font-medium">Processing Time:</span> 2.3 seconds</p>
                                    <p><span class="font-medium">Confidence Score:</span> 94%</p>
                                    <p><span class="font-medium">Entities Identified:</span> 12</p>
                                    <p><span class="font-medium">Audio Duration:</span> 8:42</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-2">Chief Complaint</h3>
                                <p class="text-sm text-gray-700 bg-white p-3 rounded border-l-4 border-blue-500">
                                    Patient presents with chest pain and shortness of breath that started 3 days ago,
                                    worsening with exertion.
                                </p>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-2">Assessment</h3>
                                <p class="text-sm text-gray-700 bg-white p-3 rounded border-l-4 border-green-500">
                                    Based on symptoms and examination, likely angina pectoris. Patient reports pain
                                    radiating to left arm. No signs of acute MI. Vital signs stable.
                                </p>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 mb-2">Plan</h3>
                                <p class="text-sm text-gray-700 bg-white p-3 rounded border-l-4 border-purple-500">
                                    Order EKG and cardiac enzymes. Prescribe sublingual nitroglycerin. Schedule stress
                                    test. Follow-up in 1 week. Patient education on cardiac risk factors provided.
                                </p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between pt-4 border-t">
                            <div class="flex items-center space-x-4">
                                <span class="text-sm text-gray-600">Generated by AI Clinical Assistant</span>
                                <div class="flex items-center space-x-1">
                                    <span class="material-symbols-outlined text-sm text-green-600">verified</span>
                                    <span class="text-sm text-green-600">Verified</span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button
                                    class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <span class="material-symbols-outlined text-sm mr-1">edit</span> Edit Note
                                </button>
                                <button
                                    class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    <span class="material-symbols-outlined text-sm mr-1">check_circle</span> Approve
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}