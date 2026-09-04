<template>
  <NuxtLayout name="default">
    <div class="max-w-[1140px] mx-auto px-4 md:px-6">
      <SectionsHeroSection />
      <SectionsAboutSection />
      <SectionsSkillsSection />
      <SectionsProjectsSection />
      <SectionsContactSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { personalInfo } from '~/data/portfolioData'

// SEO Meta Tags
useSeoMeta({
  title: 'Le Minh Quoc Bao — Backend Software Engineer',
  description:
    'Le Minh Quoc Bao – Backend Software Engineer specializing in Laravel, PHP, MySQL and RESTful API design. Fresher based in Can Tho City, Vietnam.',
  ogTitle: 'Le Minh Quoc Bao — Backend Software Engineer',
  ogDescription:
    'Backend Software Engineer specializing in Laravel, PHP, MySQL and RESTful API design. GPA 3.93 – FPT Polytechnic Highest Honor Graduate.',
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Le Minh Quoc Bao — Backend Software Engineer',
  twitterDescription:
    'Backend Software Engineer specializing in Laravel, PHP, MySQL and RESTful APIs. Based in Can Tho City.',
})

// Schema.org JSON-LD Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        description: personalInfo.bio,
        email: personalInfo.email,
        url: 'https://leminhquocbao.dev',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Can Tho City',
          addressCountry: 'VN',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'FPT Polytechnic',
        },
        sameAs: [
          personalInfo.githubUrl,
          personalInfo.facebookUrl,
        ],
        knowsAbout: [
          'Laravel',
          'PHP',
          'MySQL',
          'RESTful API',
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'Backend Engineering',
        ],
      }),
    },
  ],
})
</script>
