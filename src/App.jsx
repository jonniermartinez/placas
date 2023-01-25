import Navigation from "./components/Navigation";
import Home from "./views/Home";
import ErrorBoundary from "./components/ErrorBundary";

export default function App() {
  return (    
  <div className="container min-w-full min-h-screen bg-gradient-to-br to-withe-50/20 from-white-300/70">
        <div>
          <Navigation></Navigation>
        </div>
        <main className="relative flex flex-col justify-center max-w-6xl px-4 pt-20 mx-auto">
          <ErrorBoundary>
              <Home></Home> 
          </ErrorBoundary>
        </main>
  </div>
  );
}