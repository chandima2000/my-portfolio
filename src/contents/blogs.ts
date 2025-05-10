import { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    title: "Setting Up Supabase in a TypeScript Project",
    slug: "setting-up-supabase-typescript",
    excerpt: "A step-by-step guide to integrating Supabase into your TypeScript project with authentication and database setup.",
    date: "2025-04-17",
    readTime: "2 min read",
    image: "./blogs/supabase.png"
  },
  {
    title: "Difference between Contextual Embeddings & Static Embeddings",
    slug: "contextual-vs-static-embeddings",
    excerpt: "Explore how contextual embeddings differ from static ones, and why they matter in modern NLP systems.",
    date: "2025-04-12",
    readTime: "3 min read",
    image: "./blogs/nlp.png"
  },
  {
    title: "Unlocking Observability with Grafana Stack",
    slug: "observability-with-grafana-stack",
    excerpt: "Learn how to use Grafana with Prometheus and Loki to build a powerful observability and monitoring stack.",
    date: "2025-02-14",
    readTime: "3 min read",
    image: "./blogs/grafana.png"
  }
];
