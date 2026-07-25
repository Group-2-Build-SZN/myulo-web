import {
  ShieldCheck,
  Video,
  MapPin,
  Star,
  Target,
  Eye,
  ShieldHalf,
  Lightbulb,
  Users,
  Heart,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import heroImage from "../assets/images/Rectangle 3 (2).png";
import storyImage from "../assets/images/Frame 427318561.png";

import t1 from "../assets/images/Rectangle 36.png";
import t2 from "../assets/images/Rectangle 37.png";
import t3 from "../assets/images/Rectangle 38.png";
import t4 from "../assets/images/Rectangle 39.png";
import t5 from "../assets/images/Rectangle 40.png";
import t6 from "../assets/images/Rectangle 41.png";
import t7 from "../assets/images/Rectangle 42.png";
import t8 from "../assets/images/Rectangle 43.png";
import t9 from "../assets/images/Rectangle 44.png";
import t10 from "../assets/images/Rectangle 45.png";
import t11 from "../assets/images/Rectangle 46.png";
import t12 from "../assets/images/Rectangle 47.png";
import t13 from "../assets/images/Rectangle 48.png";
import t14 from "../assets/images/Rectangle 49.png";
import t15 from "../assets/images/Rectangle 50.png";
import t16 from "../assets/images/Rectangle 50 (1).png";

const features = [
  { icon: ShieldCheck, title: "Verified Listings", description: "Every property is authenticated" },
  { icon: Video, title: "Video Walkthroughs", description: "See real conditions before you go" },
  { icon: MapPin, title: "Smart Maps", description: "Explore neighborhoods with confidence" },
  { icon: Star, title: "Community Reviews", description: "Real experience from real tenants" },
];

const values = [
  { icon: ShieldHalf, title: "Trust", description: "We believe in transparency and honesty in everything we do." },
  { icon: Lightbulb, title: "Innovation", description: "We use technology to create simple and smart solutions." },
  { icon: Users, title: "Customer Focus", description: "Our users are at the heart of every decision we make." },
  { icon: Heart, title: "Community", description: "We are committed to building better communities." },
];

const team = [
  { photo: t1, name: "Chisom Okoh", role: "Lead Product Manager" },
  { photo: t2, name: "Chinazor Echezona", role: "Lead Product Designer" },
  { photo: t3, name: "Makuachukwu Iloabachie", role: "Lead Frontend Dev." },
  { photo: t4, name: "Soromtochukwu Ugwu", role: "Lead Backend Dev." },
  { photo: t5, name: "Ese Omamuyowi", role: "Digital Marketing Lead" },
  { photo: t6, name: "Okoye Gloria", role: "Quality Assurance Lead" },
  { photo: t7, name: "Victor Ezeilo", role: "Lead Data Analyst" },
  { photo: t8, name: "Lauryn Okofu", role: "Product Designer" },
  { photo: t9, name: "Jessica Ukwuegbu", role: "Product Designer" },
  { photo: t10, name: "Chibuikem JonNwakalo", role: "Product Designer" },
  { photo: t11, name: "Patricia Oko", role: "Product Manager" },
  { photo: t12, name: "Oluchukwu Anakor", role: "Backend Dev." },
  { photo: t13, name: "Onu Vivian", role: "Data Analyst" },
  { photo: t14, name: "Odoh praise", role: "Frontend Dev." },
  { photo: t15, name: "Maximus Udeh", role: "Frontend Dev." },
  { photo: t16, name: "Amarachi Obinze", role: "Data Analyst" },
];

export function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-caption font-medium text-primary">
            About My Ulo
          </span>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-h1 font-bold text-neutral">
                Know before you go.
                <br />
                Rent with confidence.
              </h1>
              <p className="mt-4 text-body text-neutral-500">
                My Ulo was built to solve the problems tenants face in
                Nigeria's rental market - deception, hidden issues, and
                wasted money.
              </p>
              <p className="mt-4 text-body text-neutral-500">
                We use technology, verification, and transparency to help you
                find properties you can trust.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {features.map((f) => (
                  <div key={f.title}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <f.icon size={18} />
                    </span>
                    <p className="mt-2 text-small font-semibold text-neutral">
                      {f.title}
                    </p>
                    <p className="text-caption text-neutral-500">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={heroImage}
              alt="My Ulo verified property"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-h2 font-bold text-neutral">Our Story</h2>
              <div className="mt-4 flex flex-col gap-4 text-body text-neutral-500">
                <p>
                  Finding a home in Nigeria should be exciting - not
                  stressful. Yet for many renters, the journey is filled with
                  fake property listings, expensive inspection fees,
                  misleading information, and uncertainty about the people
                  behind the listings.
                </p>
                <p>That's why My Ulo was created.</p>
                <p>
                  We believe everyone deserves access to honest property
                  information before making one of life's biggest decisions.
                  Our platform combines verified property listings,
                  identity-verified landlords and agents, authentic video
                  walkthroughs, neighborhood insights, and trusted community
                  reviews to help renters make informed choices with
                  confidence.
                </p>
                <p>
                  At My Ulo, we're more than a property platform - we're
                  building a future where transparency replaces uncertainty
                  and trust becomes the standard in Nigeria's rental market.
                  Whether you're searching for your first apartment,
                  relocating, or listing a property, we're here to make the
                  experience safer, smarter, and simpler.
                </p>
                <p className="font-semibold text-neutral">Know Before You Go.</p>
              </div>
            </div>

            <img
              src={storyImage}
              alt="A well decorated living room"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <Target size={20} />
              </span>
              <h3 className="mt-4 text-h4 font-semibold text-neutral">
                Our Mission
              </h3>
              <p className="mt-2 text-body text-neutral-500">
                To transform the property rental experience in Nigeria by
                providing a trusted platform where users can discover
                verified listings, validate property information, and make
                confident housing decisions through transparency, innovation,
                and security.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <Eye size={20} />
              </span>
              <h3 className="mt-4 text-h4 font-semibold text-neutral">
                Our Vision
              </h3>
              <p className="mt-2 text-body text-neutral-500">
                To become Nigeria's most trusted property verification
                platform, creating a future where everyone can find, verify,
                and secure a home with confidence - free from scams,
                misinformation, and uncertainty.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-h2 font-bold text-neutral">Our Values</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-neutral-200 p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <v.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-h4 font-semibold text-neutral">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-small text-neutral-500">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-h2 font-bold text-neutral">Meet the Team</h2>
            <p className="mt-2 text-body text-neutral-500">
              We're a passionate team working together to make property
              search better for everyone.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="text-left">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-[6/5] w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 text-body font-semibold text-neutral">
                    {member.name}
                  </p>
                  <p className="text-small text-neutral-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
