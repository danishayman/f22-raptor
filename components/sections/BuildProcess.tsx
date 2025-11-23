import SectionHeader from "@/components/SectionHeader";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";

export default function BuildProcessSection() {
  return (
    <section id="build-process" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="Build Process" subtitle="Step-by-step construction guide" />
        
        <div className="mb-8 p-4 bg-cyan-950/30 border border-cyan-400/30 rounded-lg">
          <p className="text-gray-300">
            You can download and see the full guide here:{" "}
            <a 
              href="/quick-build-f-22-v2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Quick Build F-22 Guide (PDF)
            </a>
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 1: Install the Carbon Wing Spar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Carbon Wing Spar Installation" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Mask the spar slot</strong> on top and bottom of the wing to protect the foam surface.
                  </li>
                  <li>
                    <strong>Test-fit the carbon rod</strong> to ensure it slides smoothly into the slot without force.
                  </li>
                  <li>
                    <strong>Mix epoxy thoroughly</strong> following the manufacturer&apos;s instructions for proper cure.
                  </li>
                  <li>
                    <strong>Pour epoxy into the slot</strong> (rod not inserted yet) ensuring even coverage along the entire length.
                  </li>
                  <li>
                    <strong>Insert rod, press down, wipe excess</strong> epoxy from the surface immediately with a paper towel.
                  </li>
                  <li>
                    <strong>Remove tape after a few minutes</strong>—don&apos;t glue the wing to the table! This prevents the epoxy from bonding the wing to your work surface.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>
          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 2: Build the Front Fuselage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Align the two front fuse pieces</strong> carefully to ensure a proper fit.
                  </li>
                  <li>
                    <strong>Apply epoxy to the joint</strong> using an even coat along the mating surfaces.
                  </li>
                  <li>
                    <strong>Press together firmly</strong> to create a strong bond.
                  </li>
                  <li>
                    <strong>Keep it straight while curing</strong> to avoid any warping or misalignment.
                  </li>
                  <li>
                    <strong>Make sure it&apos;s not stuck to the table</strong> by using wax paper or a release surface.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Front Fuselage Assembly" aspectRatio="square" />
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 3: Install Canopy + Forward Lower Fuse</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Canopy Installation" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Identify canopy (top) and lower fuse (bottom)</strong> pieces before installation.
                  </li>
                  <li>
                    <strong>Insert both into their slots on the wing</strong> to verify proper fit.
                  </li>
                  <li>
                    <strong>Glue using foam-safe glue</strong> to avoid melting the foam material.
                  </li>
                  <li>
                    <strong>Align canopy with wing surface</strong> for a flush, aerodynamic finish.
                  </li>
                  <li>
                    <strong>Let glue set</strong> completely before handling.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 4: Attach the Bottom Fuselage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Find the small bridging piece</strong> that connects the wing and bottom fuselage.
                  </li>
                  <li>
                    <strong>Glue it between wing and bottom-fuse gap</strong> to create a solid connection point.
                  </li>
                  <li>
                    <strong>Attach the full bottom fuselage piece</strong> to the bridging section.
                  </li>
                  <li>
                    <strong>Center it properly</strong> to maintain symmetry.
                  </li>
                  <li>
                    <strong>Leave it floating</strong>—alignment gets fixed later during final assembly.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Bottom Fuselage" aspectRatio="square" />
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 5: Install Side Engine Intakes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Side Engine Intakes" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Test-fit both intake pieces</strong> to check alignment.
                  </li>
                  <li>
                    <strong>Trim wing slots so intakes can angle inward</strong> for proper F-22 aesthetics.
                  </li>
                  <li>
                    <strong>Dry-fit with tape until symmetrical</strong> to ensure both sides match.
                  </li>
                  <li>
                    <strong>Glue each intake to wing + bottom fuse</strong> for a secure attachment.
                  </li>
                  <li>
                    <strong>Trim tabs protruding through the top</strong> for a clean finish.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 6: Install Front Intakes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Test-fit both pieces</strong> to verify proper placement.
                  </li>
                  <li>
                    <strong>Trim edges for correct inward angle</strong> to match the design.
                  </li>
                  <li>
                    <strong>Align both sides evenly</strong> for symmetrical appearance.
                  </li>
                  <li>
                    <strong>Glue in place</strong> using foam-safe adhesive.
                  </li>
                  <li>
                    <strong>Let dry</strong> completely before moving to the next step.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Front Intakes" aspectRatio="square" />
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 7: Mount Vertical Tails</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Vertical Tail Installation" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Insert fins into top slots</strong> to check the fit.
                  </li>
                  <li>
                    <strong>Trim foam to allow outward angle</strong> for the characteristic F-22 tail cant.
                  </li>
                  <li>
                    <strong>Match angle with the side intakes</strong> to maintain consistent geometry.
                  </li>
                  <li>
                    <strong>Glue (epoxy recommended)</strong> for maximum strength.
                  </li>
                  <li>
                    <strong>Ensure both fins angle similarly</strong> for balanced flight characteristics.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 8: Build & Fit the Hatch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Take hatch piece + scrap foam</strong> for reinforcement.
                  </li>
                  <li>
                    <strong>Add supports using scrap pieces</strong> to strengthen the hatch.
                  </li>
                  <li>
                    <strong>Choose attachment method: velcro, magnets, tape</strong> based on your preference.
                  </li>
                  <li>
                    <strong>Test-fit for snug closure</strong> to prevent it from opening in flight.
                  </li>
                  <li>
                    <strong>Ensure easy removal</strong> for battery and electronics access.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Hatch Assembly" aspectRatio="square" />
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 9: Install Motor Mount</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Motor Mount" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Laminate plywood disc + foam disc with epoxy</strong> to create a strong mount.
                  </li>
                  <li>
                    <strong>Align the combined mount on nose area</strong> ensuring proper motor alignment.
                  </li>
                  <li>
                    <strong>Glue using epoxy</strong> for a permanent, strong bond.
                  </li>
                  <li>
                    <strong>Hold straight while curing</strong> to prevent thrust misalignment.
                  </li>
                  <li>
                    <strong>Clean any squeeze-out</strong> for a professional finish.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 10: Prepare Tailerons (Elevons)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Bevel hinge edge for free movement</strong> to allow full control surface deflection.
                  </li>
                  <li>
                    <strong>Tape-hinge each taileron to the body</strong> using clear packing tape.
                  </li>
                  <li>
                    <strong>Sand if the two tailerons touch in the center</strong> to prevent binding.
                  </li>
                  <li>
                    <strong>Check full travel range</strong> to ensure adequate control authority.
                  </li>
                  <li>
                    <strong>Make sure hinge line is clean</strong> for smooth operation.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Taileron Setup" aspectRatio="square" />
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 11: Install Servos + Linkages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Servo Installation" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Cut servo pockets under the wing</strong> for recessed servo mounting.
                  </li>
                  <li>
                    <strong>Glue servos above the carbon spar</strong> for structural support.
                  </li>
                  <li>
                    <strong>Install control horns on tailerons</strong> at the recommended distance from hinge line.
                  </li>
                  <li>
                    <strong>Connect pushrods</strong> between servos and control horns.
                  </li>
                  <li>
                    <strong>Ensure smooth, binding-free movement</strong> throughout the entire range.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 12: Install Electronics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Mount ESC near airflow path</strong> for adequate cooling.
                  </li>
                  <li>
                    <strong>Install receiver inside fuselage cavity</strong> protected from elements.
                  </li>
                  <li>
                    <strong>Route servo wires cleanly</strong> to avoid interference with moving parts.
                  </li>
                  <li>
                    <strong>Mount motor + prop</strong> securely to the motor mount.
                  </li>
                  <li>
                    <strong>Confirm motor spins the correct direction</strong> for proper thrust.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Electronics Layout" aspectRatio="square" />
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 13: Paint & Finish</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageBlock label="Painted Aircraft" aspectRatio="square" />
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>(Optional) Spray Minwax Poly for foam protection</strong> to seal the surface.
                  </li>
                  <li>
                    <strong>Mask edges for clean patterns</strong> using painter&apos;s tape.
                  </li>
                  <li>
                    <strong>Use foam-safe paint (or test first)</strong> to avoid melting the foam.
                  </li>
                  <li>
                    <strong>Spray multiple light coats</strong> rather than one heavy coat.
                  </li>
                  <li>
                    <strong>Let everything cure fully</strong> before handling or flying.
                  </li>
                </ol>
              </TextBlock>
            </div>
          </div>

          <div>
            <h3 className="text-cyan-400 text-2xl font-bold mb-6">STEP 14: Set Center of Gravity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextBlock>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>CG = 3.25 inches behind wing break</strong> for optimal flight characteristics.
                  </li>
                  <li>
                    <strong>Position battery to achieve balance</strong> by moving it forward or backward.
                  </li>
                  <li>
                    <strong>Hold plane at CG points</strong> with your fingers to test balance.
                  </li>
                  <li>
                    <strong>Adjust until balanced level</strong> with no nose-up or nose-down tendency.
                  </li>
                  <li>
                    <strong>Mark battery location</strong> for consistent placement before each flight.
                  </li>
                </ol>
              </TextBlock>
              <ImageBlock label="Center of Gravity" aspectRatio="square" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
