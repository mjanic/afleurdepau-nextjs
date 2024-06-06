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
import { DeleteCategoryButton } from "../_components/CategoryTable";

export default function AdminCategories() {
    return(
        <>
            <div className="flex justify-between items-center gap-4">
                <PageHeader>Categories</PageHeader>
                <Button asChild>
                <Link href="/admin/categories/new">Add Category</Link>
                </Button>
            </div>
            <CategoryTable/>
        </>
    )
}

async function CategoryTable() {
    const categories = await prisma.category.findMany()

    if (categories.length === 0) return <p>No categories found</p>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>How to use Url</TableHead>
                    <TableHead className="w-0">
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories.map( category => (
                    <TableRow key={category.id}>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>{category.howToUseUrl}</TableCell>
                        <TableCell>
                            <DeleteCategoryButton id={category.id}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}