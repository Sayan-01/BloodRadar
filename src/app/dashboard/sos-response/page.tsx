// app/dashboard/sos-response/page.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { AlertTriangle, Clock, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const sosRequests = [
  {
    id: 1,
    location: "Downtown Community Center",
    requestTime: "2025-03-19T08:30:00",
    status: "urgent",
    description: "Flooding in basement, need immediate assistance with water pumps and sandbags.",
    requester: "Community Center Manager",
    contact: "555-123-4567",
  },
  {
    id: 2,
    location: "Eastside Elementary School",
    requestTime: "2025-03-18T14:15:00",
    status: "in-progress",
    description: "Power outage affecting refrigeration for food supplies. Need generators.",
    requester: "School Principal",
    contact: "555-234-5678",
  },
  {
    id: 3,
    location: "North District Senior Housing",
    requestTime: "2025-03-19T09:45:00",
    status: "urgent",
    description: "Medical supplies running low for residents with chronic conditions.",
    requester: "Housing Coordinator",
    contact: "555-345-6789",
  },
  {
    id: 4,
    location: "West River Bridge",
    requestTime: "2025-03-17T16:20:00",
    status: "resolved",
    description: "Traffic accident with multiple vehicles, emergency supplies needed.",
    requester: "Emergency Services",
    contact: "555-456-7890",
  },
];

export default function SosResponsePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">SOS Response</h1>
        <div className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <AlertTriangle size={18} />
          <span className="font-medium">2 Urgent Requests</span>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1">
        {sosRequests.map((request) => (
          <Card
            key={request.id}
            className={`border-l-4 ${request.status === "urgent" ? "border-l-red-500" : request.status === "in-progress" ? "border-l-amber-500" : "border-l-green-500"}`}
          >
            <CardHeader className="flex flex-row items-start justify-between pb-2">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {request.status === "urgent" ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : request.status === "in-progress" ? (
                    <Clock className="h-5 w-5 text-amber-500" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                  SOS Request #{request.id}
                </CardTitle>
                <div className="flex items-center gap-1 text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{request.location}</span>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  request.status === "urgent" ? "bg-red-100 text-red-800" : request.status === "in-progress" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"
                }`}
              >
                {request.status === "urgent" ? "Urgent" : request.status === "in-progress" ? "In Progress" : "Resolved"}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{request.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Requester</p>
                  <p className="text-sm font-medium">{request.requester}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Contact</p>
                  <p className="text-sm font-medium">{request.contact}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Time Received</p>
                  <p className="text-sm font-medium">{new Date(request.requestTime).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                  <p className="text-sm font-medium">{request.status === "resolved" ? "2 hours 15 minutes" : "Pending"}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-end gap-2">
              {request.status !== "resolved" && (
                <>
                  <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm">Assign Team</button>
                  <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm">Mark as Resolved</button>
                </>
              )}
              {request.status === "resolved" && <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm">View Report</button>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
