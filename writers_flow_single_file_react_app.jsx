import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

// Single-file React app for WritersFlow (classic academic style)
// Uses Tailwind CSS classes for styling. To preview: add this file into a React app
// with Tailwind configured (or use CodeSandbox with Tailwind).

export default function WritersFlowApp() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Header />
        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/signup" element={<Auth mode="signup" />} />
            <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-white font-semibold">WF</div>
          <div>
            <h1 className="text-lg font-serif">WritersFlow</h1>
            <p className="text-xs text-gray-500">Classic academic writing platform</p>
          </div>
        </Link>

        <nav className="space-x-6 hidden md:flex items-center">
          <Link to="/jobs" className="hover:underline">Jobs</Link>
          <Link to="/how-it-works" className="hover:underline">How it Works</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 border rounded text-sm">Log in</Link>
          <Link to="/signup" className="px-4 py-2 bg-gray-800 text-white rounded text-sm">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold">WritersFlow</h4>
          <p className="mt-2">A professional platform connecting academic writers with verified clients. Secure payments, support, and a clear review system.</p>
        </div>
        <div>
          <h4 className="font-semibold">Pages</h4>
          <ul className="mt-2 space-y-1">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/how-it-works" className="hover:underline">How it Works</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact & Legal</h4>
          <p className="mt-2">Email: support@writersflow.example</p>
          <p className="mt-1">Address: 120 Academic Way, London, UK</p>
          <div className="mt-3">
            <Link to="/privacy" className="mr-3 text-xs">Privacy</Link>
            <Link to="/terms" className="text-xs">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t text-center py-4 text-xs text-gray-500">© {new Date().getFullYear()} WritersFlow. All rights reserved.</div>
    </footer>
  );
}

/* ---------------- Pages ---------------- */
function Home() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold">A trusted academic writing network</h2>
          <p className="mt-4 text-gray-700">WritersFlow pairs expert academic writers with verified clients. We emphasize transparency, safe payments, and academic integrity.</p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Clear payouts and withdrawal via bank / M-Pesa / PayPal</li>
            <li>• Curated job assignments, no harmful bidding wars</li>
            <li>• Quality assurance team to protect writers and clients</li>
          </ul>

          <div className="mt-8 flex gap-3">
            <Link to="/signup" className="px-5 py-3 bg-gray-800 text-white rounded">Join as Writer</Link>
            <Link to="/jobs" className="px-5 py-3 border rounded">Browse Jobs</Link>
          </div>
        </div>

        <div className="bg-white border rounded p-6 shadow-sm">
          <h3 className="font-semibold mb-4">How Writers get started</h3>
          <ol className="list-decimal ml-5 text-gray-700">
            <li>Create profile & pass a short competency test</li>
            <li>Bid on curated tasks or accept direct invites</li>
            <li>Submit work, get reviewed, withdraw earnings</li>
          </ol>
        </div>
      </div>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <StatCard title="Verified Clients" value="1,200+" />
        <StatCard title="Active Writers" value="3,400+" />
        <StatCard title="Projects Completed" value="28,900+" />
      </section>

      <section className="mt-12">
        <h3 className="font-serif text-2xl mb-4">Testimonials</h3>
        <Testimonial name="Dr. J. Hargreaves" role="Senior Researcher">WritersFlow provided timely, high‑quality work and clear payment terms — a trustworthy partner for academic projects.</Testimonial>
      </section>
    </section>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white border p-6 rounded shadow-sm text-center">
      <div className="text-2xl font-bold font-mono">{value}</div>
      <div className="text-gray-600 mt-1">{title}</div>
    </div>
  );
}

function Testimonial({ children, name, role }) {
  return (
    <blockquote className="bg-white border rounded p-6 italic">"{children}"
      <div className="mt-3 text-sm font-semibold">{name} <span className="text-gray-500 font-normal">— {role}</span></div>
    </blockquote>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto bg-white border rounded p-8">
      <h2 className="text-2xl font-serif font-bold mb-3">About WritersFlow</h2>
      <p className="text-gray-700">WritersFlow was founded to provide a reliable, transparent platform for academic writers and clients. Our team blends editorial standards with secure payment rails and a clear dispute resolution policy.</p>

      <h3 className="mt-6 font-semibold">Our Values</h3>
      <ul className="mt-2 list-disc ml-6 text-gray-700">
        <li>Integrity & Academic Honesty</li>
        <li>Fair Compensation</li>
        <li>Quality Assurance</li>
        <li>Transparent Operations</li>
      </ul>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto bg-white border rounded p-8">
      <h2 className="text-2xl font-serif font-bold mb-3">How WritersFlow Works</h2>
      <ol className="list-decimal ml-6 text-gray-700 space-y-3">
        <li>Writers register and upload credentials; they may take a short skill test.</li>
        <li>Clients post jobs with clear briefs and budgets. Jobs are screened for policy compliance.</li>
        <li>Writers accept jobs; submissions pass quality review; payments are held in escrow until approval.</li>
      </ol>
    </div>
  );
}

function Jobs() {
  // Placeholder job data — replace with API-driven data
  const sampleJobs = [
    { id: 1, title: "Literature Review: Postcolonial Theory", price: "£120", deadline: "7 days" },
    { id: 2, title: "Quantitative Methods Homework", price: "£75", deadline: "3 days" },
    { id: 3, title: "Thesis Chapter Editing (Social Sciences)", price: "£220", deadline: "14 days" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-serif font-bold mb-4">Available Jobs</h2>
      <div className="space-y-4">
        {sampleJobs.map(job => (
          <div key={job.id} className="bg-white border rounded p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <div className="text-sm text-gray-500">Deadline: {job.deadline}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{job.price}</div>
              <Link to="/login" className="mt-2 inline-block text-sm border px-3 py-1 rounded">Apply / Bid</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="max-w-4xl mx-auto bg-white border rounded p-8">
      <h2 className="text-2xl font-serif font-bold mb-3">Frequently Asked Questions</h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <h4 className="font-semibold">How do I become a writer?</h4>
          <p className="mt-1">Sign up, complete your profile, and upload samples. Some roles require a short competency test.</p>
        </div>
        <div>
          <h4 className="font-semibold">How are payments made?</h4>
          <p className="mt-1">We support bank transfers, PayPal, and M-Pesa depending on your country. Payments are released from escrow after approval.</p>
        </div>
        <div>
          <h4 className="font-semibold">Is academic dishonesty tolerated?</h4>
          <p className="mt-1">No. We have a strict policy against contract cheating and will remove any jobs or users that violate our policy.</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-white border rounded p-8">
      <h2 className="text-2xl font-serif font-bold mb-3">Contact</h2>
      <p className="text-gray-700">Use the form below or email <strong>support@writersflow.example</strong>.</p>
      <form className="mt-4 space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" />
        <input className="w-full border rounded px-3 py-2" placeholder="Subject" />
        <textarea className="w-full border rounded px-3 py-2" rows={5} placeholder="Message" />
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-gray-800 text-white rounded">Send Message</button>
        </div>
      </form>
    </div>
  );
}

/* ---------------- Auth (Login / Signup) ---------------- */
function Auth({ mode = "login" }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto bg-white border rounded p-8">
      <h2 className="text-xl font-semibold mb-4">{mode === "login" ? "Log in to WritersFlow" : "Create your WritersFlow account"}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: integrate API auth
          // For demo redirect to dashboard
          navigate('/dashboard');
        }}
        className="space-y-3"
      >
        <input className="w-full border rounded px-3 py-2" placeholder="Email" />
        <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" />
        {mode === 'signup' && <input className="w-full border rounded px-3 py-2" placeholder="Confirm Password" type="password" />}
        <div className="flex justify-between items-center">
          <label className="text-sm"><input type="checkbox" className="mr-2" /> Remember me</label>
          <Link to="/faq" className="text-sm hover:underline">Forgot password?</Link>
        </div>
        <button className="w-full px-4 py-2 bg-gray-800 text-white rounded">{mode === 'login' ? 'Log in' : 'Create account'}</button>
      </form>
    </div>
  );
}

/* ---------------- Protected Route (placeholder) ---------------- */
function ProtectedRoute({ children }) {
  // TODO: wire authentication check here
  const isAuthenticated = true; // replace with real check
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

/* ---------------- Dashboard ---------------- */
function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 bg-white border rounded p-4">
        <ProfileCard />
        <nav className="mt-6 space-y-2 text-sm">
          <Link to="/dashboard" className="block">Overview</Link>
          <Link to="/dashboard/tasks" className="block">My Tasks</Link>
          <Link to="/dashboard/earnings" className="block">Earnings</Link>
          <Link to="/dashboard/messages" className="block">Messages</Link>
          <Link to="/dashboard/settings" className="block">Settings</Link>
        </nav>
      </aside>

      <section className="md:col-span-3 bg-white border rounded p-6">
        <h2 className="text-xl font-semibold mb-3">Dashboard Overview</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <SmallCard title="Active Tasks" value="3" />
          <SmallCard title="Pending Reviews" value="1" />
          <SmallCard title="Wallet Balance" value="£220" />
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Recent Activity</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>Submitted: Literature Review — awaiting review</li>
            <li>Payment released: Thesis Editing — £120</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="p-4 border rounded">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div>
          <div className="font-semibold">Alex Carter</div>
          <div className="text-xs text-gray-500">Senior Writer</div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <div>Rating: ★★★★☆</div>
        <div className="mt-2 text-xs">Member since 2024</div>
      </div>
    </div>
  );
}

function SmallCard({ title, value }) {
  return (
    <div className="p-4 border rounded">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}

/* ---------------- Not Found ---------------- */
function NotFound() {
  return (
    <div className="max-w-3xl mx-auto bg-white border rounded p-8 text-center">
      <h2 className="text-2xl font-semibold mb-2">Page not found</h2>
      <p className="text-gray-600 mb-4">We couldn't find that page. Try returning home.</p>
      <Link to="/" className="px-4 py-2 border rounded">Go Home</Link>
    </div>
  );
}

/* ---------------- Notes: Backend & Security ---------------- */
/*
  Integration notes (please read before launching):
  - Authentication: implement JWT or session-based auth on the server and protect /dashboard routes.
  - User roles: writer/client/admin with RBAC checks on server-side APIs.
  - Payments: use Stripe (cards), PayPal, and M-Pesa SDKs for regional payouts. Hold funds in escrow until approval.
  - Data privacy: add a detailed Privacy Policy and Terms of Service pages (routes present but content not included).
  - Anti-fraud: implement KYC for higher tier payouts, rate-limiting, CAPTCHA on signup.
  - Tests: unit and integration tests for core flows (auth, payments, submissions).

  Deployment suggestions:
  - Host frontend on Vercel / Netlify. Backend on Heroku / Render / Fly.io or containerized on AWS/GCP.
  - Use environment variables for API keys and secrets.
*/
