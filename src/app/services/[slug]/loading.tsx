import { Container } from "@/components/Container";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-800 animate-pulse" />

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
