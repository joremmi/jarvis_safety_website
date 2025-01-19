// app/page.tsx

import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import ContactSection from "@/components/Contact";
import TestimonialSection from "@/components/Testimonial";
import GallerySection from "@/components/Gallery";
import TeamSection from "@/components/Team";
import BlogSection from "@/components/Blog";
import FAQSection from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <ServicesSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <WhyChooseUsSection />
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <TestimonialSection />
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-100">
        <GallerySection />
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <TeamSection />
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-100">
        <BlogSection />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <ContactSection />
      </section>

    </main>
  );
}
