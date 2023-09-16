import { FileVideo, Upload } from "lucide-react";
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { ChangeEvent, useMemo, useState } from "react";

export function VideoInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null);


  function handleFileSelected(event: ChangeEvent<HTMLInputElement>){
    const { files } = event.currentTarget

    if (!files) {
      return
    }

    const selectedFile = files[0];
    setVideoFile(selectedFile)
  }


  const previewURL = useMemo(() => {
    if (!videoFile){
      return undefined
    }

    // o método createObjectURL cria uma preview de um arquivo(img, video, etc...)
    return URL.createObjectURL(videoFile)

  }, [videoFile])

  return (
    <form className="space-y-6">
      <label 
      htmlFor="video"
      className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        {
          videoFile ? (
            <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0" />
          ) : (
            <>
              <FileVideo className="w-4 h4" />
              Carregar video...
            </>
          )
        }

      </label>

      <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de Transcrição</Label>
        <Textarea 
          id="transcription_point"
          className="h-30 leading-relaxed"
          placeholder="Inclua palavras-chave mencionandas no vídeo separadas por vírgula(,)"
        />
      </div>

      <Button className="w-full">
        Carregar video
        <Upload className="w-4 h4 ml-2" />
      </Button>
    </form>
  )
}