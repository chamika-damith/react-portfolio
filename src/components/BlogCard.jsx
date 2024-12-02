import React from 'react';
import { CalendarDays, ArrowUpRight } from 'lucide-react';

export function BlogCard({ post }) {
  return (
    <div className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-2xl overflow-hidden backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent opacity-80" />
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        <div className="flex items-center gap-2 text-zinc-400 mb-3">
          <CalendarDays size={16} />
          <time className="text-sm">{post.date}</time>
        </div>

        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
          {post.title}
        </h3>

        <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>

        {/* Read More Section */}
        <div className="flex items-center justify-between">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors"
          >
            <span className="text-sm font-medium">Read More</span>
            <ArrowUpRight
              size={16}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
