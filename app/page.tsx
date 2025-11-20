import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto text-center">
            <div className="border-4 border-cyan-400/50 p-12 max-w-4xl mx-auto bg-blueprint-blue/10">
              <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 tracking-wider mb-4">
                DIY RC PLANE
              </h1>
              <div className="text-xl md:text-2xl text-cyan-200/80 tracking-widest mb-6">
                TECHNICAL CONSTRUCTION GUIDE
              </div>
              <div className="flex gap-4 justify-center items-center text-xs text-cyan-200/60">
                <span>PROJECT ID: F22-RAPTOR</span>
                <span>|</span>
                <span>STATUS: BLUEPRINT</span>
                <span>|</span>
                <span>VERSION: 1.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why I Built This Section */}
        <section id="why-i-built-this" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Why I Built This" subtitle="Project motivation and objectives" />
            <TextBlock>
              <p className="mb-4">This section will contain the story and motivation behind building this RC plane.</p>
              <p>Placeholder content for personal experience, challenges faced, and goals achieved.</p>
            </TextBlock>
          </div>
        </section>

        {/* Materials Section */}
        <section id="materials" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Materials" subtitle="Complete bill of materials" />
            <div className="grid md:grid-cols-2 gap-6">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Airframe Materials</h3>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Foam board</li>
                  <li>Balsa wood</li>
                  <li>Carbon fiber rods</li>
                  <li>Plywood sheets</li>
                </ul>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Adhesives & Finishing</h3>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Hot glue</li>
                  <li>CA glue</li>
                  <li>Tape (packing, masking)</li>
                  <li>Paint & primer</li>
                </ul>
              </TextBlock>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Tools" subtitle="Required equipment and instruments" />
            <TextBlock>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Cutting Tools</h4>
                  <p>Utility knife, hot wire cutter, saw</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Measuring Tools</h4>
                  <p>Ruler, calipers, protractor</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold mb-2">Assembly Tools</h4>
                  <p>Glue gun, soldering iron, screwdrivers</p>
                </div>
              </div>
            </TextBlock>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Plans" subtitle="Technical drawings and specifications" />
            <div className="space-y-6">
              <ImageBlock label="Wing Schematic" aspectRatio="wide" />
              <ImageBlock label="Fuselage Cross-Section" aspectRatio="video" />
              <TextBlock>
                <p className="text-xs">Download links and detailed measurements will be provided here.</p>
              </TextBlock>
            </div>
          </div>
        </section>

        {/* Build Process Section */}
        <section id="build-process" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Build Process" subtitle="Step-by-step construction guide" />
            <div className="space-y-8">
              <div>
                <h3 className="text-cyan-400 text-lg font-bold mb-4">STEP 1: Wing Construction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ImageBlock label="Wing Assembly" aspectRatio="square" />
                  <TextBlock>
                    <p className="text-xs">Detailed instructions for wing construction, including cutting patterns and assembly sequence.</p>
                  </TextBlock>
                </div>
              </div>
              <div>
                <h3 className="text-cyan-400 text-lg font-bold mb-4">STEP 2: Fuselage Assembly</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <TextBlock>
                    <p className="text-xs">Instructions for building the fuselage structure and mounting points.</p>
                  </TextBlock>
                  <ImageBlock label="Fuselage Frame" aspectRatio="square" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electronics Section */}
        <section id="electronics" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Electronics" subtitle="Avionics and control systems" />
            <div className="grid md:grid-cols-2 gap-6">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Required Components</h3>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>ESC (Electronic Speed Controller)</li>
                  <li>Brushless motor</li>
                  <li>Receiver & transmitter</li>
                  <li>Servo motors (x4)</li>
                  <li>LiPo battery</li>
                </ul>
              </TextBlock>
              <ImageBlock label="Wiring Diagram" aspectRatio="square" />
            </div>
          </div>
        </section>

        {/* First Flight Section */}
        <section id="first-flight" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="First Flight" subtitle="Pre-flight checks and maiden flight" />
            <div className="space-y-6">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Pre-Flight Checklist</h3>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Control surface movement check</li>
                  <li>CG (Center of Gravity) verification</li>
                  <li>Battery charge level</li>
                  <li>Weather conditions assessment</li>
                </ul>
              </TextBlock>
              <ImageBlock label="First Flight Documentation" aspectRatio="video" />
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section id="troubleshooting" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Troubleshooting" subtitle="Common issues and solutions" />
            <div className="space-y-4">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">Issue: Plane Won't Take Off</h3>
                <p className="text-xs">Check motor thrust, weight distribution, and control surface deflection.</p>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">Issue: Unstable Flight</h3>
                <p className="text-xs">Verify CG position, check for warped wings, adjust trim settings.</p>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">Issue: Poor Range</h3>
                <p className="text-xs">Inspect antenna placement, check receiver battery, verify transmitter settings.</p>
              </TextBlock>
            </div>
          </div>
        </section>

        {/* Modifications Section */}
        <section id="modifications" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Modifications" subtitle="Upgrades and customizations" />
            <div className="grid md:grid-cols-2 gap-6">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Performance Mods</h3>
                <p className="text-xs mb-2">Suggestions for improving flight characteristics:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Upgraded motor and prop</li>
                  <li>Ailerons for better control</li>
                  <li>Flaps for slower landing</li>
                </ul>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Aesthetic Mods</h3>
                <p className="text-xs mb-2">Visual enhancements:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Custom paint schemes</li>
                  <li>LED lighting</li>
                  <li>Decals and markings</li>
                </ul>
              </TextBlock>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Gallery" subtitle="Build photos and flight footage" />
            <div className="grid md:grid-cols-3 gap-6">
              <ImageBlock label="Build Photo 1" aspectRatio="square" />
              <ImageBlock label="Build Photo 2" aspectRatio="square" />
              <ImageBlock label="Build Photo 3" aspectRatio="square" />
              <ImageBlock label="Flight Photo 1" aspectRatio="square" />
              <ImageBlock label="Flight Photo 2" aspectRatio="square" />
              <ImageBlock label="Flight Photo 3" aspectRatio="square" />
            </div>
          </div>
        </section>

        {/* What I Learned Section */}
        <section id="what-i-learned" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="What I Learned" subtitle="Key takeaways and insights" />
            <TextBlock>
              <div className="space-y-4 text-xs">
                <p><strong className="text-cyan-400">Lesson 1:</strong> Proper CG is critical for stable flight.</p>
                <p><strong className="text-cyan-400">Lesson 2:</strong> Take time with the build - rushing leads to mistakes.</p>
                <p><strong className="text-cyan-400">Lesson 3:</strong> Test electronics before final assembly.</p>
                <p><strong className="text-cyan-400">Lesson 4:</strong> Weather conditions matter more than you think.</p>
              </div>
            </TextBlock>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Resources" subtitle="Helpful links and references" />
            <div className="grid md:grid-cols-2 gap-6">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Online Communities</h3>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>RC Groups Forums</li>
                  <li>FliteTest Community</li>
                  <li>r/radiocontrol</li>
                </ul>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-3">Suppliers</h3>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>HobbyKing</li>
                  <li>Flite Test Store</li>
                  <li>Amazon (various)</li>
                </ul>
              </TextBlock>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="FAQ" subtitle="Frequently asked questions" />
            <div className="space-y-4">
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">How much does it cost to build?</h3>
                <p className="text-xs">Total cost varies, but expect $100-300 depending on components chosen.</p>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">How long does the build take?</h3>
                <p className="text-xs">Approximately 10-20 hours spread over a few weekends.</p>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">Do I need prior experience?</h3>
                <p className="text-xs">No prior experience required, but patience and attention to detail are essential.</p>
              </TextBlock>
              <TextBlock>
                <h3 className="text-cyan-400 font-bold mb-2">What's the flight time?</h3>
                <p className="text-xs">Typically 8-15 minutes depending on battery size and flying style.</p>
              </TextBlock>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-blueprint-blue/5">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="Contact" subtitle="Get in touch" />
            <TextBlock>
              <div className="text-center space-y-4">
                <p className="text-xs">Questions about the build? Want to share your own RC plane project?</p>
                <div className="border-t border-cyan-400/30 pt-4 mt-4">
                  <p className="text-cyan-400 text-sm">contact@rcplaneblueprint.com</p>
                  <p className="text-xs text-cyan-200/60 mt-2">Response time: 24-48 hours</p>
                </div>
              </div>
            </TextBlock>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
