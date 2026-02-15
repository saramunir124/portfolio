'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ProjectImage({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="h-64 w-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
        <span className="text-white text-2xl font-bold text-center px-4">{name}</span>
      </div>
    );
  }

  // Check if it's an external URL (starts with http)
  if (src.startsWith('http')) {
    return (
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={false}
        />
      </div>
    );
  }

  // Use regular img tag for SVG files
  if (src.endsWith('.svg')) {
    return (
      <div className="relative h-64 w-full bg-gradient-to-br from-indigo-400 to-purple-500 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Use Next.js Image component for local images
  return (
    <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => setImageError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      name: 'Future Dev Solutions',
      description: 'Company portfolio website showcasing services and expertise. Built with modern web technologies to create an engaging user experience.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Aceternity UI'],
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      name: 'OrbyPOS',
      description: 'Restaurant Management System - A comprehensive platform for managing menus, orders, billing, and reservations. Streamlined operations for restaurant businesses.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      features: ['Menu Management', 'Order Processing', 'Billing System', 'Reservation Management', 'Real-time Updates'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
    },
    {
      name: 'QI Tech',
      description: 'Workflow automation tool to create logic-based forms, manage data, and improve reporting processes. Helps businesses automate their workflows efficiently.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Material UI'],
      features: ['Form Builder', 'Workflow Automation', 'Data Management', 'Custom Reports', 'User Dashboard'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      name: 'Delice Pizza',
      description: 'E-commerce platform for pizza ordering and delivery. Complete solution with menu browsing, cart management, and order tracking.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration', 'Order Tracking'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop'
    },
    {
      name: 'French Tacos',
      description: 'Restaurant website with online ordering system. Modern design with seamless ordering experience for customers.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS'],
      features: ['Online Menu', 'Order Placement', 'Responsive Design', 'Fast Loading'],
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop'
    },
    {
      name: 'Rapido Pizza',
      description: 'Pizza delivery platform with real-time order tracking. Built for fast and efficient pizza ordering experience.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Quick Ordering', 'Real-time Tracking', 'Multiple Payment Options', 'User Accounts'],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop'
    },
    {
      name: 'British Energy Grants',
      description: 'Platform for managing energy grant applications. Streamlined process for users to apply and track their grant applications.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Application Forms', 'Document Upload', 'Status Tracking', 'Admin Dashboard'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    },
    {
      name: 'Shahzad Collection Brand Shop',
      description: 'E-commerce platform for fashion brand with complete shopping experience. Features product catalog, shopping cart, checkout, and order management system.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Gateway', 'Order Management', 'Admin Dashboard'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Portfolio Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Check out my Portfolio</h1>
          <p className="text-xl text-gray-600">Here's what I have done in the past</p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
                <div className="overflow-hidden">
                  <ProjectImage src={project.image} alt={project.name} name={project.name} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
