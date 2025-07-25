import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Zap, 
  Smartphone, 
  Search, 
  Palette, 
  Settings, 
  HeadphonesIcon,
  Clock,
  TrendingDown,
  Users,
  PhoneCall,
  PenTool,
  Rocket,
  CheckCircle,
  Star,
  Shield,
  Award
} from 'lucide-react';

// Import images
import heroMockup from '@/assets/hero-mockup.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Professional Websites That 
                  <span className="text-primary"> Drive Results</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Custom web development for small businesses and startups. Get a website that converts visitors into customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="hero">
                  Start Your Project
                </Button>
                <Button variant="hero-secondary" size="hero">
                  View Portfolio
                </Button>
              </div>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="h-5 w-5 text-accent fill-current" />
                <span className="font-medium">Trusted by 50+ businesses</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="Professional website mockup" 
                className="w-full h-auto rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Is Your Website Holding Your Business Back?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Slow Loading Speeds</h3>
              <p className="text-muted-foreground">Losing customers because your site takes forever to load</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <TrendingDown className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Outdated Design</h3>
              <p className="text-muted-foreground">Hurting credibility with an unprofessional appearance</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Not Mobile-Friendly</h3>
              <p className="text-muted-foreground">Missing 60% of your traffic from mobile users</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-primary">We solve these problems.</p>
          </div>
        </div>
      </section>

      {/* Solution/Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Get A Website That Works For Your Business
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elevated text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Fast Loading Speeds</h3>
              <p className="text-muted-foreground">Under 3 seconds load time guaranteed</p>
            </div>
            
            <div className="card-elevated text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Mobile-Responsive Design</h3>
              <p className="text-muted-foreground">Perfect on all devices and screen sizes</p>
            </div>
            
            <div className="card-elevated text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">SEO Optimized</h3>
              <p className="text-muted-foreground">Built for Google from day one</p>
            </div>
            
            <div className="card-elevated text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Palette className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Professional Design</h3>
              <p className="text-muted-foreground">Modern, clean, and conversion-focused</p>
            </div>
            
            <div className="card-elevated text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Settings className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Easy Management</h3>
              <p className="text-muted-foreground">Update content without technical knowledge</p>
            </div>
            
            <div className="card-elevated text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <HeadphonesIcon className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ongoing Support</h3>
              <p className="text-muted-foreground">Always here when you need help</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">From concept to launch in 2-4 weeks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                1
              </div>
              <div className="space-y-2">
                <PhoneCall className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Discovery Call</h3>
                <p className="text-muted-foreground">Understand your needs and goals</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                2
              </div>
              <div className="space-y-2">
                <PenTool className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Design & Development</h3>
                <p className="text-muted-foreground">Create your custom website</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                3
              </div>
              <div className="space-y-2">
                <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Review & Revisions</h3>
                <p className="text-muted-foreground">Perfect every detail together</p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                4
              </div>
              <div className="space-y-2">
                <Rocket className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Launch & Support</h3>
                <p className="text-muted-foreground">Go live with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Choose Your Package
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="card-elevated space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Starter</h3>
                <div className="text-4xl font-bold text-primary">$1,500</div>
                <p className="text-muted-foreground">Perfect for small businesses</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Up to 5 pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Mobile responsive design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>30 days support</span>
                </li>
              </ul>
              
              <Button variant="outline" size="lg" className="w-full">
                Choose Plan
              </Button>
            </div>

            {/* Professional Package */}
            <div className="card-elevated space-y-6 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Professional</h3>
                <div className="text-4xl font-bold text-primary">$3,000</div>
                <p className="text-muted-foreground">For growing businesses</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Up to 10 pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Blog/News section</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Social media integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>90 days support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Google Analytics setup</span>
                </li>
              </ul>
              
              <Button variant="hero" size="lg" className="w-full">
                Choose Plan
              </Button>
            </div>

            {/* Enterprise Package */}
            <div className="card-elevated space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                <div className="text-4xl font-bold text-primary">$5,000+</div>
                <p className="text-muted-foreground">Custom development</p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Advanced animations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>1 year support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Button variant="accent" size="lg" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-full border border-border">
              <Shield className="h-5 w-5 text-success" />
              <span className="font-semibold text-foreground">100% Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card-elevated space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Our new website increased our online sales by 150% in just 3 months. The team was professional and delivered exactly what we needed."
              </p>
              <div className="flex items-center space-x-4">
                <img src={testimonial1} alt="Client testimonial" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart Inc. - Austin, TX</p>
                </div>
              </div>
            </div>
            
            <div className="card-elevated space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Finally, a website that generates real leads! We went from 2-3 inquiries per month to 20+. Best investment we've made."
              </p>
              <div className="flex items-center space-x-4">
                <img src={testimonial2} alt="Client testimonial" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">Maria Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Owner, Wellness Center - Miami, FL</p>
                </div>
              </div>
            </div>
            
            <div className="card-elevated space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Professional, fast, and results-driven. Our website now ranks #1 on Google for our main keywords. Highly recommended!"
              </p>
              <div className="flex items-center space-x-4">
                <img src={testimonial3} alt="Client testimonial" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">David Chen</p>
                  <p className="text-sm text-muted-foreground">Founder, Digital Agency - San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="timeline" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does it take to build a website?
                </AccordionTrigger>
                <AccordionContent>
                  Most websites are completed within 2-4 weeks from the initial consultation. The timeline depends on the complexity of your project and how quickly you provide feedback and content.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="revisions" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How many revisions are included?
                </AccordionTrigger>
                <AccordionContent>
                  All packages include up to 3 rounds of revisions. We work closely with you to ensure the final product exceeds your expectations. Additional revisions can be accommodated if needed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hosting" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do you provide hosting?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we can arrange reliable hosting for your website. We partner with top hosting providers to ensure fast loading speeds and 99.9% uptime. Hosting costs are separate from development fees.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="maintenance" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What about ongoing maintenance?
                </AccordionTrigger>
                <AccordionContent>
                  We offer ongoing maintenance packages to keep your website secure, updated, and running smoothly. This includes security updates, content changes, and technical support.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cost" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Are there any hidden costs?
                </AccordionTrigger>
                <AccordionContent>
                  No hidden costs! Our pricing is transparent and includes everything mentioned in each package. The only additional costs might be premium plugins, third-party integrations, or hosting, which we'll discuss upfront.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="ownership" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Will I own the website?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Once the project is complete and final payment is received, you own 100% of your website, including all code, content, and assets. We provide full access and documentation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="section-padding bg-primary">
        <div className="container-custom text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
                Ready To Transform Your Online Presence?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join 50+ satisfied clients who've grown their business with a professional website
              </p>
            </div>
            
            <div className="space-y-4">
              <Button variant="accent" size="hero" className="text-xl px-12">
                Start Your Project Today
              </Button>
              <div className="flex items-center justify-center space-x-2 text-primary-foreground/90">
                <Award className="h-5 w-5" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;