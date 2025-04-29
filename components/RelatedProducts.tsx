// components/RelatedProducts.tsx
import Link from 'next/link'

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // In a real app, fetch related products from API
  const relatedProducts = [
    { id: 'brazed-plate-heat-exchanger', name: 'Brazed Plate Heat Exchanger' },
    { id: 'semi-welded-plate-heat-exchanger', name: 'Semi-Welded Plate Heat Exchanger' },
  ].filter(product => product.id !== currentProductId)

  if (relatedProducts.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedProducts.map(product => (
          <Link
            key={product.id}
            href={`/products/${category}/${product.id}`}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">Learn more →</p>
          </Link>
        ))}
      </div>
    </section>
  )
}