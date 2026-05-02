import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-card-background border-t border-accent-teal/10">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl font-bold text-foreground mb-2">
              <span className="text-accent-teal">{"<"}</span>
              BAN
              <span className="text-accent-teal">{"/>"}</span>
            </div>
            <p className="text-muted-text text-sm">
              Building scalable backend systems and AI-powered applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/baoandng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent-teal transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/baoandng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent-teal transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:baoandng07@gmail.com"
              className="text-muted-text hover:text-accent-teal transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-text text-sm">
              © {new Date().getFullYear()} Quoc Bao An Nguyen
            </p>
            <p className="text-muted-text text-xs mt-1">All rights reserved.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-accent-teal/10 text-center">
          <p className="text-muted-text text-sm">
            Available for Software Engineering Internship opportunities
          </p>
          <a
            href="mailto:baoandng07@gmail.com"
            className="text-accent-teal hover:text-accent-teal/80 transition-colors text-sm font-medium"
          >
            baoandng07@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
