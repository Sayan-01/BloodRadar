// app/dashboard/hall-of-donors/page.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const topDonors = [
  {
    id: 1,
    name: "James Robertson",
    amount: "$25,000",
    date: "March 2025",
    tier: "Platinum",
  },
  {
    id: 2,
    name: "Elizabeth Parker Foundation",
    amount: "$20,000",
    date: "February 2025",
    tier: "Platinum",
  },
  {
    id: 3,
    name: "Thompson Family Trust",
    amount: "$15,000",
    date: "March 2025",
    tier: "Gold",
  },
  {
    id: 4,
    name: "Rebecca Anderson",
    amount: "$12,500",
    date: "January 2025",
    tier: "Gold",
  },
  {
    id: 5,
    name: "Martin & Co. Industries",
    amount: "$10,000",
    date: "March 2025",
    tier: "Silver",
  },
];

export default function HallOfDonorsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Hall of Donors</h1>

      <div className="text-center py-6">
        <Award className="h-16 w-16 mx-auto text-amber-500 mb-2" />
        <h2 className="text-2xl font-bold">Our Esteemed Benefactors</h2>
        <p className="text-muted-foreground mt-2">Recognizing those who have made exceptional contributions to our cause</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {topDonors.map((donor) => (
          <Card
            key={donor.id}
            className="overflow-hidden"
          >
            <div className={`h-2 ${donor.tier === "Platinum" ? "bg-slate-800" : donor.tier === "Gold" ? "bg-amber-500" : "bg-slate-400"}`} />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {donor.name}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${donor.tier === "Platinum" ? "bg-slate-800 text-white" : donor.tier === "Gold" ? "bg-amber-500 text-white" : "bg-slate-400 text-white"}`}
                >
                  {donor.tier}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">{donor.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{donor.date}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-center text-sm text-muted-foreground italic">"We are deeply grateful for your generous support."</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
