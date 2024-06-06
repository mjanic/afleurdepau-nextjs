import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import prisma from "@/lib/db";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { DeleteParfumeButton } from "../_components/ParfumeTable";

export default function AdminParfumes() {
    return(
        <>
            <div className="flex justify-between items-center gap-4">
                <PageHeader>Parfumes</PageHeader>
                <Button asChild>
                <Link href="/admin/parfumes/new">Add Parfume</Link>
                </Button>
            </div>
            <ParfumeTable/>
        </>
    )
}

async function ParfumeTable() {
    const parfumes = await prisma.parfume.findMany()

    if (parfumes.length === 0) return <p>No parfumes found</p>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Url</TableHead>
                    <TableHead className="w-0">
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {parfumes.map( parfume => (
                    <TableRow key={parfume.id}>
                        <TableCell>{parfume.name}</TableCell>
                        <TableCell>{parfume.imgUrl}</TableCell>
                        <TableCell>
                            <DeleteParfumeButton id={parfume.id}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

