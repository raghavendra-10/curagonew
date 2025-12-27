'use client'

import { useState } from 'react'

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modalName) => {
    setActiveModal(modalName)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-surface rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden premium-shadow-lg" onClick={(e) => e.stopPropagation()}>
          <div className="sticky top-0 bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-surface-muted flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-80px)]">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <footer className="bg-surface border-t border-border py-12">
        <div className="w-full max-w-container mx-auto px-[4%]">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={() => openModal('terms')}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Terms and Conditions
            </button>
            <button
              onClick={() => openModal('privacy')}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('termsOfUse')}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Terms of Use
            </button>
            <button
              onClick={() => openModal('refund')}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Refund Policy
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center mb-6">
            <p className="text-sm text-secondary mb-2">
              © 2025 Curago Health Networking Private Limited
            </p>
            <p className="text-sm text-muted">
              A clinical assessment tool designed to help you understand anxiety patterns.
            </p>
          </div>

          {/* Contact Details */}
          <div className="text-center">
            <p className="text-sm text-secondary mb-1">
              Contact: support@curago.health
            </p>
            <p className="text-sm text-muted">
              Available Monday - Friday, 9:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Terms and Conditions"
      >
        <div className="prose prose-sm max-w-none">
          <p className="text-secondary mb-4">
            By accessing and using the CuraGo Anxiety Loop Assessment, you agree to the following terms and conditions:
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">1. Service Description</h4>
          <p className="text-secondary mb-4">
            The Anxiety Loop Assessment is a self-assessment tool designed to help you understand your anxiety patterns. It is not a diagnostic tool, therapy, or medical treatment.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">2. User Responsibilities</h4>
          <p className="text-secondary mb-4">
            You are responsible for providing accurate information during the assessment. The results are based on your self-reported responses.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">3. Limitation of Liability</h4>
          <p className="text-secondary mb-4">
            This assessment does not replace professional medical advice. If you are experiencing severe anxiety or mental health concerns, please consult a licensed healthcare professional.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">4. Intellectual Property</h4>
          <p className="text-secondary mb-4">
            All content, assessment methodology, and reports are the intellectual property of Curago Health Networking Private Limited.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">5. Modifications</h4>
          <p className="text-secondary mb-4">
            We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <div className="prose prose-sm max-w-none">
          <p className="text-secondary mb-4">
            At CuraGo, we are committed to protecting your privacy and personal information.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">1. Information We Collect</h4>
          <p className="text-secondary mb-4">
            We collect information you provide during the assessment, including your responses to questions and basic contact information for delivering your report.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">2. How We Use Your Information</h4>
          <p className="text-secondary mb-4">
            Your information is used solely to generate your personalized assessment report and improve our services. We never share your personal data with third parties without your explicit consent.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">3. Data Security</h4>
          <p className="text-secondary mb-4">
            All data is encrypted and stored securely using industry-standard security protocols. We implement strict access controls to protect your information.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">4. Data Retention</h4>
          <p className="text-secondary mb-4">
            Your assessment data is retained for the purpose of providing you access to your report. You may request deletion of your data at any time by contacting support.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">5. Cookies and Tracking</h4>
          <p className="text-secondary mb-4">
            We use essential cookies for service functionality and analytics cookies to improve user experience. You can control cookie preferences through your browser settings.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">6. Your Rights</h4>
          <p className="text-secondary mb-4">
            You have the right to access, correct, or delete your personal information. Contact us at support@curago.health for any privacy-related requests.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'termsOfUse'}
        onClose={closeModal}
        title="Terms of Use"
      >
        <div className="prose prose-sm max-w-none">
          <p className="text-secondary mb-4">
            These Terms of Use govern your access to and use of the CuraGo Anxiety Loop Assessment service.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">1. Acceptable Use</h4>
          <p className="text-secondary mb-4">
            You agree to use this service only for its intended purpose of understanding your anxiety patterns. You may not misuse, abuse, or attempt to manipulate the assessment.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">2. Account and Payment</h4>
          <p className="text-secondary mb-4">
            Payment of ₹299 is required to access the assessment. All payments are processed securely through Razorpay.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">3. Service Availability</h4>
          <p className="text-secondary mb-4">
            We strive to maintain service availability but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">4. Prohibited Activities</h4>
          <p className="text-secondary mb-4">
            You may not: reverse engineer the assessment, share your access credentials, use the service for commercial purposes without authorization, or attempt to compromise system security.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">5. Termination</h4>
          <p className="text-secondary mb-4">
            We reserve the right to terminate or suspend access to the service for violation of these terms.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">6. Dispute Resolution</h4>
          <p className="text-secondary mb-4">
            Any disputes arising from use of this service shall be governed by the laws of India and subject to the jurisdiction of courts in Bangalore, Karnataka.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'refund'}
        onClose={closeModal}
        title="Refund Policy"
      >
        <div className="prose prose-sm max-w-none">
          <p className="text-secondary mb-4">
            We want you to be satisfied with your CuraGo Anxiety Loop Assessment experience.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">1. Refund Eligibility</h4>
          <p className="text-secondary mb-4">
            Refund requests are accepted within 7 days of purchase under the following conditions:
          </p>
          <ul className="list-disc pl-6 text-secondary mb-4 space-y-2">
            <li>Technical issues prevented you from completing the assessment</li>
            <li>You did not receive your assessment report after completion</li>
            <li>Service was unavailable for an extended period</li>
          </ul>

          <h4 className="text-primary font-semibold mt-6 mb-3">2. Non-Refundable Conditions</h4>
          <p className="text-secondary mb-4">
            Refunds will not be provided if:
          </p>
          <ul className="list-disc pl-6 text-secondary mb-4 space-y-2">
            <li>You have completed the assessment and received your report</li>
            <li>You are dissatisfied with the content of your results</li>
            <li>More than 7 days have passed since purchase</li>
          </ul>

          <h4 className="text-primary font-semibold mt-6 mb-3">3. Consultation Credit</h4>
          <p className="text-secondary mb-4">
            If you book a clinical consultation within 7 days of completing the assessment, 50% of the ₹299 assessment fee (₹149.50) will be adjusted against the consultation cost.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">4. How to Request a Refund</h4>
          <p className="text-secondary mb-4">
            To request a refund, contact us at support@curago.health with your order details and reason for the refund request. Refunds are typically processed within 7-10 business days.
          </p>

          <h4 className="text-primary font-semibold mt-6 mb-3">5. Partial Refunds</h4>
          <p className="text-secondary mb-4">
            Partial refunds may be offered at our discretion in cases where service was partially delivered or technical issues were resolved after significant delay.
          </p>
        </div>
      </Modal>
    </>
  )
}
