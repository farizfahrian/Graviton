import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = () => {
  return (
    <section className="relative z-10 w-full mx-auto mt-2 pt-20 md:pt-40">
      <div className="md:px-10">
        <div className="grid p-10 bg-white shadow-md md:grid-cols-2 sm:grid-row-2 rounded-3xl md:p-10">

          <div >
            <h2 className="text-2xl font-bold text-gray-950 md:text-4xl">
              Got any questions? <br />
              We&apos;ve got you!
            </h2>
            <p className="text-lg bg-transparent"> Find the answers you need</p>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Why choose our subscription model over hiring a full-time employee?</AccordionTrigger>
              <AccordionContent>
                The cost of hiring and managing full-time employee can quickly add up. Salaries for senior professionals can range from $100,000 to $300,000 annually, and when you factor in benefits, overhead, and potential turnover, the total investment can easily exceed $500,000.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What happens if I&apos;m not completely happy with the results?</AccordionTrigger>
              <AccordionContent>
                At Graviton, your satisfaction is our priority.  That&apos;s why all our subscriptions include unlimited revisions. We&apos;ll work closely with you to refine your project until you&apos;re satisfied with the outcome.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What if I don&apos;t have any design requests this month?
              </AccordionTrigger>
              <AccordionContent>
                Our subscriptions offer flexibility. You can simply pause your plan and pick it back up later when you have new requests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b-0" value="item-4">
              <AccordionTrigger>
                Can I get a refund on my subscription?
              </AccordionTrigger>
              <AccordionContent>
                At our agency, we prioritize building long-term partnerships with our clients. While we don&apos;t offer traditional refunds due to the dedicated resources assigned to each subscription, we understand the need for flexibility. You have the power to pause your subscription at any time and resume whenever needed. This ensures you can maximize the value of our collaboration and only pay for the services you require.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </section>
  );
}

export default FAQS;