import { useRouter } from 'next/router'

export default function ProductPage() {
    const router = useRouter()
    const { slug } = router.query

    return <div>Product: {slug}</div>
}