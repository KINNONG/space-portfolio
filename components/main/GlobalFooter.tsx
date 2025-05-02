import Link from "next/link";

const GlobalFooter = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 mb-2">© 2025 DeepCore. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors">
              服务条款
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
              隐私政策
            </Link>
            <Link
              href="https://github.com/0xdevpro/deepcore"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
            <Link
              href="https://x.com/DeepCore_io"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 9-5 1.6-1 3-2.2 4-4z" />
              </svg>
            </Link>
            <Link
              href="https://t.me/DeepCoreAI_io"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M21.5 12a9.5 9.5 0 1 1-9.5-9.5 9.5 9.5 0 0 1 9.5 9.5Z" />
                <path d="M15.5 8.5 10 14l-2.5-2.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
