"use client";

export default function Footer() {
  return (
    <footer id="footer" className="w-full translate-y-32">
      <p className="font-mono text-gray-200 text-center">
        &copy; {new Date().getFullYear()} KD. All rights reserved.
      </p>
    </footer>
  );
}
