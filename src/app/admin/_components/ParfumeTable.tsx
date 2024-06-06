"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { DeleteParfume } from "../_actions/parfumes"

export function DeleteParfumeButton({id}:{id:string}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
  
    return (
        <Button 
            variant={"destructive"}
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                  const response = await DeleteParfume(id)
                  if (response?.error) {
                    alert(response.error)
                  } else {
                    router.refresh()
                  }
                })
              }}
        >
        Remove parfume
        </Button>
    )
  }