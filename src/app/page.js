import Clients from "@/components/Clients/Clients";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyUs from "@/components/WhyUs/WhyUs";
import Works from "@/components/Works/Works";

export default function Page(){
  return(
    <>
    <Hero/>
    <Services/>
    <WhyUs/>
    <Works/>
    <Clients/>
    <CTA/>
    </>
  )
}