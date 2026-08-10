import { config, fields, collection, singleton } from '@keystatic/core';

const githubRepo =
  import.meta.env.PUBLIC_KEYSTATIC_GITHUB_REPO ||
  'justbrown1980/wandin-baptist-website';

export default config({
  storage: import.meta.env.DEV
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: githubRepo,
      },
  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings/',
      schema: {
        churchName: fields.text({ label: 'Church name' }),
        serviceTime: fields.text({ label: 'Service time' }),
        addressLine1: fields.text({ label: 'Address line 1' }),
        addressLine2: fields.text({ label: 'Address line 2' }),
        addressLine3: fields.text({ label: 'Address line 3' }),
        phone: fields.text({ label: 'Phone' }),
        email: fields.text({ label: 'Email' }),
        postalAddress: fields.text({ label: 'Postal address' }),
        mapsUrl: fields.url({ label: 'Maps directions URL' }),
        givewayUrl: fields.url({ label: 'Giving / Giveway URL' }),
        youtubeUrl: fields.url({ label: 'YouTube URL' }),
        copyrightStartYear: fields.integer({
          label: 'Copyright start year',
          defaultValue: 2015,
        }),
        copyrightEndYear: fields.integer({
          label: 'Copyright end year',
          defaultValue: 2026,
        }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images',
          publicPath: '/images/',
        }),
      },
    }),
    home: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home/',
      format: { contentField: 'intro' },
      schema: {
        heroHeadline: fields.text({ label: 'Hero headline' }),
        heroSubline: fields.text({ label: 'Hero subline' }),
        primaryCtaLabel: fields.text({ label: 'Primary CTA label' }),
        primaryCtaHref: fields.text({ label: 'Primary CTA href' }),
        youtubeCtaLabel: fields.text({ label: 'YouTube CTA label' }),
        heroImage: fields.image({
          label: 'Hero image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        galleryImage1: fields.image({
          label: 'Gallery image 1',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        galleryImage1Alt: fields.text({ label: 'Gallery image 1 alt' }),
        galleryImage2: fields.image({
          label: 'Gallery image 2',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        galleryImage2Alt: fields.text({ label: 'Gallery image 2 alt' }),
        galleryImage3: fields.image({
          label: 'Gallery image 3',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        galleryImage3Alt: fields.text({ label: 'Gallery image 3 alt' }),
        intro: fields.markdoc({ label: 'Intro content' }),
      },
    }),
    pastor: singleton({
      label: 'Meet the Pastor',
      path: 'src/content/pages/pastor/',
      format: { contentField: 'bio' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        name: fields.text({ label: 'Name' }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        photoAlt: fields.text({ label: 'Photo alt text' }),
        bio: fields.markdoc({ label: 'Biography' }),
      },
    }),
    contact: singleton({
      label: 'Contact Page',
      path: 'src/content/pages/contact/',
      format: { contentField: 'intro' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        intro: fields.markdoc({ label: 'Intro' }),
      },
    }),
    safeChurch: singleton({
      label: 'Safe Church',
      path: 'src/content/pages/safe-church/',
      format: { contentField: 'body' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        policyPdfLabel: fields.text({ label: 'Policy PDF label' }),
        policyPdfHref: fields.text({ label: 'Policy PDF path' }),
        procedurePdfLabel: fields.text({ label: 'Procedure PDF label' }),
        procedurePdfHref: fields.text({ label: 'Procedure PDF path' }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
    childSafePolicy: singleton({
      label: 'Child Safe Policy',
      path: 'src/content/pages/child-safe-policy/',
      format: { contentField: 'body' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        heading: fields.text({ label: 'Heading' }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
    privacy: singleton({
      label: 'Privacy Policy',
      path: 'src/content/pages/privacy/',
      format: { contentField: 'body' },
      schema: {
        pageTitle: fields.text({ label: 'Page title' }),
        heading: fields.text({ label: 'Heading' }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
  },
  collections: {
    beliefs: collection({
      label: 'Beliefs',
      slugField: 'title',
      path: 'src/content/beliefs/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
    historyEvents: collection({
      label: 'History Events',
      slugField: 'title',
      path: 'src/content/history/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title (internal)' } }),
        dateLabel: fields.text({ label: 'Date label' }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
    ministries: collection({
      label: 'Ministries',
      slugField: 'title',
      path: 'src/content/ministries/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        schedule: fields.text({ label: 'Schedule', multiline: true }),
        order: fields.integer({ label: 'Order', defaultValue: 0 }),
        description: fields.markdoc({ label: 'Description' }),
      },
    }),
  },
});
