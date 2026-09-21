'use client'
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { BlogPostType, BlogType } from '@/app/(DashboardLayout)/types/blog'
import { initialBlogPosts } from '@/app/data/blog-data'

export interface BlogContextProps {
  posts: BlogPostType[]
  sortBy: string
  selectedPost: BlogPostType | null
  isLoading: boolean
  setPosts: Dispatch<SetStateAction<BlogPostType[]>>
  setSortBy: Dispatch<SetStateAction<string>>
  setSelectedPost: Dispatch<SetStateAction<BlogPostType | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  addComment: (postId: string, newComment: BlogType) => void
  fetchPostById: (id: string) => Promise<void>
  error: string | Error | null
}

export const BlogContext = createContext<BlogContextProps>({
  posts: [],
  sortBy: 'newest',
  selectedPost: null,
  isLoading: true,
  setPosts: () => {},
  setSortBy: () => {},
  setSelectedPost: () => {},
  setLoading: () => {},
  addComment: () => {},
  fetchPostById: async () => {},
  error: null,
})

export const BlogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<BlogPostType[]>([])
  const [sortBy, setSortBy] = useState<string>('newest')
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | Error | null>(null)

  const fetchPostById = async (id: string) => {
    setLoading(true)
    setSelectedPost(posts.find((post) => post.id === id) || null)
    setError(null)
    setLoading(false)
  }

  const addComment = (postId: string, newComment: BlogType) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...(post.comments || [])] }
          : post
      )
    )
  }

  useEffect(() => {
    setPosts(initialBlogPosts)
    setLoading(false)
  }, [])

  const value: BlogContextProps = {
    posts,
    sortBy,
    selectedPost,
    isLoading,
    setPosts,
    setSortBy,
    setSelectedPost,
    setLoading,
    addComment,
    fetchPostById,
    error,
  }

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}
