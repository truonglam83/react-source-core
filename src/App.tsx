import { AppRouter } from "@/routes";
// ➕ ADD: test tạm (sẽ remove sau)
// import { TestAuth } from '@/features/test/TestAuth';

/**
 * Root App Component
 *
 * Responsibilities:
 * - Render Router
 * - Wrap global providers (future)
 *
 * Future:
 * - React Query Provider
 * - Theme Provider
 * - Global UI (Toast, Loading...)
 */
function App() {
  return (
    <>
      {/* 🔥 Router */}
      <AppRouter />
    </>
  );
}

export default App;
