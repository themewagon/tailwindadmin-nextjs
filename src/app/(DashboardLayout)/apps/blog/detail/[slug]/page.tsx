import BreadcrumbComp from '@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp'
import BlogDetailData from '@/app/components/apps/blog/detail'
import React from 'react'
import { BlogProvider } from '@/app/context/blog-context/index'
import type { Metadata } from 'next'
import { blogPostSlugs } from '@/app/data/blog-data'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPostSlugs.map((slug) => ({ slug }))
}

export const metadata: Metadata = {
  title: 'Blog Details',
}

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Blog Detail',
  },
]
const BlogDetail = () => {
  return (
    <>
      <BlogProvider>
        <BreadcrumbComp title='Blog Detail' items={BCrumb} />
        <BlogDetailData />
      </BlogProvider>
    </>
  )
}

export default BlogDetail
