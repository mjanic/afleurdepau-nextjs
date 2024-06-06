import { Button } from "@/components/ui/button"

export default function Buttons() {
    return (
        <div className="m-10 flex flex-col gap-2">
            <div><Button variant="default">Default</Button></div>
            <div><Button variant="destructive">Destructive</Button></div>
            <div><Button variant="ghost">Ghost</Button></div>
            <div><Button variant="link">Link</Button></div>
            <div><Button variant="outline">Outline</Button></div>
            <div><Button variant="secondary">Secondary</Button></div>
        </div>
    )
}