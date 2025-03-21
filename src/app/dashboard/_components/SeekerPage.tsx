"use client";
import React, { useState } from "react";
import { Search, Calendar, Filter, Clock, Home, User, BarChart4, History, Siren } from "lucide-react";
import Sos from "./Sos";

const SeekerPage = ({userId}:{userId:string}) => {
  
  const [activeTab, setActiveTab] = useState("dashboard");


  // Sample data
  const donorData = [
    { id: 1, name: "Amit Sharma", age: 29, gender: "Male", bloodGroup: "O+", location: "Mumbai", lastDonation: "2025-02-12", status: "Available" },
    { id: 2, name: "Priya Verma", age: 34, gender: "Female", bloodGroup: "A-", location: "Delhi", lastDonation: "2025-03-05", status: "Available" },
    { id: 3, name: "Rajesh Kumar", age: 40, gender: "Male", bloodGroup: "B+", location: "Bangalore", lastDonation: "2025-01-18", status: "Unavailable" },
    { id: 4, name: "Anjali Nair", age: 30, gender: "Female", bloodGroup: "AB+", location: "Chennai", lastDonation: "2025-02-25", status: "Available" },
    { id: 5, name: "Vikram Singh", age: 27, gender: "Male", bloodGroup: "O-", location: "Kolkata", lastDonation: "2025-03-08", status: "Available" },
    { id: 6, name: "Sneha Patil", age: 26, gender: "Female", bloodGroup: "B-", location: "Pune", lastDonation: "2025-02-20", status: "Unavailable" },
    { id: 7, name: "Arjun Iyer", age: 32, gender: "Male", bloodGroup: "A+", location: "Hyderabad", lastDonation: "2025-01-30", status: "Available" },
    { id: 8, name: "Meera Joshi", age: 28, gender: "Female", bloodGroup: "O+", location: "Ahmedabad", lastDonation: "2025-02-15", status: "Available" },
    { id: 9, name: "Sandeep Reddy", age: 35, gender: "Male", bloodGroup: "AB-", location: "Visakhapatnam", lastDonation: "2025-03-02", status: "Available" },
    { id: 10, name: "Neha Kapoor", age: 33, gender: "Female", bloodGroup: "B+", location: "Jaipur", lastDonation: "2025-02-18", status: "Available" },
  ];
 

  const membershipData = [
    { id: 1, name: "Emily White", age: 22, bloodGroup: "A+", frequency: "Weekly", nextSchedule: "2025-03-25", hospital: "General Hospital" },
    { id: 2, name: "David Brown", age: 45, bloodGroup: "O+", frequency: "Biweekly", nextSchedule: "2025-04-02", hospital: "Memorial Clinic" },
    { id: 3, name: "Lisa Chen", age: 36, bloodGroup: "B-", frequency: "Monthly", nextSchedule: "2025-04-15", hospital: "City Medical Center" },
  ];

  const historyData = [
    { id: 1, requestDate: "2025-03-15", bloodGroup: "O+", quantity: "2 units", status: "Fulfilled", donor: "John Doe", hospital: "General Hospital" },
    { id: 2, requestDate: "2025-03-01", bloodGroup: "A-", quantity: "1 unit", status: "Fulfilled", donor: "Jane Smith", hospital: "Memorial Clinic" },
    { id: 3, requestDate: "2025-02-20", bloodGroup: "AB+", quantity: "3 units", status: "Pending", donor: "—", hospital: "City Medical Center" },
  ];

  // Filter states
  const [locationFilter, setLocationFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [bloodGroupFilter, setBloodGroupFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter function
  const filteredDonors = donorData.filter((donor) => {
    return (
      (locationFilter === "" || donor.location === locationFilter) &&
      (bloodGroupFilter === "" || donor.bloodGroup === bloodGroupFilter) &&
      (genderFilter === "" || donor.gender === genderFilter) &&
      (ageFilter === "" ||
        (ageFilter === "18-30" && donor.age >= 18 && donor.age <= 30) ||
        (ageFilter === "31-45" && donor.age >= 31 && donor.age <= 45) ||
        (ageFilter === "46+" && donor.age >= 46)) &&
      (searchQuery === "" ||
        donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        donor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        donor.bloodGroup.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Custom components using Tailwind
  const Card = ({ children, className = "" }) => <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>{children}</div>;

  const CardHeader = ({ children }) => <div className="px-6 py-4 border-b border-gray-200">{children}</div>;

  const CardTitle = ({ children }) => <h3 className="text-lg font-medium">{children}</h3>;

  const CardDescription = ({ children }) => <p className="text-sm text-gray-500 mt-1">{children}</p>;

  const CardContent = ({ children }) => <div className="p-6">{children}</div>;

  const Button = ({ children, variant = "default", size = "default", className = "", onClick }) => {
    const variantStyles = {
      default: "bg-blue-600 hover:bg-blue-700 text-white",
      outline: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700",
    };

    const sizeStyles = {
      default: "px-4 py-2 text-sm",
      sm: "px-3 py-1 text-xs",
    };

    return (
      <button
        className={`rounded-md font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const Badge = ({ children, variant = "default" }) => {
    const variantStyles = {
      default: "bg-gray-100 text-gray-800",
      success: "bg-green-100 text-green-800",
      secondary: "bg-blue-100 text-blue-800",
    };

    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${variantStyles[variant]}`}>{children}</span>;
  };

  const Input = ({ placeholder, className = "", value, onChange }) => (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  );

  const Select = ({ children, value, onValueChange }) => {
    return (
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  };

  const SelectItem = ({ children, value }) => <option value={value}>{children}</option>;

  // Dashboard content
  const renderDashboard = () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Available Donors</CardTitle>
          <CardDescription>Total donors ready to donate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">42</div>
          <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Requests</CardTitle>
          <CardDescription>Blood requests awaiting fulfillment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">7</div>
          <p className="text-sm text-gray-500 mt-2">-2% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Membership Plans</CardTitle>
          <CardDescription>Regular transfusion schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">12</div>
          <p className="text-sm text-gray-500 mt-2">+3% from last month</p>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Blood Group
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {historyData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.requestDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={item.status === "Fulfilled" ? "success" : "secondary"}>{item.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Blood Group Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>A+</span>
              <span>15 donors</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>

            <div className="flex justify-between">
              <span>O+</span>
              <span>20 donors</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>

            <div className="flex justify-between">
              <span>B-</span>
              <span>5 donors</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>

            <div className="flex justify-between">
              <span>AB+</span>
              <span>2 donors</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Donor Filter content
  const renderDonorFilter = () => (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Donor Filter</CardTitle>
          <CardDescription>Find available donors based on specific criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-6">
            <div>
              <label className="text-sm font-medium mb-1 block">Search</label>
              <div className="relative">
                <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search donors..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Location</label>
              <Select
                value={locationFilter}
                onValueChange={setLocationFilter}
              >
                <SelectItem value="">All locations</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Boston">Boston</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
                <SelectItem value="Miami">Miami</SelectItem>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Age</label>
              <Select
                value={ageFilter}
                onValueChange={setAgeFilter}
              >
                <SelectItem value="">All ages</SelectItem>
                <SelectItem value="18-30">18-30</SelectItem>
                <SelectItem value="31-45">31-45</SelectItem>
                <SelectItem value="46+">46+</SelectItem>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Gender</label>
              <Select
                value={genderFilter}
                onValueChange={setGenderFilter}
              >
                <SelectItem value="">All genders</SelectItem>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Blood Group</label>
              <Select
                value={bloodGroupFilter}
                onValueChange={setBloodGroupFilter}
              >
                <SelectItem value="">All blood groups</SelectItem>
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </Select>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => {
                setLocationFilter("");
                setAgeFilter("");
                setGenderFilter("");
                setBloodGroupFilter("");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Donors</CardTitle>
          <CardDescription>Showing {filteredDonors.length} donors matching your criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Blood Group
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Donation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDonors.map((donor) => (
                  <tr key={donor.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{donor.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.lastDonation}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={donor.status === "Available" ? "success" : "secondary"}>{donor.status}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button size="sm">Contact</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // History content
  const renderHistory = () => (
    <Card>
      <CardHeader>
        <CardTitle>Blood Seeking History</CardTitle>
        <CardDescription>Your previous blood requests and their status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Request Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Blood Group
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hospital
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Donor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {historyData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.requestDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.bloodGroup}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.hospital}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.donor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={item.status === "Fulfilled" ? "success" : "secondary"}>{item.status}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      size="sm"
                      variant="outline"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  // Membership section
  const renderMembership = () => (
    <Card>
      <CardHeader>
        <CardTitle>Regular Transfusion Membership</CardTitle>
        <CardDescription>Patients requiring regular blood transfusions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Patient Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Blood Group
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Frequency
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Next Schedule
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hospital
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {membershipData.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.bloodGroup}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.nextSchedule}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.hospital}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button size="sm">Update Schedule</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Button>Add New Membership</Button>
        </div>
      </CardContent>
    </Card>
  );

  //Sos part

  const renderSos = () => {
    return (
      <div className="w-full h-screen">
        <Sos userId={userId}/>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Custom Sidebar (not a shadcn component) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <BarChart4 className="h-6 w-6" />
            Blood Seeker
          </h2>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left ${activeTab === "dashboard" ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
              >
                <Home className="h-5 w-5" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("history")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left ${activeTab === "history" ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
              >
                <History className="h-5 w-5" />
                History
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("donor-filter")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left ${activeTab === "donor-filter" ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
              >
                <Filter className="h-5 w-5" />
                Donor Filter
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("membership")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left ${activeTab === "membership" ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
              >
                <Calendar className="h-5 w-5" />
                Membership
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("sos")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left ${activeTab === "sos" ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
              >
                <Siren className="h-5 w-5" />
                SOS
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium">John Watson</p>
              <p className="text-xs text-gray-500">Blood Seeker</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">
            {activeTab === "dashboard" && "Dashboard"}
            {activeTab === "history" && "Blood Seeking History"}
            {activeTab === "donor-filter" && "Donor Filter"}
            {activeTab === "membership" && "Regular Transfusion Membership"}
          </h1>
          <p className="text-gray-500">
            {activeTab === "dashboard" && "Overview of your blood seeking activities"}
            {activeTab === "history" && "Track your previous blood requests"}
            {activeTab === "donor-filter" && "Find suitable donors based on your requirements"}
            {activeTab === "membership" && "Manage regular blood transfusion schedules"}
          </p>
        </header>

        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "history" && renderHistory()}
        {activeTab === "donor-filter" && renderDonorFilter()}
        {activeTab === "membership" && renderMembership()}
        {activeTab === "sos" && renderSos()}
      </main>
    </div>
  );
};

export default SeekerPage;
