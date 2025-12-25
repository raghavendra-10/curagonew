// GTM Tracking Utilities for ALM Landing Page

// Helper: Get referral code from URL
const getRefFromUrl = () => {
  if (typeof window === 'undefined') return undefined;
  const u = new URL(window.location.href);
  const ref = u.searchParams.get('ref') || undefined;
  return ref || undefined;
};

// Initialize dataLayer
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Virtual pageview for SPA navigation
export function trackVirtualPage(opts) {
  if (typeof window === 'undefined') return;

  const loc = window.location;
  const page_path = opts.path ?? `${loc.pathname}${loc.search}${loc.hash}`;
  const ref = getRefFromUrl();

  window.dataLayer?.push({
    event: 'virtual_pageview',
    page_title: opts.title,
    page_path,
    page_location: loc.href,
    referrer_code: ref,
  });

  console.log(`✅ Tracking: Virtual page view - ${opts.title}`);
}

// Page view tracking
export const trackPageView = (pageName, pageTitle) => {
  if (typeof window === 'undefined') return;
  trackVirtualPage({ title: pageTitle || pageName });
  console.log(`✅ Tracking: Page view for ${pageName}`);
};

// Button click tracking
export const trackButtonClick = (buttonName, buttonType, source) => {
  if (typeof window === 'undefined') return;

  window.dataLayer?.push({
    event: 'button_click',
    buttonName,
    buttonType,
    clickSource: source,
    event_category: 'Button',
    event_label: buttonName,
    button_type: buttonType,
    click_source: source,
  });

  console.log('✅ Tracking: Button click -', buttonName, buttonType, 'from', source);
};

// CTA click tracking
export const trackCTA = (ctaName, source, extras = {}) => {
  if (typeof window === 'undefined') return;

  window.dataLayer?.push({
    event: 'cta_click',
    ctaName,
    source,
    content_type: 'cta',
    item_id: ctaName,
    ...extras,
  });

  console.log('✅ Tracking: CTA click -', ctaName, 'from', source);
};

// Section view tracking
export const trackSectionView = (sectionName) => {
  if (typeof window === 'undefined') return;

  window.dataLayer?.push({
    event: 'section_view',
    sectionName,
    event_category: 'Engagement',
    event_label: sectionName,
  });

  console.log('✅ Tracking: Section view -', sectionName);
};

// Payment initiation tracking
export const trackPaymentInitiation = (testType, amount, currency = 'INR') => {
  if (typeof window === 'undefined') return;

  const ref = getRefFromUrl();

  window.dataLayer?.push({
    event: 'initiatecheckout',
    test_type: testType,
    amount: amount,
    currency: currency,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    referrer_code: ref,
  });

  console.log(`✅ Tracking: Payment initiated - ${testType}, ${currency} ${amount}`);
};

// Conversion tracking
export const trackConversion = (value, currency = 'INR', transactionId, referral) => {
  if (typeof window === 'undefined') return;

  const refParam = getRefFromUrl();

  window.dataLayer?.push({
    event: 'conversion',
    conversionValue: value,
    value,
    currency,
    transactionId,
    transaction_id: transactionId,
    referralCode: referral?.code || refParam,
    referralLink: referral?.link,
  });

  console.log(`✅ Tracking: Conversion of ${currency} ${value}`);
};

// WhatsApp click tracking
export const trackWhatsAppClick = (source) => {
  if (typeof window === 'undefined') return;

  window.dataLayer?.push({
    event: 'contact_method_click',
    contactMethod: 'whatsapp',
    source,
    event_category: 'Engagement',
    event_label: source,
    method: 'whatsapp',
  });

  console.log(`✅ Tracking: WhatsApp clicked from ${source}`);
};

// Form submission tracking
export const trackFormSubmission = (formType, formData, referral) => {
  if (typeof window === 'undefined') return;

  const refParam = getRefFromUrl();

  window.dataLayer?.push({
    event: 'form_submission',
    formType,
    formName:
      formType === 'appointment'
        ? 'Appointment Booking'
        : formType === 'contact'
        ? 'Contact Form'
        : 'Lead Form',
    formValue: formType === 'appointment' ? 1200 : 0,
    value: formType === 'appointment' ? 1200 : 0,
    currency: 'INR',
    referralCode: referral?.code || refParam,
    referralLink: referral?.link,
    formData: {
      hasName: !!formData?.name,
      hasEmail: !!formData?.email,
      hasPhone: !!formData?.phone,
    },
  });

  console.log(`✅ Tracking: ${formType} form submitted`);
};
