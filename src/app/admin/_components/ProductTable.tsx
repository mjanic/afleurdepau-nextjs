"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { DeleteProduct } from "../_actions/products"

export function DeleteProductButton({id}:{id:string}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
  
    return (
        <Button 
            variant={"destructive"}
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                  await DeleteProduct(id)
                  router.refresh()
                })
              }}
        >
        Delete product
        </Button>
    )
  }