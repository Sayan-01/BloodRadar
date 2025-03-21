// app/dashboard/donor-history/page.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const donorData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    gender: "Male",
    lastDonation: "2025-03-15",
    frequency: "Monthly",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    gender: "Feale",
    lastDonation: "2025-03-10",
    frequency: "Quarterly",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@example.com",
    gender: "Male",
    lastDonation: "2025-02-28",
    frequency: "One-time",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@example.com",
    gender: "Female",
    lastDonation: "2025-03-12",
    frequency: "Monthly",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "d.wilson@example.com",
    gender: "Male",
    lastDonation: "2025-03-01",
    frequency: "Annual",
  },
];

export default function DonorHistoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Donor History</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Donors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b">
                    <th className="py-3 px-4 text-left">Patient Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Gender</th>
                    <th className="py-3 px-4 text-left">Last Donation</th>
                    <th className="py-3 px-4 text-left">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {donorData.map((donor) => (
                    <tr
                      key={donor.id}
                      className="border-b"
                    >
                      <td className="py-3 px-4">{donor.name}</td>
                      <td className="py-3 px-4">{donor.email}</td>
                      <td className="py-3 px-4">{donor.gender}</td>
                      <td className="py-3 px-4">{donor.lastDonation}</td>
                      <td className="py-3 px-4">{donor.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
