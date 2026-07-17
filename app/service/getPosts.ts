import { cacheLife, revalidateTag } from "next/cache"

export const getPosts = async () => {
    "use cache"

    cacheLife('hours')

    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 24,
            // revalidate: false
            // revalidate: Infinity,
            tags: ['posts']
        }
    })
    const posts = await data.json()

    console.log(posts);

    return posts
}

const renewPostsCache = () => {
    // revalidateTag('posts', 'max')
    revalidateTag('posts', {
        expire: 60 * 60 * 24 * 7
    })
}