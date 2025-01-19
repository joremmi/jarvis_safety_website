import React from 'react';
import Image from 'next/image';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Understanding Workplace Safety",
        excerpt: "Essential tips for maintaining a safe work environment...",
        date: "2024-01-15",
        imageUrl: "/images/blog/workplace-safety.jpg"
    },
    {
        id: 2,
        title: "Latest Safety Regulations",
        excerpt: "Updates on safety regulations and compliance requirements...",
        date: "2024-01-10",
        imageUrl: "/images/blog/safety-regulations.jpg"
    },
    {
        id: 3,
        title: "Safety Equipment Guide",
        excerpt: "A comprehensive guide to personal protective equipment...",
        date: "2024-01-05",
        imageUrl: "/images/blog/safety-equipment.jpg"
    }
];

const Blog = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Latest Safety Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <time className="text-sm text-gray-500">{post.date}</time>
                                <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                                <p className="text-gray-600">{post.excerpt}</p>
                                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                                    Read More →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;