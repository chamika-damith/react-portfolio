import React from 'react';
import { BlogCard } from './BlogCard';
import { BLOGPOST } from '../assets/constants';

export default function Blog() {
  return (
    <article className="relative py-20 px-4 sm:px-6 lg:px-8" data-page="blog">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Latest Articles
            </h2>
          </div>
          
          <p className=" text-zinc-400 max-w-2xl mx-auto">
            Explore the future of technology through my curated insights and discoveries
          </p>
        </header>

        <section className="blog-posts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGPOST.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href='https://medium.com/@chamikadamith9'
              target='blank'
              className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600  hover:bg-slate-800 px-6 py-3 text-white transition  "
            >
              View All
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}