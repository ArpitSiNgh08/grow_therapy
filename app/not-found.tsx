import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            <h2 className="text-4xl font-black text-text-main mb-4">404 - Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
                Return Home
            </Link>
        </div>
    )
}
