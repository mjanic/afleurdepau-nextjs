"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { DeleteCategory } from "../_actions/categories"

export function DeleteCategoryButton({id}:{id:string}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
  
    return (
        <Button 
            variant={"destructive"}
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                  const response = await DeleteCategory(id)
                  if (response?.error) {
                    alert(response.error)
                  } else {
                    router.refresh()
                  }
                })
              }}
        >
        Remove category
        </Button>
    )
  }