// components/ProductSpecs.tsx
interface ProductSpecsProps {
    specs: Record<string, string>
  }
  
  export default function ProductSpecs({ specs }: ProductSpecsProps) {
    return (
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {Object.entries(specs).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    {key}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  } 