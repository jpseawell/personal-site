import { Bio } from '@/components/Bio'
import { Feed } from '@/components/Feed'
import { posts } from '@/data/posts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <Bio />
      <Feed posts={posts} />
    </main>
  )
}
