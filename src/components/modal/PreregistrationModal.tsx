"use client";

import { useState, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import { submitPreregistration } from "@/utils/api";
import styles from "./styles/modal.module.css";

/**
 * Email regex для валідації
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CLOSE_ICON = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SUCCESS_ICON = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#4CAF50"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TEXT = {
  title: "Get Early Access",
  description:
    "Be among the first to experience AI-powered messaging for OnlyFans & Fansly creators.",
  label: "Email Address",
  placeholder: "Enter your email",
  submit: "Join Early Access",
  submitting: "Submitting...",
  disclaimer:
    "We'll only use your email to notify you about early access availability.",
  errorEmpty: "Please enter your email address",
  errorInvalid: "Please enter a valid email address",
  errorSubmit: "Failed to submit. Please try again.",
  successTitle: "Success!",
  successMsg:
    "You've been added to our early access list. We'll notify you when it's ready!",
};

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 */
interface PreregistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreregistrationModal = memo(function PreregistrationModal({
  isOpen,
  onClose,
}: PreregistrationModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setError(TEXT.errorEmpty);
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError(TEXT.errorInvalid);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await submitPreregistration(email.trim());
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setEmail("");
      }, 2000);
    } catch {
      setError(TEXT.errorSubmit);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      setEmail("");
      setError(null);
      setSuccess(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className={styles.overlay} onClick={handleClose}>
      <main
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        aria-modal="true"
        role="dialog"
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close modal"
          disabled={isLoading}
          type="button"
        >
          {CLOSE_ICON}
        </button>
        <section className={styles.content}>
          {success ? (
            <div className={styles.success} aria-live="polite">
              {SUCCESS_ICON}
              <h2>{TEXT.successTitle}</h2>
              <p>{TEXT.successMsg}</p>
            </div>
          ) : (
            <>
              <h2 className={styles.title}>{TEXT.title}</h2>
              <p className={styles.description}>{TEXT.description}</p>
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                autoComplete="off"
                noValidate
              >
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    {TEXT.label}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    placeholder={TEXT.placeholder}
                    disabled={isLoading}
                    required
                    autoFocus
                    aria-required="true"
                    aria-label={TEXT.label}
                  />
                </div>
                {error && (
                  <div className={styles.error} aria-live="assertive">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className={styles.spinner} aria-hidden="true"></div>
                      {TEXT.submitting}
                    </>
                  ) : (
                    TEXT.submit
                  )}
                </button>
              </form>
              <p className={styles.disclaimer}>{TEXT.disclaimer}</p>
            </>
          )}
        </section>
      </main>
    </div>
  );

  return createPortal(modalContent, document.body);
});
