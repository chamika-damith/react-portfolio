import { BLOGPOST } from "../assets/constants"
export default function Blog() {
    return (
        <article className="p-8 mb-20 " data-page="blog">
            <header>
                <h2 className="my-20 text-center text-4xl">
                    Blog
                </h2>
            </header>
            <section className="blog-posts">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {BLOGPOST.map((post, index) => (
                        <li
                            className="overflow-hidden bg-zinc-900 rounded-lg shadow-md transition-transform transform hover:scale-105"
                            key={index}
                        >
                            <a href="/" className="block h-full">
                                <figure className="blog-banner-box">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        className="w-full h-48 object-cover rounded-t-lg"
                                        width={600}
                                        height={400}
                                    />
                                </figure>
                                <div className="p-5 flex flex-col justify-between h-full">
                                    <div className=" mb-3 text-sm">
                                        <time dateTime={post.date} className="text-gray-400">{post.date}</time>
                                        <p className="text-lg text-white mt-2">{post.title}</p>
                                        <p className="text-gray-300 mb-4 mt-2">{post.excerpt}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}