"use client";

import { AddParfume } from "../_actions/parfumes";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormState, useFormStatus } from "react-dom";

export default function ParfumeForm() {
  const [error, action] = useFormState(AddParfume, {});

    return (
        <form action={action} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="name">Parfume Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
            />
            {error && typeof error === 'object' && error.name && (
              <div className="text-destructive">{error.name}</div>
            )}
            {error && typeof error === 'string' && (
              <div className="text-destructive">{error}</div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input type="file" id="image" name="image" required />
            {error && typeof error === 'object' && error.image && (
              <div className="text-destructive">{error.image}</div>
            )}
          </div>
          <SubmitButton />
        </form>
    )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  )
}