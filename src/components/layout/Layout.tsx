import { SearchProvider } from "@/context/SearchContext"; 
import { Navbar } from "./Navbar"; 
import { Footer } from "./Footer"; 


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider> 
      <Navbar /> 
        <main>{children}</main>
      <Footer /> 
    </SearchProvider>
  );
}
