// src/components/layout/Footer.tsx

import Link from "next/link";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-red-400 text-white py-12 mx-20 rounded-2xl">
      <Wrapper>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Br.com</h2>
              <p className="text-white/70 max-w-xs">The visual collaboration platform to create, collaborate, and centralize communication across your company.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4 uppercase text-sm">Solutions</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/hospitals"
                      className="text-white/70 hover:text-white"
                    >
                      Hospitals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bloodbanks"
                      className="text-white/70 hover:text-white"
                    >
                      Blood Banks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/staff-meeting"
                      className="text-white/70 hover:text-white"
                    >
                      Staff Meeting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-white/70 hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/donation-app"
                      className="text-white/70 hover:text-white"
                    >
                      Donation App
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 uppercase text-sm">Documentation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/api"
                      className="text-white/70 hover:text-white"
                    >
                      API
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides"
                      className="text-white/70 hover:text-white"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/changelog"
                      className="text-white/70 hover:text-white"
                    >
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/status"
                      className="text-white/70 hover:text-white"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 uppercase text-sm">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/blog"
                      className="text-white/70 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-sales"
                      className="text-white/70 hover:text-white"
                    >
                      Contact Sales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/smart-match"
                      className="text-white/70 hover:text-white"
                    >
                      Smart Match
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/donor-map"
                      className="text-white/70 hover:text-white"
                    >
                      Donor Map
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/widgets"
                      className="text-white/70 hover:text-white"
                    >
                      Widgets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-app"
                      className="text-white/70 hover:text-white"
                    >
                      Mobile App
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 uppercase text-sm">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-white/70 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customers"
                      className="text-white/70 hover:text-white"
                    >
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-white/70 hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white/70 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-white/70 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-white/70 hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/app-store"
                      className="text-white/70 hover:text-white"
                    >
                      App Store
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 text-white/70 text-sm">© 2025 BloodBuddy, Inc. All rights reserved.</div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
  