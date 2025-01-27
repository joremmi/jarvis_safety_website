export default function BlogSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 mt-12">
        {/* Title Skeleton */}
        <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-12 animate-pulse"></div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <div className="w-full md:w-64 space-y-6">
            {/* Categories Skeleton */}
            <div>
              <div className="h-6 w-32 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Recent Posts Skeleton */}
            <div>
              <div className="h-6 w-32 bg-gray-200 rounded mb-3 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid Skeleton */}
          <div className="flex-1">
            <div className="grid gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 