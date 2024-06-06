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
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import { DeleteProductButton } from "../_components/ProductTable";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react";

export default function AdminProducts() {
    return(
        <>
            <div className="flex justify-between items-center gap-4">
                <PageHeader>Products</PageHeader>
                <Button asChild>
                <Link href="/admin/products/new">Add Product</Link>
                </Button>
            </div>
            <ProductTable/>
        </>
    )
}

async function ProductTable() {
    const products = await prisma.product.findMany({
        include: {
            category: true,
            parfume: true
        }
    })

    if (products.length === 0) return <p>No products found</p>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Parfume</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead className="w-0">
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map( product => (
                    <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category.name}</TableCell>
                        <TableCell>{product.parfume.name}</TableCell>
                        <TableCell>{formatCurrency(product.priceInCents/100)}</TableCell>
                        <TableCell>
                            <Image
                                src={product.img1url.substring(6)}
                                width={60}
                                height={40}
                                alt="Product image"
                            />
                        </TableCell>
                        <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreVertical className="hover:bg-gray-400"/>
                                <span className="sr-only">Actions</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <Link className="cursor-pointer" href={`/admin/products/${product.id}`}>
                                    <h3>Edit product</h3>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <DeleteProductButton id={product.id}/>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}