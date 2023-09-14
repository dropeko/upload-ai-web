import { Separator } from "@radix-ui/react-separator"
import { Button } from "./components/ui/button"
import { Github } from 'lucide-react'

function App() {
  return (
    <>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido 💛 no NLW/Rockeseat por PHCA-dev 
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="secondary">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
      
    </>
  )
}

export default App
