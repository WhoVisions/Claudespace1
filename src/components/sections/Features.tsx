import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, Boxes, Globe, Code, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built on Next.js 16 with Turbopack for blazing fast performance and optimal SEO.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security with automatic updates and monitoring.',
  },
  {
    icon: Boxes,
    title: 'Modular Design',
    description: 'Component-based architecture that scales with your needs.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Deploy worldwide with edge functions for minimal latency.',
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'TypeScript, hot reload, and modern tooling for productive development.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless team workflows and project management.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features to help you build and scale your product faster than ever before.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-2 hover:shadow-lg transition-shadow duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
