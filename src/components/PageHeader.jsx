import { useLocation, Link } from "react-router-dom";

const pageTitles = {
    "/": "Home",
    "/contact": "Contact",
    "/about": "About",
    "/projects": "Projects",
    "/services": "Services",
};

export default function PageHeader() {
    const location = useLocation();
    const currentPath = location.pathname;

    const title = pageTitles[currentPath] || "Page";

    return (
        <section className="py-16 bg-gradient-to-br from-1-700 via-transparent to-[#00C853]/10 text-center relative overflow-hidden">
            {/* Decorative dots (like your screenshot) */}
            <span className="w-2 h-2 bg-orange-400 rounded-full absolute top-10 left-10"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full absolute top-6 right-20"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full absolute bottom-10 left-1/4"></span>
            <span className="w-2 h-2 bg-teal-400 rounded-full absolute right-1/3 top-1/3"></span>
            <span className="w-2 h-2 bg-orange-400 rounded-full absolute bottom-20 right-16"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full absolute top-1/2 left-5"></span>

            {/* PAGE TITLE */}
            <h1 className="text-4xl font-bold text-gray-900 relative z-10">
                {title}
            </h1>

            {/* breadcrumb */}
            <div className="mt-2 text-gray-600 relative z-10">
                <Link to="/" className="hover:text-1-500 transition">
                    Home
                </Link>
                <span className="mx-2">•</span>
                <span className="text-gray-700">{title}</span>
            </div>
        </section>
    );
}
